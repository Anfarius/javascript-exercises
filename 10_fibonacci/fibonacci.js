const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    let firstNum = 0;
    let secondNum = 1;

    for (let i = 1; i < num; i++) {
        let thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;
    }
    return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
