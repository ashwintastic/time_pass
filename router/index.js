import ContentController from '../src/controller/content_controller'
const routes = [
    {
        path: '/',
        action: ContentController.index,
        verb: 'get'
    }
];

export default routes
