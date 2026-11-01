let truncateSentence = function(s, k) {
    let words = s.split(" ");

    let result = words.slice(0, k);

    return result.join(" ");
};
