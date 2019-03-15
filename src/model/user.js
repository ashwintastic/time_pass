import { User } from '../../config/db/userModel';

User.index = function(){


};

User.prototype.show = function(){
    console.log('hi')
};



export default User