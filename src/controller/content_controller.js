import Content from '../model/content'

class ContentController {

     index(req, res){

        req.models.content.get(1, function(err, r){
            res.send({ data: r })
        })
    }
}
export default new ContentController()