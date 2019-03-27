import * as expressConfig from '../includeExpress';
import routes from './index'
import  multer from 'multer';
import cors from 'cors';
const upload = multer();

routes.map(function(route){
    // TODO:: use metaprogramming remove switch case
    switch(route.verb) {
        case 'get':
            expressConfig.app.get(route.path, route.action);
            break;
        case 'post':
            if (route.hasOwnProperty('acceptFile')){
                expressConfig.app.post(route.path, upload.any(), route.action);
            }
            else {
                expressConfig.app.post(route.path, upload.any(), route.action);
            }
            break;
        case 'patch':
            expressConfig.app.patch(route.path, route.action);
             break;
        case 'put':
            expressConfig.app.put(route.path,  route.action);
            break;
        default:
        // code block

    }

});


