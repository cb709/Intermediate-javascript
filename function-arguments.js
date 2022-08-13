function add (){
    // const numbers = Object.values(arguments);
    // let sum = 0;
    // numbers.forEach(number => {
    //     sum += number;
    // }); 
    // return sum;  
    // 
    
    const [a,b,...rest] = arguments;

    console.log(b);
    console.log(a);
    console.log(rest);
}
console.log(add(1,2,3,4,5,6));