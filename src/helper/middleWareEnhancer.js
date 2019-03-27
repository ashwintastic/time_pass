import routes from '../../router';
import Jwt from 'jsonwebtoken';
import fs from 'fs';
//import publicKey from '../../config/secret.json'

const path = require("path");
const  publicKey = fs.readFileSync(path.resolve(__dirname, '../../mykey.pub'), 'utf8');


console.log('public key', publicKey )
export const authRequired =  function (){
    const requestedPath = this.url;
    var r = routes.find(function(route){
        return route.path === requestedPath
    });
    return r.hasOwnProperty('authRequired') && r.authRequired
};

export const isValidRequest = function (){
    const token = this.headers.token;
    console.log('token is : ', publicKey)
    try {
        var decoded = Jwt.verify(token, publicKey);
        console.log('decodee****',decoded )
        return true

    } catch(err) {
        console.log('Some error occured***>>>', err);
        return false
    }
};