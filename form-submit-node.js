var request = require("request");

let cookie = Object.keys(req.cookies).filter(key => key.includes("_pk_id"));
let key = cookie[cookie.length - 1]
let value = obj[key]
let accArr = key.split('.')
let accountId = accArr[1]
let valArr = value.split('.')
let visitorId = valArr[0]
let sessionId = valArr[1]
let visit = valArr[2]


var postData = {
    'contactName': req.body.firstName + " " + req.body.lastName,
    'accountId': accountId,
    'visitorTrackingId': visitorId,
    'sessionId': sessionId,
    'visit': visit,
    'email': req.body.email,
    'phoneNumber': req.body.phone,
    'companyName': req.body.company,
    'comment': req.body.comment,
}

var endpoint = 'http://35.182.231.171:3010/api/contacts/contactSubmit';

var options = {
    body: postData,
    json: true,
    url: endpoint
}

request.post(options, function (err, httpResponse, body) {
    if (err) {
        return console.error('post failed:', err);
    }
    console.log('Request successful!  Server responded with:', body);
});
