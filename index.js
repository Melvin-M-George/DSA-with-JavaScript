//Fibonacci sequence
// let arr = [0,1];
// function fibonacci(n){
//     let first = 0;
//     let second = 1;
//     for(let i=2;i<n;i++){
//         let ans = first + second;
//         arr.push(ans);

//         first = second;
//         second = ans;
//     }
// }
// fibonacci(7);
// console.log(arr);


//Factorial of an integer
// function factorial(n){
//     let fact = 1;
//     for(let i=2;i<=n;i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(factorial(5));


//prime number or not
// function isPrime(n){
//     if(n < 2){
//         return false;
//     }
//     for(let i=2;i<= Math.sqrt(n);i++){
//         if(n % i == 0){
//            return false
//         }
//     }
//     return true;
// }
// console.log(isPrime(5));


//check a number is power of two or not
// function isPowerOfTwo(n){
//     if(n < 1){
//         return false;
//     }
//     while(n > 1){
//         if(n % 2 !== 0){
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
   
// }

// console.log(isPowerOfTwo(14));


//hash map

// let map = new Map();

// map.set('a',1);
// map.set('b',1);
// map.set('c',3);
// map.set("c",4);

// console.log(map.size);
// console.log(map.get("c"));

// console.log(map);