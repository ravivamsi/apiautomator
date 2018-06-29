var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var mocha = require("mocha");
var chai = require('chai');

var fs = require('fs');
var base = "https://jsonplaceholder.typicode.com";
var util = require("util");

var requestBody = "<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Add xmlns="http://tempuri.org/"><intA>1000</intA><intB>100</intB></Add></soap:Body></soap:Envelope>";

// var requestBody = "<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body></soap:Body></soap:Envelope>";



    var postOptions = {
      hostname: 'http://www.dneonline.com',
      path: '/calculator.asmx',
      method: 'POST',
      headers: {
        'Content-Type':'text/xml;charset=utf-8',
        'Content-Length': 'length',
        'SOAPAction':"http://tempuri.org/Add",
      }
    };

    var req = http.request(postOptions, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    // write data to request body
    req.write(requestBody);
    req.end();
  });




// describe('Simple SOAP Service Test', function() {
//   it('Test to add two numbers', function(done){
//       request.post({url:'http://www.dneonline.com/calculator.asmx', form: requestBody}, function optionalCallback(err, httpResponse, body) {
//       if (err) {
//         return console.error('upload failed:', err);
//       }
//       console.log('Here is the response ', body);
//     });
//   });
//
//
//
// });
