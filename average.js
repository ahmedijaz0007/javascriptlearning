function average(arr){
    let sum = 0;
    for (let i of arr){
        sum +=i;
    }
    return sum/(arr.length);
}


console.log([1,2,3,4,5])