function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color,
            this.gasWeight = gasWeight
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
            color: ribbonColor,
            length: ribbonLength
            };
        }
        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
                this._text = text;
        }
        get text() {
            return this._text;
        }
        set text(value){
            this.text = value;
        }
    }
    return{
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
    // let b = new PartyBalloon ('sin', 33, 'yellow', 12);
    // console.log(b.color, b.gasWeight, b.ribbon.color, b.ribbon.length);
    // let a = new BirthdayBalloon('sin', 33, 'yellow', 12, 'demo text');
    // console.log(a.color, a.gasWeight, a.ribbon.color, a.ribbon.length, a.text);
}
solve()