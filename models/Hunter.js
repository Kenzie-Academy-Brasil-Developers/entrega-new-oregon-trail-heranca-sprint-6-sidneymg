
const Traveler = require("./Traveler");

class Hunter extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy);
        /**@override */
        this.food = 2;
    }

    /**@override */
    hunt() {
        this.food += 5;
    }

    /**@override */
    eat() {
        if(this.food >= 2) {
            this.food -= 2;
        } else {
            this.food -= this.food;
            this.isHealthy = false;
        }
    }

    giveFood(traveler, numOfFoods) {
        if(this.food >= traveler.food) {
            this.food -= numOfFoods;
            traveler.food += numOfFoods;
        }
    }
}

module.exports = Hunter;