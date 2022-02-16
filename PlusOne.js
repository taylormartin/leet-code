let arrays = [
    { input: [1,2,3], answer: [1,2,4] },
    { input: [4,3,2,1], answer: [4,3,2,2] },
    { input: [9], answer: [1,0] },
    { input: [9,9,9], answer: [1,0,0,0] },
    { input: [1,2,9,9,9], answer: [1,3,0,0,0] }
];

const plusOne = function(digits) {
    for (i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else if (i === 0) {
            digits[i] = 0;
            digits.unshift(1);
            return digits;
        } else {
            digits[i] = 0;
        }
    }
};

arrays.forEach((array) => {
    console.log('computed ->', plusOne(array.input));
    console.log('correct ->', array.answer);
    console.log('---------------')
});