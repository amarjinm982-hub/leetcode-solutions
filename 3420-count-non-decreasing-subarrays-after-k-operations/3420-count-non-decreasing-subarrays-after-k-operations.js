var countNonDecreasingSubarrays = function(nums, k) {
    let result = 0;
    let cost = 0;
    let j = nums.length - 1;
    let arr = [];
    let head = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        let count = 1;

        while (arr.length > head && arr[arr.length - 1][0] < num) {
            let last = arr.pop();

            count += last[1];
            cost += (num - last[0]) * last[1];
        }

        arr.push([num, count]);

        while (cost > k) {
            let value = arr[head][0];

            cost -= value - nums[j];
            j--;

            if (arr[head][1] === 1) {
                head++;
            } else {
                arr[head][1]--;
            }
        }

        result += j - i + 1;
    }

    return result;
};