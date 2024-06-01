var minOperations = function(nums) {

    let occurrences = {}

for (let i =0; i<nums.length;i++){
    if (nums[i] in occurrences){
    occurrences[nums[i]] += 1; 
    }
    else {
        occurrences[nums[i]] = 1;
    }
}

let sum =0;
    for(let i of Object.keys(occurrences)){
        if(occurrences[i] === 1) return -1
      
        sum += Math.ceil(occurrences[i] / 3)
    }

    return sum
};