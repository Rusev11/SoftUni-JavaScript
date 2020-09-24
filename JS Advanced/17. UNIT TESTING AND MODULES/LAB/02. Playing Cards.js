function solve(face, suit) {
   try {if (!(face >= 2 && face <= 10)) {
        if (face !== 'J' &&
            face !== 'Q' &&
            face !== 'K' &&
            face !== 'A') {
            throw new Error('Invalit Card Face!');
        }
    }
    if (suit !== 'S' &&
        suit !== 'H' &&
        suit !== 'D' &&
        suit !== 'C') {
        throw new Error('Invalit Card Suit!');
    }

    class Cards {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
        toString() {
            if (suit === 'S'){
                suit = suit.fromCharCode(2660);
            }
            if (suit === 'H'){
                suit = suit.fromCharCode(2665);
            }
            if (suit === 'D'){
                suit = suit.fromCharCode(2666);
            }
            if (suit === 'C'){
                suit = suit.fromCharCode(2663);
            }
            return `${this.face}${this.suit}`;
        }
    }
    let currentCard = new Cards(face, suit);
    console.log(currentCard.toString());
} catch (ex){
    console.log(ex);
}
}

solve('A', 's')