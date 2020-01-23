const UserController = require('../controllers/userController')

module.exports = function(router) {

    router.post('/user/login', UserController.login_user);

}