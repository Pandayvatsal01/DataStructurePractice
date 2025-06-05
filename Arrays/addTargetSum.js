function getTwoSum(arr, target){
    const seen = new Map();
    let index= 0;
    for(let val of arr){
        let complement = target-val;
        if(seen.has(complement)){
            return [seen.get(complement), index];
        }
         seen.set(val, index);
         index++;
    }
    return null;
   
}
console.log(getTwoSum([1,2,3,4,5], 8));