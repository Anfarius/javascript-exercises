const sumAll = function(a, b) {
    let minNum;
    let maxNum;

    if (a < 0 || typeof(a) !== "number" || b < 0 || typeof(b) !== "number" ||
            a === b) {
        return 'ERROR';
    }

    if (a < b) {
        minNum = a;
        maxNum = b;
    } else {
        minNum = b;
        maxNum = a;
    }

    let sum = 0;

    for (minNum ; minNum <= maxNum ; minNum++) sum += minNum;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
