const numbers=[1,2,3,4,5] 

const numbersMultipliByTwo =numbers.map(function(number){//->map criar uma nova lista e a função colocar o que vai ser alterado na lista
    return number*2;//->return da alteracão
})
console.log(numbersMultipliByTwo);

const ages=[8,13,15,16,18,20]

const evenAges=ages.filter(function(age){ //->filter faz um filto na lista e retorna o que foi pedido
    return age % 2===0 ;//->return da alteracão
})
console.log(evenAges);

const sumOfAges =ages.reduce(function(age,accumulator){//->reduce soma todos item dentro da lista precisa ter dois item a lista e um acumulador
    return accumulator+age//-> return da a soma dos item
},0);//-> colocar o 0 para ser o valor inicial

console.log(sumOfAges)