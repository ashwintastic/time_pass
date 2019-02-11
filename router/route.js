import * as constants from '../includeExpress';

import routes from './index'


routes.map(function(route){
    constants.app.get(route.path, route.action)
});

