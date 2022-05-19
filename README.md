# CLI_RPN
Command-line Reverse Polish Notation (RPN) calculator


## Description
This application is a CLI (command-line interface) Reverse Polish Notation calculator. A user can input Reverse Polish Notation style expression (example: 5 2 +) and this app will run the Reverse Polish Notation on that input and output the answer in the terminal/CLI. 


## How to set up the app
1. Clone this repository to your selected directory
2. Run ``` npm install ```
3. To change the RPN calculations logic, use calculator.js file
4. To make changes related to the handling of inputs, use index.js file
5. Changes to the CLI funtions are in the 'utils' directory
5. Steps to run the app are just below


## How to run
To run - user will type like so in the terminal 
```
./index.js <expression>
```

User's input does not start until 1 blank space following ./index.js
- Example1: typing ./index.js <expression> will result in the input being evaluated (success)
- Example2: typing ./index.js<expression> (no space between ./index.js and <expression>) will result in a bash error trying to find the file (fail)


### How to type out an expression for this app
- *** NOTE: Please use ```x``` in place of ```*``` when typing out expressions using multiplication. Current functionality has an issue with * acting as a wildcard and reading through all of the files in the app's directory when a * is used and results in incorrect calculations. ***
- User must enter numbers (operands) or accepted operators (+ - * /) separated by 1 blank space between each digit/operator.
    - Correct Example: "./index.js 4 3 +" should yield a console log of 7
    - Incorrect Example: "./index.js 4 3+" will result in an incorrect result


## My approach - The calculator
I had never heard of Reverse Polish Notation before. So I started by watching videos on what it was and how it works to get my bearings of what I should be able to do with this calculator. From that point I starting looking how to actually make one of these bad boys.


## My approach - The CLI
Building a CLI is another first for me. So I took to the internet (go figure!) to find what others have done for creating a CLI with NodeJS. I found this CLI for Node package called "create-node-cli" from Ahmad Awais (https://github.com/ahmadawais/create-node-cli) that I used to help with the cli part of the app. This does not function exactly like a traditional CLI would. But given my lack of abundant time, I feel that it does a solid job of calculating RPN expressions in a similar enough manner to what was outlined. 


## Notes for building from here
- Needs fix for '*' acting as wildcard.
- Needs better error handling, especially when evaluating incorrect expressions.
- Test cases for errors could be done more properly
    - Need to make adjustments to address console.log for error in test case for expressions with letters in them (even though case passes).
- Would be great if this app could be refactored to act as a traditional CLI .
    - If refactoring to a traditional CLI is done, things that would be useful to do include:
        - Have calculator should exit when it receives a q command or an end of input indicator (EOF / Ctrl+D).
        - The CLI would be able to handle inputs 1 at a time and then be able to evaluate, as was the original intention of the code exercise's creator. 
        ```
        > 5 
        5
        > 8
        8
        > +
        13
        ```
- More testing for numerous cases would be very useful.


## Known issues / bugs
This app needs some work. But I do feel that if given enough time and love, all issues could be worked out. In the meantime, here are some of the known issues as of this writing.

- Regex does not catch for letters in other languages. This can be handled in future versions.
- Variables used in expressions do not work at this time. I would need to research if/how rpn deals with variables before implementing that logic. 
- As mentioned above, * working as wildcard and having to use 'x' instead for multiplication.
- Some functions do not calculate properly if spacing rules are not followed properly (i.e. 3 4 + 2-  calculates to 2, rather than 5 as one would expect). This could be fixed as well in future.
- I am sure there are more issues that can be found if one was to thoroughly test many possible variations of inputs.
