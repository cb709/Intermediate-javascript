function add (){
    const numbers = Object.values(arguments);
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    }); 
    return sum;  
}
console.log(add(1,2,3,4,5));