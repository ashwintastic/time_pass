import * as constants from './includeExpress';

const bodyParser = require('body-parser');
constants.app.use(bodyParser.json());
constants.app.use(bodyParser.urlencoded({ extended: true}));
//constants.app.use(params.expressMiddleware());

constants.app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./config/db/dataBase');
require('./router/route');

const server = constants.app.listen(constants.port, function(error){
    if (error){
        console.log(`Error: ${error}`)
        return
    }
    console.log(`server is listining on ${constants.port}, ${this}`)
});

