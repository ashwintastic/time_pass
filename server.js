import * as expressConfigs from './includeExpress';
import  bodyParser from 'body-parser';
import  cors from 'cors';
import {authRequired, isValidRequest} from './src/helper/middleWareEnhancer';

expressConfigs.app.use(cors());
expressConfigs.app.use(bodyParser.json());
expressConfigs.app.use(bodyParser.urlencoded({ extended: true}));

expressConfigs.app.use( function(req, res, next){
    req.authRequired = authRequired;
    req.isValidRequest = isValidRequest;
    console.log('hey server called:',req.authRequired() );

    if(req.authRequired()){
        if(!req.isValidRequest()) {
            res.send({status: 403, message: 'Unauthorize request'})
            return
        }
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

require('./config/db/dataBase');
require('./router/route');


const server = expressConfigs.app.listen(expressConfigs.port, function(error){
    if (error){
        console.log(`Error: ${error}`)
        return
    }
    console.log(`server is listining on ${expressConfigs.port}`)
});

