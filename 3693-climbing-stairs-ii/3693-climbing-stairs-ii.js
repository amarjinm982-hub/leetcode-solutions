let climbStairs = function(n, costs) {
    let dp = [0];
    let i = 0;

    for (let cost of costs) {
        i++;

        let one = dp[i - 1] + cost + 1;

        let two = Infinity;
        let three = Infinity;

        if (i >= 2) {
            two = dp[i - 2] + cost + 4;
        }

        if (i >= 3) {
            three = dp[i - 3] + cost + 9;
        }

        dp[i] = Math.min(one, two, three);
    }

    return dp[n];
};