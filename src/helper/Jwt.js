import jwt from 'jsonwebtoken';
import configsecret from '../../config/secret.json'
import fs from 'fs';

const JwtAuthentication = (function(){

    return {
        generateToken: function () {
            return new Promise(function (resolve, reject) {
                jwt.sign({foo: 'bar'}, configsecret.key,
                    {algorithm: 'RS256'}, function (err, token) {
                        if (err) {
                            console.log('err', err)
                            reject({err: true, message: err})
                        }
                        resolve({token: token, err: false})
                    });
            });
        },

        verifyRequest: function (req) {
            if(!req.authRequired()){
                return true
            }

            var cert = fs.readFileSync('../../key.pem');
            jwt.verify(req.headers.token, cert, function (err, decoded) {
                console.log('after callback =================')
                console.log(decoded.foo)
            });
        }
    }
})();
export default  JwtAuthentication