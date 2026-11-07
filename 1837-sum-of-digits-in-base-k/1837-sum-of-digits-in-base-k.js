let sumBase = function(n, k) {
    let num = n.toString(k);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    return sum;
};