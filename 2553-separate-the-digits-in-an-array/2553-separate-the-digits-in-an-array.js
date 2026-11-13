let separateDigits = function(nums) {
    let result =[];

   for(let num of nums){
      for(let digit of String(num)){
        result.push(Number(digit));
      }
   }
   return result;
};


