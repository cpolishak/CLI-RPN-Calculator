# CLI_RPN
Command-line Reverse Polish Notation (RPN) calculator

## Description
This application is a CLI (command-line interface) Reverse Polish Notation calculator. A user can input Reverse Polish Notation style expression (example: 5 2 +) and this app will run the Reverse Polish Notation on that input and output the answer in the terminal/CLI. 


# How to run
To run - user will type 
```
./index.js <expression>
```

User's input does not start until 1 blank space following ./index.js
- Example1: typing ./index.js <expression> will result in the input being evaluated (success)
- Example2: typing ./index.js<expression> will result in a bash error trying to find the file (fail)

### How to type out an expression for this app

- No letters are allowed in expressions at this time. Parhaps that could be worked on in future implementations.
- User must enter digits (operands) or accepted operators (+ - * /) separated by 1 blank space between each digit/operator.
    - Correct Example: "./index.js 4 3 +" should yield a console log of 7

    - Incorrect Example1: "./index.js 4 3+" will result in an incorrect result
    - Incorrect Example2: "./index.js 4 3 + " (with extra space after +) will result in incorrect result


## My approach - The calculator
I had never heard of Reverse Polish Notation before. So I started by watching videos on what it was and how it works to get my bearings of what I should be able to do with this calculator. From that point I starting looking how to actually make one of these bad boys.


## My approach - The CLI
Building a CLI is another first for me as someone who did not study mathematics or Computer Science. So I took to the internet (go figure!) to find what others have done for creating a CLI with NodeJS. I found this CLI for Node package called "create-node-cli" from Ahmad Awais (https://github.com/ahmadawais/create-node-cli) that I used to help with the cli part of the app.


### Notes for building from here


### Known issues / bugs

