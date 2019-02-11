import * as constants from './includeExpress';
require('./router/route');


const server = constants.app.listen(constants.port, function(error){
    if (error){
        console.log(`Error: ${error}`)
        return
    }

    console.log(`server is listining on ${constants.port}, ${this}`)
});


