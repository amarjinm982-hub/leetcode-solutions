let firstPalindrome = function(words) {
    for(let i=0; i<words.length; i++){
        let reversed = words[i].split("").reverse().join("");

        if(words[i] === reversed){
            return words[i];
        };
    };
    return "";
};