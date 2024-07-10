// AHORA ES MAS TOLERANTE AL CAMBIO CON LA SEGREGACION
// porque ahora si solo las aves voladoras solo regresan un numero facilmente cambiamos solo las aves voladoras
interface Bird{
    // cada uno no regresa nada 
    eat(): void; 

}
// Segregacion 
// Aqui todas las aves voladoras que deberian implementar
interface FlyingBird {
    fly():number; //y quitamos fly de la interface Bird
}

interface RunningBird {
    run(): void; 
}
interface SwimmerBird {
    swim(): void; 
}

class Tucan  implements Bird, FlyingBird {
    public fly(){return 100;}
    public eat(){}
}
class Humminbird implements Bird, FlyingBird {
    public fly(){return 200;}
    public eat(){}
}

class Ostrich implements Bird, RunningBird {
    public eat(){}
    public run(){}


}
class Penguin implements Bird,SwimmerBird {
    public eat(){}
    public swim(){}
}