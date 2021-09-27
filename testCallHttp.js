var http = require("http");

var requestObject = {
    "url" : "http://hudson.scriptr.io:9020/firstContextPath",
    "method" : "GET" // optional if GET
}

var response = http.request(requestObject);
return response;