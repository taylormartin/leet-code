let arrays = [
    { list: [3,6,1,0], answer: 1},
    { list: [1,2,3,4], answer: -1},
    { list: [1], answer: 0},
    { list: [0,0,3,2], answer: -1},
    { list: [1,0], answer: 0},
    { list: [0,0,0,1], answer: 3}
];

const dominantIndex = function(nums) {
    let largestNum = 0;
    let secondLargestNum = 0;
    let largestNumIndex;
    for (i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        if (currentValue > largestNum) {
            if (largestNum > secondLargestNum) {
                secondLargestNum = largestNum;
            }
            largestNum = currentValue;
            largestNumIndex = i;
        } else if (currentValue > secondLargestNum) {
            secondLargestNum = currentValue;
        }
    }
    return largestNum >= secondLargestNum * 2 ? largestNumIndex : -1;
};

for (x=0; x<arrays.length; x++) {
    console.log('computed ->', dominantIndex(arrays[x].list));
    console.log('correct ->', arrays[x].answer);
    console.log('---------------')
}
