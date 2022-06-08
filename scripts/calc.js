function addition(a, b) {
    if (!(typeof a === 'number' && typeof b === 'number')) {
        throw "One or both of those parameters is not a number";
    }
    return a + b;
}

module.exports = addition;