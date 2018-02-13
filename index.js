'use strict';

const querystring = require('querystring');
var request = require('request');

const yaml = require('js-yaml');
const fs   = require('fs');


exports.handler = (event, context, callback) => {
 var status = {}
   //var a = JSON.parse(event.headers)
    //console.log(event.headers["X-GitHub-Event"]);
    //console.log(event)
    //console.log(event)
    const params = querystring.parse(event.body);
    const jsonBody = JSON.parse(params["payload"])
    const repo_name = jsonBody["repository"]["full_name"]

    // Get document, or throw exception on error
      var doc
 try {
  var configPath = os.environ['LAMBDA_TASK_ROOT'] + "/mappings.yaml"
   doc = yaml.safeLoad(fs.readFileSync(configPath));
  console.log(doc);
 } catch (e) {
  console.log(e);
 }

 console.log(doc["repositories"])

    if(repo_name == "issc29-GHfB/test") {
       var endpoint = "https://requestb.in/rmttt7rm"
       var headers = {
        'content-type': event.headers["content-type"],
        'X-GitHub-Delivery': event.headers["X-GitHub-Delivery"],
        'X-GitHub-Event': event.headers["X-GitHub-Event"]
        }


       var options = {
         url: endpoint,
         method: 'POST',
         timeout: 1500,
         headers: headers,
         body: event.body
       }

       request(options, function (error, response, body) {
        if(error) {
         console.log(error)
         callback(null, error)
        }
        else {
         status = {
          "statusCode": response.statusCode,
          "headers": response.headers,
          "body": response.body
         }
         console.log(status)
         callback(null, response.statusCode);
        }
      })
    }
};
