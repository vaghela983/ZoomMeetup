var express = require('express');
var cors=require('cors')
var app = express();
const rp = require('request-promise');

app.use(cors())
app.use(express.static(__dirname + '/public'));

app.post("/newmeeting", (req, res) => {
    email = "";
    var token=""
    var options = {
      method: "POST",
      uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
      body: 
      {"topic": "mahipat983",
      "type": 2,
      "start_time": "2019-12-11T10:35:01",
      "duration": 60,
      "timezone": "Asia/Shanghai",
      "password": "password",
      "agenda": "Agenda",
      "recurrence": {
        "type": 1,
        "repeat_interval": 1,
        "weekly_days": "1,2,3,4,5,6",
        "end_times": 50
      },
      "settings": {
        "host_video": true,
        "participant_video": true,
        "cn_meeting": true,
        "in_meeting": false,
        "join_before_host": true,
        "mute_upon_entry": false,
        "watermark": false,
        "use_pmi": false,
        "approval_type": 2,
        "registration_type": 3,
        "audio": "both",
        "auto_recording": "cloud",
        "enforce_login": false,
        "alternative_hosts": ""
        
      }
    },
      auth: {
        bearer: token
      },
      headers: {
        "User-Agent": "Zoom-api-Jwt-Request",
        "content-type": "application/json"
      },
      json: true //Parse the JSON string in the response

    }
    rp(options)
    .then(function(response) {
      console.log("response is: ", response);
      res.json(response);
    })
    .catch(function(err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
  
   
  });

app.listen(8080, ()=>{console.log('127.0.0.1')})