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

    const todosJSON =JSON.stringify(todos) //-> traforma o objeto para JSON para enviar para uma API ou para um servidor e esta enviando o arquivo acima
//-> isso acima e uma string que contem todos objeto
    console.log(todosJSON);

const todosList=JSON.parse(todosJSON)//-> Traformar o que esta em JSON para lista 

console.log(todosList);