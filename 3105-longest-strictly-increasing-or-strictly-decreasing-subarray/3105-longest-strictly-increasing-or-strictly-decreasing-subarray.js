let longestMonotonicSubarray = function(nums) {
    let max = 1;
    let increasing = 1;
    let decreasing = 1;
    let prev = nums[0];

     for (let num of nums.slice(1)) {
        if (num > prev) {
            increasing++;
            decreasing = 1;
        } else if (num < prev) {
            decreasing++;
            increasing = 1;
        } else {
            increasing = 1;
            decreasing = 1;
        }

        max = Math.max(max, increasing, decreasing);
        prev = num;
    }

    return max;
};
