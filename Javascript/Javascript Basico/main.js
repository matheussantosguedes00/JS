//Criando & Validando um Formulário

const nameInput =document. querySelector('#name');
const emailInput=document.querySelector('#email');
const submitButton=document.querySelector('#submit-button');

const message=document.querySelector('.msg');

const items =document.querySelector('.items');

submitButton.addEventListener('click',function(e) {//função do botão lembrando de que colocar o e que e o evento
e.preventDefault()//tem que para o evento para não ser muito rapido

const nameValor=nameInput.value;//pegando valores
const emailValor=emailInput.value;

if(nameValor==="" || emailValor === ""){//tratamento de erro em caso do usuario não coloca nada
  message.innerHTML='<h4>Please fill out the fields!</h4>';//textContent pode ser usado tambem mais de maneira diferentes
  message.classList="error";//colocar a messagem de erro
  setTimeout(()=>{//apaga a messagem de erro 
message.innerHTML='<h4></h4>'
message.classList="";
  },3000);// apaga a messagem apos esse tempo
  return;
}
const li =document.createElement('li');//criando um elemento no html
li.classList ='item';//criando uma class para esse elementro

li.innerHTML =`<h5>NOME : ${nameValor}<br>EMAIL: ${emailValor}</h5>`;// passando valores

items.appendChild(li);//falando que li e uma classe filha

nameInput.value='';//apagando valores
emailInput.value='';

});