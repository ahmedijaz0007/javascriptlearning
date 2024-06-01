let arr = [2,2,3,3,4,4,4]

let occurrences = {}

for (let i =0; i<arr.length;i++){
    if (arr[i] in occurrences){
    occurrences[arr[i]] += 1; 
    }
    else {
        occurrences[arr[i]] = 1;
    }
}

console.log(occurrences)