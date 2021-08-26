class Traveler {
    constructor(name,isHealthy ,food ){
        this._name = name;
        this._isHealthy = isHealthy ;
        this._food = food;
    }

    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set food(food){
        this._food = food;
    }
    get food(){
        return this._food;
    }
    set isHealthy(isHealthy){
        this._isHealthy = isHealthy;
    }
    get isHealthy(){
        return this._isHealthy;
    }

    hunt(){
        this._food += 2;
        return this.food;
    }

    eat(){

        if(this._food > 0){
            this._food--;
            return  this._food;
        } 

        if(this.food === 0){
            this._isHealthy = false;
            return this._isHealthy;
        }
        
    }

    
}

module.exports = Traveler;