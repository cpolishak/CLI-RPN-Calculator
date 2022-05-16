/* receives a string (expression) and will output result */
function rpnCalculation(expression) {
    var result = [];
    /* split the string into items with regex */
    var items = expression.split(/\s+/);
    // console.log(items);
    for (var i = 0; i < items.length; i++) {
        switch (items[i]) {
            /* Allowed operators are the following (+, -, *, /) */
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
