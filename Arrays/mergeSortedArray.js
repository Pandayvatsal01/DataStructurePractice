function mergeSortedArrays(arr1, arr2){
    let i=0,j=0;
    let result = [];
    
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

let arr1=[1,2,3];
let arr2=[4,5,6];

console.log(mergeSortedArrays(arr1,arr2));