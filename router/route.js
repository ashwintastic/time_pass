import * as constants from '../includeExpress';
import routes from './index'


routes.map(function(route){
    // TODO:: use metaprogramming remove switch case
    switch(route.verb) {
        case 'get':
          constants.app.get(route.path, route.action);
          break;
        case 'post':
          constants.app.post(route.path, route.action);
            break;
        case 'patch':
          constants.app.patch(route.path, route.action);
        case 'put':
          constants.app.put(route.path, route.action);
        default:
        // code block
    }

});

