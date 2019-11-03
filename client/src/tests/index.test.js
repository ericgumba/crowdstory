import * as types from '../constants/ActionTypes'
import {addParagraph} from '../actions/index'
var chai = require("chai");
var expect = chai.expect;


 

describe("action/index.js tests", function() {
    it("tests add paragraph to return object", function() {
        expect(addParagraph("text")).to.be.a("Object");
    });

    it('tests addParagraph to return object with text', function(){

        expect(addParagraph("text")).to.be.eql({
            type: types.ADD_PARAGRAPH,
            text:"text"})
    })


});