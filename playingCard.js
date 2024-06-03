let suits = ["spades","diamonds","hearts","clubs"];
let values = ["A","1","2","3","4","5","6","7","8","9","J","Q","K"];


function getPlayingCard(suits,values){

    let i = Math.floor(Math.random() * 4)
    let j = Math.floor(Math.random() * 13)

    return {suit: suits[i], value: values[j]};


}

console.log(getPlayingCard(suits,values));