import JwtAuthentication from '../helper/Jwt';




class AppController {

    constructor(model){
        this.create = this.create.bind(this);
        this.authentication = JwtAuthentication;
        //this.authentication.JwtAuthentication.verifyRequest()
    }

    create(){

    }

}

export default AppController