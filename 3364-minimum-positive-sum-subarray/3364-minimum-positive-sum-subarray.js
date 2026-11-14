var minimumSumSubarray = function(nums, l, r) {
    let min = Infinity;
    let i = 0;

    for (let num of nums) {
        let sum = 0;
        let count = 0;

        for (let n of nums.slice(i, i + r)) {
            sum += n;
            count++;

            if (count >= l && sum > 0 && sum < min) {
                min = sum;
            }
        }

        i++;
    }

    return min === Infinity ? -1 : min;
};