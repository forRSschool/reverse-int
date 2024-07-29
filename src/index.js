module.exports = function reverse(n) {
    let numberStr = n.toString();
    let reversedStr = numberStr.split("").reverse().join("");
    let reversedNumber = parseInt(reversedStr, 10);
    return reversedNumber;
};
