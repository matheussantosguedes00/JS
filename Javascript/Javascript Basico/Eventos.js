const submitButton =document.querySelector('#submit-button');
const myFormulario = document.querySelector('#my-form')
const nameInput =document.querySelector('#name');
const emailInput=document.querySelector('#email');
const items=document.querySelector('.items');
const body =document.querySelector('body')

submitButton.addEventListener('click',function(e){//evento do botão
    e.preventDefault()
    
   const nameValor = nameInput.value;//pegar o valor da variavel
   const emailValor = emailInput.value;
   
   if(nameValor ===""|| emailValor===""){//função para valores vazio
    
return alert('Prease fill out the fields!')// alert para usuario

   }

myFormulario.style.background ="green";//mundado a cor do formurario

items.children[0].textContent=nameValor;//pegando o valor e colocando no item
items.children[1].textContent=emailValor;

 body.style.background="white" //mundado a cor do fundo do site para banco
});


// nameInput.addEventListener("change",function(e){//excurta alteração no botão
//     console.log(e.target.value);//conseguimos acessa quando ele ja perceber uma mundaça
// });