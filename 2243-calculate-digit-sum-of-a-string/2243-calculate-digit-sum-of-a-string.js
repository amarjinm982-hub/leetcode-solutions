let digitSum = function(s, k) {
    while (s.length > k) {
        let result = "";
        let sum = 0;
        let count = 0;

        for (let digit of s) {
            sum += Number(digit);
            count++;

            if (count === k) {
                result += sum;
                sum = 0;
                count = 0;
            }
        }

        if (count > 0) {
            result += sum;
        }

        s = result;
    }

    return s;
};