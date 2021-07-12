class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }

}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        this.res-=target.power;
        console.log(`ouch i got dmg ${this.power}`)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    
    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "resilience") {
                if (this.name == "Hard Algorithm") {
                    target.res += this.magnitude;
                } else if (this.name == "Unhandled Promise Rejection") {
                    target.res -= this.magnitude;
                }
            } else if (this.stat == "power") {
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

        const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);


        const effectCard1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
        effectCard1.play(RedBeltNinja);


        const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 10, 4);


        const effectCard2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", 2);
        effectCard2.play(RedBeltNinja);


        const effectCard3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
        effectCard3.play(RedBeltNinja);


        RedBeltNinja.attack(BlackBeltNinja);
				BlackBeltNinja.attack(RedBeltNinja);
            