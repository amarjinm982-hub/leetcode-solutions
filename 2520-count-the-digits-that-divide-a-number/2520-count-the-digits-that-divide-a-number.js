let countDigits = function(num) {
   let count =0;

   for(let digit of String(num)){
    if(num % Number(digit)===0){
        count++;
    };
   } ;
   return count;
};