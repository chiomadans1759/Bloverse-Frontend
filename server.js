var prettyjson = require('prettyjson'); // Un-uglify JSON output
var {google} = require('googleapis');
var key = require('./src/Bloverse-8f6df087ae84.json'); // Downloaded JSON file from google Analytics API Dashboard
var viewID = '183411172'; // Google Analytics view ID
var analytics = google.analyticsreporting('v4'); // Used for pulling report
var jwtClient = new google.auth.JWT(key.client_email, // For authenticating and permissions
                                    null,
                                    key.private_key,
                                    ['https://www.googleapis.com/auth/analytics.readonly'],
                                    null);

 var express = require('express');
 var path = require('path');
var serveStatic = require('serve-static');

jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log('Reeeeejected');
      console.log(err);
      return;
    } else {
      console.log('Yup, we got authorized!');
    }
  });

  // Set up what we data we want to pull from Google Analytics
metrics = [{
    expression: 'ga:pageviews'
  }];
   
  date_filters = [{
    startDate: '7daysAgo',
    endDate: 'today',
  }];
   

   
  var req = {
    reportRequests: [{
      viewId: viewID,
      metrics: metrics
    }],
  };
   
  // Options for prettifying JSON output
  var pretty_json_options = {
    noColor: false
  };
   
  // Pull report and output the data
  analytics.reports.batchGet({
      auth: jwtClient,
      resource: req
    },
    function (err, response) {
      if (err) {
        console.log('Failed to get Report');
        console.log(err);
        return;
      }
      // response.data is where the good stuff is located
      console.log('Success - got something back from the Googlez');
      console.log(prettyjson.render(response.data, pretty_json_options));
    }
  );

app = express();
app.use(serveStatic(path.join(__dirname, '/dist')))


    
var port = process.env.PORT || 5001;
app.listen(port);
console.log('server started '+ port);
