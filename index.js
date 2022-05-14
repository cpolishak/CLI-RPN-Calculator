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

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	let star = input;
	let search = star.search('*')
	console.log(search);

	console.log(input.join(' '));
	if(input.includes('*')) {
		console.log("it's finding the *")
	}

	/* if input (anything after) */
	let mathExp;
	if(input !== '') {
		// need to figure out how to solve issue with * being used in input
		mathExp = input.join(' '); 
		// console.log("after join", input);
		console.log(rpnCalculation(mathExp));
	}

	/* check and see if string starts with anything other than a number */
	let myRegex = /^[A-Z]+$/i;
	let inputHasLetters = myRegex.test(input);
	// console.log(inputHasNumbers);
	
	/* Error if user input starts with any letters */
	if(inputHasLetters === true) {
		console.log("Error - expressions cannot have letters");
	}

	/* figure out how to handle state to make data entered item by item stay in memory to be evaluated */
	// if single digit entered, add to array
	// let toCalculate = [];
	// if(input.length === 1 && inputHasLetters === false) {
	// 	// maybe can use this conditional to continue building expression until complete
	// 	// could be done with prompts via console.log
		
	// 	toCalculate.push(input);
	// 	// console.log(toCalculate);
	// }
	// console.log(toCalculate);

	debug && log(flags);
})();
