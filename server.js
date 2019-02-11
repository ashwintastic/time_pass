import * as constants from './includeExpress';

constants.app.use(constants.orm.express("mysql://ashwin:password@localhost/10Gags", {

    define: function (db, models, next) {
        models.content = db.define("contents", {
            id: Number,
            type: Number,
            path: String
        });
        next();
    }
}));

require('./router/route');



const server = constants.app.listen(constants.port, function(error){
    if (error){
        console.log(`Error: ${error}`)
        return
    }

    console.log(`server is listining on ${constants.port}, ${this}`)
});


