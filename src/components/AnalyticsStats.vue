<template>
<div class="container">
 <h1>Hello Analytics Reporting API V4</h1>

<!-- The Sign-in button. This will run `queryReports()` on success. -->
<p class="g-signin2" data-onsuccess="queryReports"></p>

<!-- The API response will be printed here. -->
<textarea cols="80" rows="20" id="query-output"></textarea>
</div>

</template>

<script>
var VIEW_ID = '183411172';
export default {
    methods: {
    queryReports() {
    gapi.client.request({
      path: '/v4/reports:batchGet',
      root: 'https://analyticsreporting.googleapis.com/',
      method: 'POST',
      body: {
        reportRequests: [
          {
            viewId: 183411172,
            dateRanges: [
              {
                startDate: '7daysAgo',
                endDate: 'today'
              }
            ],
            metrics: [
              {
                expression: 'ga:sessions'
              }
            ]
          }
        ]
      }
    }).then(displayResults, console.error.bind(console));
  },

  displayResults: function(response) {
    var formattedJson = JSON.stringify(response.result, null, 2);
    document.getElementById('query-output').value = formattedJson;
  }
    }

}
</script>

