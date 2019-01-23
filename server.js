var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var axios = require('axios')
var moment = require('moment')
require('dotenv').config()

//var history = require('connect-history-api-fallback');

let app;

app = express();
//app.use(history());

app.set('views', './dist')
app.set('view engine', 'pug')

app.use(serveStatic(path.join(__dirname, '/dist'), {
  "index": false
}))

app.get('/redirect/:uri', async function (req, res) {

  let post, keypointString;
  try{
    const resp = await axios.get(`${process.env.VUE_APP_API}posts?slug=${req.params.uri}`)
    post = resp.data.data && resp.data.data.posts[0];

    let { keypoint, title, slug, image_url, duration, location, device_type, author } = post;
    if(keypoint)
      keypointString = keypoint.join('. ')
    else
      keypointString = `Captured ${moment(duration, "YYYY-MM-DD").fromNow()} in ${location} using a ${device_type}`

    author = `${author.first_name} ${author.last_name}`
    res.render('post', { baseUrl: process.env.VUE_APP_URL, keypointString, title, slug, image_url, author })
  }catch(err){
    console.log('Something went wrong with fetching post and rendering') // eslint-disable-line no-console
    return;
  }
})

app.enable('trust proxy');
app.use(function(req, res, next) {
  if (process.env.NODE_ENV === 'production' && !req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }

  next();
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

var port = process.env.PORT || 5001;

app.listen(port);
console.log('server started ' + port); // eslint-disable-line no-console
