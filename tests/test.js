/*  global chai:false */

"use strict";

const expect = chai.expect;

describe("ajax",()=>{
    
	it("is a function",()=>{
		expect(ajax).to.be.a("function");
	});
    
    it("returns response object",()=>{
        ajax({
            type: "GET",
            url: "../package.json",
            onSuccess: function (resp) {
                expect(resp).to.be.an("object");
                console.log(resp);
            }
        });
		
	});
});