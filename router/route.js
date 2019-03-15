import * as constants from '../includeExpress';
import routes from './index'
import  multer from 'multer';

const upload = multer();

routes.map(function(route){
    // TODO:: use metaprogramming remove switch case
    switch(route.verb) {
        case 'get':
            constants.app.get(route.path, route.action);
            break;
        case 'post':
            if (route.hasOwnProperty('acceptFile')){
                constants.app.post(route.path, upload.any(), route.action);
            }
            else {
                constants.app.post(route.path, upload.any(), route.action);
            }
            break;
        case 'patch':
            constants.app.patch(route.path, route.action);
             break;
        case 'put':
            constants.app.put(route.path, route.action);
            break;
        default:
        // code block

    }

});


