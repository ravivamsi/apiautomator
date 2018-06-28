// const assert = require("chai").assert;
//
// const app = require("../app");
//
//
// describe('App', function(){
//   it('App Should return hello', function(){
//     assert.equal(app(), 'hello');
//   });
// });


var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var mocha = require("mocha");

var base = "https://jsonplaceholder.typicode.com";
var util = require("util");


describe('Simple App Test', function() {
  it('Returns the json response', function(done){
    request.get({ url: base + '/posts/1'},
    function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
    });
  });
});
