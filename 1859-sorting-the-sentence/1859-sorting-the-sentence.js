let sortSentence = function(s) {
    let arr = s.split(" ");
    let result =[]; 

    for (let i = 0; i < arr.length; i++) {
        let index = Number(arr[i].slice(-1));
        result[index - 1] = arr[i].slice(0,-1);
    }

    return result.join(" ");
};