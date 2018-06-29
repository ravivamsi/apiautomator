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
      expect(response.statusCode).to.equal(200);
      expect(body).to.not.be.jsonSchema(jsonSchemaDef);
      console.log(body);
      done();
    });
  });



});
