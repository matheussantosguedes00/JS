function sum(a,b=10){
    console.log(a+b);
    return a + b//Normalmete e mais usado esse mais o console tambem pode ser usado
  }
  
  const sumValue = sum(2)
  
  console.log(sumValue)
  
  const sumArrow =(a,b=10)=>{// E mais usando hoje em dia 
    return a+b
  }
  
  const sumValue1 = sumArrow(2)
  
  console.log(sumValue1)
  
  const sumArrow1 =(a,b=10)=> a+b; // e mesma coisa de dar um retorna na propria função
  
  const sumValue2 = sumArrow1(2)
  
  console.log(sumValue2)