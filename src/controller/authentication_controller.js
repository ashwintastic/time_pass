import Content from '../model/content';
import AppController from './app_controller';
import FileUploader from '../utils/fileUploader';
import User from '../model/user';



class AuthenticationController extends AppController {

    // constructor(props){
    //     //super(props);
    //     //this.permittedParams = this.whiteListedParams()
    // }

     static faceBookcallBack(req, res){
      User.find({fbID: req.body.id}).then(function(resp){
        const authInstance = new AuthenticationController();
        if(resp == null){
          authInstance.createUserAndGenerateToken(req.body, res)
        }
        else {
          authInstance.generateToken(req.body, res)
        }
      }).catch(function(err){
          console.log('Some error occured while finding user', err)
         })
    }


    async generateToken(user, res){
        const token = await this.authentication.generateToken({id: user.id, name: user.name});
        res.send({token: token})
    }

    async createUserAndGenerateToken(userData, res){
        console.log('----------======>', userData)
        const user = await User.create({name: userData.name, fbID: userData.id,
                                        userName: userData.email});
        const token = await this.authentication.generateToken({id: user.id, name: user.name});
        res.send(token)
    }


}
export default AuthenticationController