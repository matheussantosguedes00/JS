const sum = 1+2;

if(sum==2){
  console.log("sum is 2!");
}else if(sum === 3){
  console.log("sum is 3!")


}else{
  console.log("sum is not 2!");
}

// Quando e um =  verifica so o valor e não o tipo
// Quando e um == verifica so o valor e não o tipo apresa  se fosse em outra linguagem não deixava 
// Quando e um === verifica o valor e o tipo e sempre melhor usa esse para não dar nenhum erro

// &&
// ||

const sum1= 2+2;
const sum2= 3+3;

if(sum1 ===4 && sum2===6){
  console.log("sum is 4 ! and sum2 is 6!");
}
if(sum1 ===4 || sum2===6){
  console.log("sum is 4 ! and sum2 is 6!");
}

let number;

if(sum === 2){
  number=2;
}else{
  number=4;
}
console.log(number)


// Mesma coisa que acima mais o debaixo e mais usando hoje em dia por não deixa o codigo sujo

// tipo da variavel -> nome ->condição ->apos o sinal ? colocar se o resultado e true senão vai retorna o que esta a fente do dois pontos
let number2 =sum ===2 ? 2:4;

console.log(number2)

const car ='Mercendes'

switch(car){
  case 'Mercendes':
    console.log('Mercendes is beautiful !')
    break
    case 'Ferrari':
      console.log('Ferrari is very red !')
    break
    case 'Tesla':
      console.log('Tesla e very smart')
    break

}