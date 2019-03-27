import ContentController from '../src/controller/content_controller';
import AdminController from '../src/controller/admin_controller'
import AuthenticationController from '../src/controller/authentication_controller'
const ContentCtrl = new ContentController();

const routes = [
    {
        path: '/',
        action: ContentCtrl.index,
        verb: 'get',
        authRequired: true
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
        acceptFile: true,
        authRequired: true
    },
    {
        path: '/facebook/callback',
        action: AuthenticationController.faceBookcallBack,
        verb: 'post'
    }
];

export default routes
