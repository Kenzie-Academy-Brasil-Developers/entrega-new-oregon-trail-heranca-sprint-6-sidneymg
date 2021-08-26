class Wagon {
    constructor(capacity, passenger) {
        this.capacity = capacity;
        this.passenger = [];
    }
    
    getAvailableSeatCount() {
        return Number(this.capacity) - Number(this.passenger.length);
    }
    
    join(currentPassenger) {
        if(this.passenger.length < this.capacity) {
            this.passenger.push(currentPassenger);
        }
    }
    
    shouldQuarantine() {
        for(let i = 0; i < this.passenger.length; i++) {
            if(this.passenger[i].isHealthy === false) {
                return true;
            }
        }
        return false;
    }
    
    totalFood() {
        let howManyFood = 0;
        
        for(let i = 0; i < this.passenger.length; i++) {
            howManyFood += this.passenger[i].food;
        }
        
        return howManyFood;
    }
}

module.exports = Wagon;