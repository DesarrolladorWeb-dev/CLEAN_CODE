import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle, Ford } from './03-liskov-b';


(() => {//Ahora sera de tipo Vehiculo[] (que es la clase abstracta- puede usarse como tipo)
    // Tolera cualquier clase que sea subclase de vehiculo (que hereda de vehiculo)
    const printCarSeats = ( cars: Vehicle[] ) => { 
        
        cars.forEach(car => {
            // como es una clase con el .contructor puedo mostrar el nombre de la clase
            console.log(car.constructor.name, car.getNumberOfSeats() )
        })

        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     }    
        //     if( car instanceof Volvo ) {
        //         console.log( 'Volvo', car.getNumberOfSeats() )
        //         continue;
        //     }      

        // }
    }
    // Y aqui le enviamos de esta manera todas las clases a la funcion printCarSeats
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(5),
        new Ford(2),
    ];


    printCarSeats( cars );

})();