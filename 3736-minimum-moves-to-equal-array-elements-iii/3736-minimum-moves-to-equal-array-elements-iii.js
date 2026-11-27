let minMoves = function(nums) {
    let max = Math.max(...nums);
    let count = 0;

    for (let num of nums) {
        count += max - num;
    }

    return count;
};