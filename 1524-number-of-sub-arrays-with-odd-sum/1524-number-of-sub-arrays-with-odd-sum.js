var numOfSubarrays = function(arr) {
    let odd = 0;
    let even = 1;
    let sum = 0;
    let result = 0;

      for (let num of arr) {
        sum += num;

        if (sum % 2 === 1) {
            result += even;
            odd++;
     } else {
            result += odd;
            even++;
        }

         result = result % 1000000007;
    }

      return result;
};