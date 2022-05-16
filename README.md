# CLI_RPN
Command-line Reverse Polish Notation (RPN) calculator

## Description
This application is a CLI (command-line interface) Reverse Polish Notation calculator. A user can input Reverse Polish Notation style expression (example: 5 2 +) and this app will run the Reverse Polish Notation on that input and output the answer in the terminal/CLI. 


## How to set up the app
1. Clone this repository to your selected directory
2. Run ``` npm install ```
3. Steps to run the app are just below


# How to run
To run - user will type like so in the terminal 
```
./index.js <expression>
```

User's input does not start until 1 blank space following ./index.js
- Example1: typing ./index.js <expression> will result in the input being evaluated (success)
- Example2: typing ./index.js<expression> will result in a bash error trying to find the file (fail)


### How to type out an expression for this app
- *** NOTE: Please use ```x``` in place of ```*``` when typing out expressions using multiplication. Current functionality has an issue with * acting as a wildcard and reading through all of the files in the app's directory when a * is used and results in incorrect calculations. ***
- At this time, using letters beside 'x' will not yield accurate results. Please avoid doing so.  Parhaps that could be worked into future implementations.
- User must enter digits (operands) or accepted operators (+ - * /) separated by 1 blank space between each digit/operator.
    - Correct Example: "./index.js 4 3 +" should yield a console log of 7

    - Incorrect Example1: "./index.js 4 3+" will result in an incorrect result
    - Incorrect Example2: "./index.js 4 3 + " (with extra space after +) will result in incorrect result


## My approach - The calculator
I had never heard of Reverse Polish Notation before. So I started by watching videos on what it was and how it works to get my bearings of what I should be able to do with this calculator. From that point I starting looking how to actually make one of these bad boys.


## My approach - The CLI
Building a CLI is another first for me as someone who did not study mathematics or Computer Science. So I took to the internet (go figure!) to find what others have done for creating a CLI with NodeJS. I found this CLI for Node package called "create-node-cli" from Ahmad Awais (https://github.com/ahmadawais/create-node-cli) that I used to help with the cli part of the app. This does not function exactly like a traditional CLI would. But given my lack of abundant time, I feel that it does a solid job of calculating RPN expressions in a similar enough manner to what was outlined. 


### Notes for building from here
- Needs fix for '*' acting as wildcard.
- Needs better error handling, especially when evaluating incorrect expressions.
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


### Known issues / bugs
This app needs some work. But I do feel that if given enough time and love, all issues could be worked out. In the meantime, here are some of the known issues as of this writing.

- Regex does not properly catch errors if letters used in expressions, except when a letter is used as the first character of the expression. Could be left alone to evaluate expressions using variables (if that behavior is desireable).
- Variables used in expressions do not work at this time.
- As mentioned above, * working as wildcard and having to use 'x' instead for multiplication.
- Some functions do not calculate properly if spacing rules are not followed properly (i.e. 3 4 + 2-  calculates to 2, rather than 5 as one would expect).
- I am sure there are more if one was to thoroughly test many possible variations of inputs.
