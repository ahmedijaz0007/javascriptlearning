arr = [1,2,3,4,5];
let x = arr.length;

for (let i = 0; i<x; i++){
    
    let entry = arr.pop();
    arr.splice(i,0,entry);

}
console.log(arr)
