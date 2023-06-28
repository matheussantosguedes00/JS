// Conceito de TRUTHY E FALSY

const x ='';
// False por ser uma variavel vazia
console.log(!!x)
if(x){
  console.log(x);
}

const y =0;
// False por ser 0 em uma variavel 
console.log(!!y)

const a =null;
// False por ser uma variavel nula
console.log(!!a)

const b =undefined;
// False por ser uma variavel que não tem nada
console.log(!!b)


const list =[];
// Uma lista vazia sempre vai ser true
console.log(!![])

const object={};
// Uma objeto vazio sempre vai ser true
console.log(!!object)


console.log(!false)//conseguir traformar o que e false em verdadeiro e o que e verdadeiro em false

