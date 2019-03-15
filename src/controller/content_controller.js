import Content from '../model/content';
import AppController from './app_controller';
import FileUploader from '../utils/fileUploader';


class ContentController extends AppController {

    constructor(props){
        super(props);
    }

    index(req, res){
      var allcontents = Content.findAll().then( function(resp){
          res.send(resp)
      });

    }

    create(req, res){
        console.log('create----------------------', this)
        var filepath = FileUploader.saveImageToDir(req.files[0]);
        filepath.then(function(response){
            console.log('reqponse after saving files');
            Content.create({type: response.type, path: response.path}).then(function(r){
                res.send({ status: 200})
            })
        }).catch(function(err){
            console.log('error while saving content', err)
        })

    }

    // whiteListedParams(){
    //     return ['type', 'path']
    // }

    //
    // permit(params){
    //     return this.params(params).only(this.permittedParams)
    // }

}
export default ContentController