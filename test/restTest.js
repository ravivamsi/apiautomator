var jsonSchemaDef = {
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer"
    },
    "id": {
      "type": "integer"
    },
    "title": {
      "type": "string"
    },
    "body": {
      "type": "string"
    }
  }
};

var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var assert = require("chai").assert;
var mocha = require("mocha");
var chai = require('chai');
chai.use(require('chai-json-schema'));
// var sys = require('sys');
var fs = require('fs');
var base = "https://jsonplaceholder.typicode.com";
var util = require("util");
// var jsonSchemaDefinition = require('./../resources/jsonschema/samplejsonschem.json');

describe('Simple App Test', function() {
  it('Returns the json response', function(done){
    request.get({ url: base + '/posts/1'},
    function(error, response, body) {
      // console.log(response)
      // console.log(body);

      var responseBody = JSON.parse(body);

      // Status Code Assertions
      expect(response.statusCode).to.equal(200);
      expect(response.statusCode).to.not.equal(400);
      expect(response.statusCode).to.not.equal(500);
      expect(response.statusCode).to.not.equal(300);
      expect(response.statusCode).to.not.equal(201);

      // Schem Definition Assertion
      expect(body).to.not.be.jsonSchema(jsonSchemaDef);

      // Response Body Assertion
      expect(responseBody).to.have.property('id').but.not.own.property('Id');
      expect(responseBody).to.have.property('userId').but.not.own.property('Userid');
      expect(responseBody).to.have.property('title');
      expect(responseBody).to.have.property('body');

      expect(responseBody).to.have.all.keys('id', 'userId', 'title', 'body');
      expect(responseBody).to.not.have.any.keys('Id', 'ID', 'UserId', 'Userid', 'Title', 'Body');

      // Key Type
      expect(responseBody.body).to.be.a('string');
      expect(responseBody.title).to.be.a('string');
      expect(responseBody.id).to.be.a('number');
      expect(responseBody.userId).to.be.a('number');


      done();
    });
  });



});
