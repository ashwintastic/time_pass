const param = require('params');

class AppController {

    constructor(model){
        this.create = this.create.bind(this);
        this.params = param
    }

    create(){

    }


}

export default AppController