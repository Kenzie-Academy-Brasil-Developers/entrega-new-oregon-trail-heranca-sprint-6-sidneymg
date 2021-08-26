const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name,isHealthy ,food){
        super(name,isHealthy ,food);
    }
    
    hunt(){
        this.food += 5;
        return this.food
    }

    eat(){
        if(this.food > 1){
            this.food -= 2;
            return this.food

        }else{
            this.isHealthy = false;
            return this.isHealthy;
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if(this.food >= numOfFoodUnits){
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }

}

module.exports = Hunter;