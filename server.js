var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

let app;

app = express();
app.use(history());

app.use(serveStatic(path.join(__dirname, '/dist')));

/*
app.use(serveStatic(path.join(__dirname, '/dist'), {
	"index": false
}))

app.get('/posts/:slug', function (req, res) {
	res.sendFile(__dirname + '/dist/post.html')
})

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/dist/index.html')
})

*/

var port = process.env.PORT || 5001;
app.listen(port);
console.log('server started ' + port); // eslint-disable-line no-console
