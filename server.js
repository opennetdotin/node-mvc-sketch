const express = require('express');
const app = express();
const config = require('./config/server-config');

app.set('views', './views');
app.set('view engine', 'pug');

const routes = require("./routes/routes")(express);
app.use('/', routes);
app.use(express.static('public'));

var http = require('http').createServer(app);
var io = require('socket.io')(http);

require('./socket/socket-events')(io);

http.listen(config.port, () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
});