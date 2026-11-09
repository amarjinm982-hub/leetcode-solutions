let differenceOfSum = function(nums) {
    let sum = 0;
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
              sum += nums[i];

     let digits = String(nums[i]);

        for (let j = 0; j < digits.length; j++) {
            digitSum += Number(digits[j]);
        }
    }

    return sum - digitSum;
};