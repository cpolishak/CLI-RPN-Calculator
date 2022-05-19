const error = require('./error');

/* receives a string (expression) and will output result */
function rpnCalculation(expression) {
    var result = [];
    /* split the string into items with regex */
    var items = expression.split(/\s+/);
    for (var i = 0; i < items.length; i++) {
        /* error if expression contains letters (except x) */
        var regex = /^[a-wy-zA-WY-Z]+$/;
        var regexCheck = regex.test(items[i]);
        if(regexCheck){
            let msg = 'Expressions cannot be evaluated with letters at this time';
			error(msg);
            return 'No result';
        }
        /* Switch statement used to execute a calculation when items[i] is an operator */
        switch (items[i]) {
            /* Allowed operators are the following (+, -, *, /) */
            /* The pop method is used because RPN evaluates by popping 2 numbers off
            of the stack and using the selected operator before proceeding */
            case '+': result.push(result.pop() + result.pop()); break;
            case '-': result.push(-result.pop() + result.pop()); break;
            case 'x': result.push(result.pop() * result.pop()); break;
            case '/': result.push(1 / (result.pop() / result.pop())); break;
            default: result.push(parseFloat(items[i]));
        }
    }
    return result.pop() || 0;
}

module.exports = rpnCalculation;
