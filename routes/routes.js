let WelcomeController = require('../controller/welcome.controller');

module.exports = function (express) {
    let route = express.Router();
    route.get('/', WelcomeController.homePage);

    route.get('/about', WelcomeController.aboutPage);

    route.get('/chat', WelcomeController.chatPage);
    return route;
}
