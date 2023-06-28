for(let index =0; index<10;index++){
    console.log(index);
  }
 
 const cars =["Ferrari","Tesla","Mercedes"];
 
 for(let i =0;i<cars.length;i++){
   console.log(cars[i]);
 
 }
 
 for(let car of cars){
   console.log(car);
 }
 
 cars.forEach(function(car,index){
   console.log(index)
     console.log(car);
 });
 
 let index = 0;
 while (index<10){
   console.log("Index é menor do 10!");
   // index=index + 1;
   // index+=1;
 
   //  E a mesma coisa do comentario acima 
   index++;
 }
 
 const person ={
   name:"Jane",
   age:22,
 }
 // JavaScript não conseguir trabalha muito bem com esse loop
 for(property in person){
   console.log(property);
   console.log(person[property]);
 }
 