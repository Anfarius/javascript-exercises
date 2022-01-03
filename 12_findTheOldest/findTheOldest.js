const findTheOldest = function(array) {
    const reducer = (a, b) => {
        today = new Date(Date.now());
        if (!b.yearOfDeath) b.yearOfDeath = today.getFullYear();
        if (!a.yearOfDeath) a.yearOfDeath = today.getFullYear();
        age1 = b.yearOfDeath - b.yearOfBirth;
        age2 = a.yearOfDeath - a.yearOfBirth;
        return (age1 > age2) ? b : a;
    };
    return array.reduce(reducer);
};

// Do not edit below this line
module.exports = findTheOldest;
