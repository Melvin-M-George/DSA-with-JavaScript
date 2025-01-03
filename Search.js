
//Linear seach

function linearSearch(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === t){
            return i;
        }
    }
    return -1;
}

let a = [1,2,3,4,5];
console.log(linearSearch(a,5));

//Big-O = O(n)


//Binary search

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(target === arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

// console.log(binarySearch([-5,2,4,6,10],-5));

//Big-O = O(log n)