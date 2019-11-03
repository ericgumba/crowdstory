import * as types from '../constants/ActionTypes'
import {addParagraph} from '../actions/index'

import chapter from '../reducers/chapters'
var chai = require("chai");
var expect = chai.expect;



 

describe("reducers/chapters.js tests", function() { 

    
    it('should return an array ', () =>{
        expect( chapter(['In the beginning there was light'], {} ) ).to.be.a('Array')
        
    })
    
    it('should append a paragraph to state', () =>{
         
        expect( chapter(['a'], addParagraph('b') )).to.be.eql(['a', 'b'] )
    } )

});