let sentence = "Pack mY box witH fIve dozen liquor jugs";


function pangram(sentence){
for (let i = 0; i<26;i++){
    if (!sentence.includes(String.fromCharCode(65+i ) )&& !sentence.includes(String.fromCharCode(97+i))){
           return false;
    }

}
return true;

}

console.log(pangram(sentence));