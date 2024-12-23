//find first n elements of the fibonacci sequnce

// function fibonacci(n){
//    const fib = [0,1];
//    for(i=2;i<n;i++){
//     fib[i] = fib[i-1] + fib[i-2];
//    }
//    return fib;
// }

// console.log(fibonacci(7));

//big-o = O(n)



//factorial of a number n

// function factorial(n){
//     let fact = 1;
//     for(let i=2;i<=n;i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(factorial(5));

//Big-O = O(n);


//check a number is prime or not

// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {

//         if (n % i === 0) {
//             return false;
//         }


//     }
//     return true;
// }

// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(1));

//Big-O = O(sqrt(n))


//check a number is power of two or not

// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 != 0) {
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(5));


//Big-O = O(log n);



//Recursive fibonacci- nth fibonacci number

// function recursivefibonacci(n){
//     if(n < 2){
//         return n;
//     }
//     return recursivefibonacci(n-1) + recursivefibonacci(n-2);  
// }
// console.log(recursivefibonacci(0));
// console.log(recursivefibonacci(1));
// console.log(recursivefibonacci(6));


//Big-o = O(2^n);

//Recursive factorial of a number

// function recursivefactorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return recursivefactorial(n-1) * n;
// }

// console.log(recursivefactorial(4));

//Big-O = O(n);

//Linear seach

// function linearSearch(arr,t){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === t){
//             return i;
//         }
//     }
//     return -1;
// }

// let a = [1,2,3,4,5];
// console.log(linearSearch(a,5));

//Big-O = O(n)