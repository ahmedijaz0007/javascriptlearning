function rollDice(){
    let roll = Math.floor(Math.random()*6 +1);
    print(roll);
}


function throwDice(num){
    for (let i=0;i< num;i++){
        rollDice();
    }
}

throwDice();