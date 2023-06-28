const person={//->e um objeto pode ser decarado varias coisa dentro dele
    firstName:"Matheus",
    lastName:"Santos",
    age:22,
hobbies:['Futebol','Sair','Jogar','ler'],
dog:{//-> poder adiciona objeto dentro de objeto
    name:"Simba",
    age:4,
},
};
/*const firstName=person.firstName;//-> como chama os ojetos
const lastName=person.lastName;
const age=person.age;
const hobbies=person.hobbies;*/

const {firstName:primeiroNome,lastName,age,hobbies,dog:{name:dogName}} = person; //-> isso acima pode se sublitituir por esse -> na parte do dog so pode acessa o que foi passado



const read=person.hobbies[3];

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(read)


//person.dog="Simba"//-> pode adiciona mais coisa no objeto

console.log(person.dog.name)
console.log(dogName)


// o que mais vc vai ver atualmente e esse abaixo

const todos =[
{
  id:1,
  description:'Estudar programação',
  isCompleted:false
},
{
    id: 2,
    description:'Ler',
    isCompleted:true

},
{
    id: 3,
    description:'Treinar',
    isCompleted:true,

}
];

const descriptionOfLastTodo= todos[2].description//-> pode acessar o item pela posição no array e posso colocar o que vai acessa

console.log(descriptionOfLastTodo)

