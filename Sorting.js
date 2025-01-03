//Bubble Sort

function bubbleSort(arr) {
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped);
}


// const arr = [22,33,55,44,11];
// bubbleSort(arr);
// console.log(arr);


//Insertion Sort

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
}


// const arr = [77,22,33,66,11,55,44];
// insertionSort(arr);
// console.log(arr);
