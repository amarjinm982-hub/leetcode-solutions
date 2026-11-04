let isPalindrome = function(x) {
    let str = x.toString();
    let reversed ="";

    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];

    };
     return reversed === str;
};

