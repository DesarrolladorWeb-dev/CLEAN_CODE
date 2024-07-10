
// Las clases abstractas sirven para trabajar con herencias
export abstract class Vehicle {
    // Todos los metodos y propiedades que deben tener todas la clases a la cual se hereda 

    // getNumberOfSeats():number {
    //     throw Error('Method not implemented') //Si no se especifica el metodo en las clases daria este error 
    // }
    
    abstract getNumberOfSeats():number; //Metodo abstracto:  implementar en todas las clases 




}



export class Tesla  extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super(); //para generar el contructor de la clase Vehiculo
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi  extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota  extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
export class Volvo extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
export class Ford extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}