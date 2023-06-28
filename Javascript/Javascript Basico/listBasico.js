const names=['Matheus','Vitor',10,false,20];//->pode colocar tudo dentro dessa lista 

const Vitor =names[1];//->retorna o valor na posição lebrando que sempre começa a contra do 0

console.log(Vitor)//->camando a variavel Vitor

names.push('Miguel')//-> adiciona no final da lista 

console.log(names);

names.shift(20);//-> remove o valor da lista

console.log(names);

names.unshift(21);//-> adiciona o valor da lista no inicio

console.log(names);

names.pop();//-> remove o ultimo valor da lista

console.log(names);

names[3]= "Gustavo";//->mudar o valor na lista para esse novo valor com base na poscição
console.log(names);

console.log(names.indexOf('Gustavo'))//-> mosta a poscição na lista

const sortedName =names.sort()//-> colocar os item de fomar alfabetica
console.log(sortedName)

const nameIsArray=Array.isArray(names)//-> para saber se e uma lista

console.log(nameIsArray)