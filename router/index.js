import ContentController from '../src/controller/content_controller';
import AdminController from '../src/controller/admin_controller'

const ContentCtrl = new ContentController();

const routes = [
    {
        path: '/',
        action: ContentCtrl.index,
        verb: 'get'
    },

    {
        path: '/admin-console',
        action: AdminController.index,
        verb: 'get'
    },

    {
        path: '/create-content',
        action: ContentCtrl.create,
        verb: 'post',
        acceptFile: true
    }
];

export default routes
