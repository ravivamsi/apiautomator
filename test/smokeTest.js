var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var mocha = require("mocha");

var base = "https://jsonplaceholder.typicode.com";
var util = require("util");


describe('Return the JSON Response for all the records', function() {
  it('Returns the json response', function(done){
    request.get({ url: base + '/posts'},
    function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
    });
  });
});

describe('Return the JSON Response for a specific record', function() {
  it('Returns the json response', function(done){
    request.get({ url: base + '/posts/2'},
    function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
    });
  });
});


describe('Return the comments in the JSON Response', function() {
  it('Returns the json response', function(done){
    request.get({ url: base + '/posts/1/comments'},
    function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
    });
  });
});
