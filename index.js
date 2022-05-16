#!/usr/bin/env node

/**
 * CLI-RPN-Calculator
 * RPN calculator on CLI
 *
 * @author Chris Polishak <https://cpolishak.github.io/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const rpnCalculation = require('./calculator');
const error = require('./error');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	/* *** Need to find solution to substituting '*' with 'x' for multiplication *** */

	/* if input is not a blank string, look to run checks and evaluate rpnCalculation() */
	if(input !== '') {
		let mathExp = input.join(' ').toString(); 
		console.log("Your expression was:", mathExp);
		/* check and see if string starts with any letter and error if so */
		let myRegex = /^[A-Z]+$/i;
		let inputHasLetters = myRegex.test(input);

		/* Error if user input starts with any letters */
		if(inputHasLetters === true) {
			let msg = "Expressions cannot be evaluated with letters at this time";
			error(msg);
		}
		/* Error if expression is not complete (needs at least 2 operands and an operator) */
		else if (input.length < 3) {
			let msg = "Sorry, at this time you must enter a complete expression. Please try again with a complete expression (i.e. 3 6 +)"
			error(msg);
		} else {
			console.log(rpnCalculation(mathExp));
		}
	}

	/* figure out how to handle state to make data entered item by item stay in memory to be evaluated 
	   once an operand is returned */

	debug && log(flags);
})();
