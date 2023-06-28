class Person {
    constructor(firstName,lastName,age){//colocar os paramentros que vai usar
        this.firstName =firstName;//chamas esse paramentos
        this.lastName=lastName;
        this.age=age;
    }
    getFullName(){//criar uma class para modificar os paramentros e dentro da class e mais usado a decara classe desse jeito
        console.log(`${this.firstName} ${this.lastName}`) ;
    }
   static speak(){
        console.log('Hello world !')
    }
}

const person =new Person("Matheus","Santos",22);//chama classe pessoas criando uma variavel que vai recebero que e da classe
console.log(person)

person.getFullName(); // e tambem poder receber a classe se for clamada 

Person.speak();//por ser static não pode receber dados do construtor e tem que ser chamado desse jeito 


class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
     console.log (`${this.name} made some noise!`)  
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        console.log (`Dog ${this.name} barked!`)  
       }
}
const animal =new Animal("Simba");
const dog = new Dog ("Bob");

animal.speak();
dog.speak();
