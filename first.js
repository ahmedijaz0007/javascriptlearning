let a = [1,"asd",2,4];
let b = [1,"sdsad",5,6,7,9,2];
let c = [];

for (let i=0;i<a.length;i++){
    if (b.includes(a[i])){
        c.push(a[i]);
    }
}

console.log(c);