class HomeController {

     index(req, res){
        res.send({messgae: 'hi'})
    }
}
export default new HomeController()