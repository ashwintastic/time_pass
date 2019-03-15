import routes from '../../router';
import Jwt from 'jsonwebtoken';
import fs from 'fs';
const path = require("path");
const  cert = fs.readFileSync(path.resolve(__dirname, '../../key.pem'));



export const authRequired =  function (){
    const requestedPath = this.url;
    var r = routes.find(function(route){
        return route.path === requestedPath
    });
    return r.hasOwnProperty('authRequired')
};

export const validateRequest = function (){
    // const token = this.headers.token;
    // try {
    //     var decoded = Jwt.verify(token, cert);
    //     console.log('decodee****',decoded )
    //     return true
    //
    // } catch(err) {
    //     console.log('Some error occured***>>>', err);
    //     return false
    // }
    return true
};