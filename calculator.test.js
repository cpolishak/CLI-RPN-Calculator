const { it } = require("mocha");
const { expect } = require("chai");
const rpnCalculation = require("./calculator");

/* I used Chai because I have worked more with BDD style testing. 
   This could be changed if preferable */
describe("rpnCalculation() tests", () => {
    it("should error when a blank string is entered", () => {
        expect(rpnCalculation(""))
        expect("Error: Sorry, at this time you must enter a complete expression. Please try again with a complete expression (i.e. 3 6 +)")
            .to.be.ok;
    })

    it("should error when an incomplete expression is entered", () => {
        expect(rpnCalculation("3"))
        expect("Error: Sorry, at this time you must enter a complete expression. Please try again with a complete expression (i.e. 3 6 +)")
            .to.be.ok;
    })

    it("should error when expression contains a letter (other than x)", () => {
        expect(rpnCalculation("2 4 b +"))
            .to.equal("No result")
    })

    it("should parse a float number", () => {
        expect(rpnCalculation("3.5"))
            .to.equal(3.5);
    });

    it("should process addition expression properly", () => {
        expect(rpnCalculation("3 5 +"))
            .to.equal(8);
    })

    it("should process multiplication expression properly", () => {
        expect(rpnCalculation("3 5 x"))
            .to.equal(15);
    })

    it("should process subtraction expression properly", () => {
        expect(rpnCalculation("3 5 -"))
            .to.equal(-2);
    })

    it("should process division expression properly", () => {
        expect(rpnCalculation("3 5 /"))
            .to.equal(0.6);
    })
});