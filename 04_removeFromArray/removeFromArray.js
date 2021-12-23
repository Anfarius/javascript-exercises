const removeFromArray = function(array, ...args) {
    for (arg of args) {
        const index = array.indexOf(arg);
        if (index === -1) continue;
        array.splice(index, 1);
    }
    let outputArray = array;
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
