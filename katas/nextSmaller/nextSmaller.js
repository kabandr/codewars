function nextSmaller(n) {
    let digits = n.toString().split('');
    let newIndex = 0;
    let temp;
    let found = false;

    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] > digits[i + 1]) {
            newIndex = i;
            found = true;
        }
    }
    if (!found) return -1;
    
    for (let i = digits.length - 1; i > 0; i--) {
        if (i == newIndex) i--;
        if (digits[i] < digits[newIndex]) {
            temp = digits[i];
            digits[i] = digits[newIndex];
            digits[newIndex] = temp;
            break;
        }
    }

    if (digits[0] == 0) return -1
    return parseInt(digits.slice(0, newIndex + 1).concat(digits.slice(newIndex + 1).sort((a, b) => b - a)).join(''))
}

module.exports = nextSmaller