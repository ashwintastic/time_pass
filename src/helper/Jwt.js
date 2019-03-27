import jwt from 'jsonwebtoken';
//import publicKey from '../../config/secret.json'
import fs from 'fs';
const path = require("path");
const  cert = fs.readFileSync(path.resolve(__dirname, '../../mykey.pem'), 'utf8');


const JwtAuthentication = (function(){
    return {
        generateToken: function () {
            return new Promise(function (resolve, reject) {
                jwt.sign({foo: 'bar'}, cert,
                     function (err, token) {
                        if (err) {
                            console.log('err', err)
                            reject({err: true, message: err})
                        }
                        resolve({token: token, err: false})
                    });
            });
        }
    }
})();
export default  JwtAuthentication