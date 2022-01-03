const palindromes = function (string) {
    let replaceParam = /[\W_]/g;

    let lowRegStr = string.toLowerCase().replace(replaceParam, '');

    let reverseStr = lowRegStr.split('').reverse().join('');

    return lowRegStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
