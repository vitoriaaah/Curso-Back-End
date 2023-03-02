function multiplicar(num1, num2, calculo=0){
   for (let index = 0; index < num1 ; index++){
    calculo +=num2;
   }
   return (calculo)
}

console.log(multiplicar(5,5));
console.log(multiplicar(0,7));
console.log(multiplicar(9,9));
console.log(multiplicar(10,8));
console.log(multiplicar(9,3));