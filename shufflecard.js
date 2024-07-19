let deck = {
    families: ["club","heart","spade","diamond"],
    values: '2,3,4,5,6,7,8,9,"A","J","Q","K","JOKER',
    cards: [],
    initializeDeck(){
        let families = this.families;
        let values = this.values;
        for (let value of values.split(",")) {
             for (let family of families) {
                 this.cards.push({value,family})
            }          }  
        console.log(this.cards)
        }
    };

    deck.initializeDeck();

