
//Recursive fibonacci- nth fibonacci number

function recursivefibonacci(n){
    if(n < 2){
        return n;
    }
    return recursivefibonacci(n-1) + recursivefibonacci(n-2);  
}
// console.log(recursivefibonacci(0));
// console.log(recursivefibonacci(1));
// console.log(recursivefibonacci(6));


//Big-o = O(2^n);

//Recursive factorial of a number

function recursivefactorial(n){
    if(n === 0){
        return 1;
    }
    return recursivefactorial(n-1) * n;
}

// console.log(recursivefactorial(4));

//Big-O = O(n);



//Recursive Binary search 

function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1);
}


function search(arr,target,start,end){
    if(start > end){
        return -1;
    }
    let mid = Math.floor((start+ end)/2);
    if(target === arr[mid]){
        return mid;
    }
    if(target < arr[mid]){
        return search(arr,target,start,mid-1);
    }else{
        return search(arr,target,mid + 1, end);
    }
}


// console.log(recursiveBinarySearch([-5,2,4,6,10],2));

//Big-O = O(log n)

