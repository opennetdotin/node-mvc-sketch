class WelcomeController {
    homePage(req, res) {
        res.render("home-page", {
            title: 'Home Page',
            data: "Welcome to home Page"
        });
    }

    aboutPage(req, res) {
        res.render("about-page", {
            title: 'About Page',
            data: "This is about Page"
        });
    }

    chatPage(req, res) {
        res.render("chat", {
            title: 'Chat Page',
            data: "This is chat Page"
        });
    }
}
module.exports = new WelcomeController();