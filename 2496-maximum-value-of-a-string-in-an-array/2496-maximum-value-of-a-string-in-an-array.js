var maximumValue = function(strs) {
    let max = 0;

    for (let str of strs) {
        let value;

        if (isNaN(str)) {
            value = str.length;
        } else {
            value = Number(str);
        }

        if (value > max) {
            max = value;
        }
    }

    return max;
};