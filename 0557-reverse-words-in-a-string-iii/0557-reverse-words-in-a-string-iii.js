let reverseWords = function(s) {
    let result = s
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");

    return result;
};

let s = "Let's take LeetCode contest";

console.log(reverseWords(s));