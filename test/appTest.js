var jsonSchemaDef = {
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "title": "The Userid Schema ",
      "default": 0,
      "examples": [
        1
      ]
    },
    "id": {
      "type": "integer",
      "title": "The Id Schema ",
      "default": 0,
      "examples": [
        1
      ]
    },
    "title": {
      "type": "string",
      "title": "The Title Schema ",
      "default": "",
      "examples": [
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      ]
    },
    "body": {
      "type": "string",
      "title": "The Body Schema ",
      "default": "",
      "examples": [
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      ]
    }
  }
};

var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var mocha = require("mocha");
var chai = require('chai');
chai.use(require('chai-json-schema'));
var sys = require('sys');
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
