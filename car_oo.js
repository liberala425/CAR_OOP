class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep!";
    }
        
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from year ${this.year}.`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numsWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numsWheels = 2;
    }
    revEngine(){
        return "VROOM!!!!";
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    
    add(vehicle){
        if(vehicle instanceof Vehicle){
            if(this.vehicles.length >= this.capacity) {
                return "Sorry, we're full."
            }
            else{
                // push vehicle instance, not the constructor name
                this.vehicles.push(vehicle); 
                //this.vehicles.push(vehicle.constructor.name);
                console.log("Vehicle added!");
            }
        }else{
            return "Only vehicles are allowed in here!";
        }
    }
}   