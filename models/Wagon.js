class Wagon {
    constructor(capacity){
        this._capacity = capacity
        this._passengers = []
    }

    set capacity(capacity){
        this._capacity = capacity 
    }
    get capacity(){
        return this._capacity
    }
    set passengers(passenger){
        this._passengers = passenger 
    }
    get passengers(){
        return this._passengers
    }

    getAvailableSeatCount(){
        return this.capacity - this._passengers.length
    }

    join(passenger){
        if(this._passengers.length < this._capacity){
            this._passengers.push(passenger)
        }
    }

    shouldQuarantine(){
        for(let x in this._passengers){
            if(this._passengers[x]._isHealthy === 'false'){
                return true
            }
        }
        return false
    }

    totalFood(){
        let foodCount = 0
        for(let x in this._passengers){
            foodCount += parseInt(this._passengers[x].food)
        }
        return foodCount
    }

}


module.exports = Wagon;