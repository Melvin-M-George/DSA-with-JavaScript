function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
}

const arr = [11,55,44,22,33];
insertionSort(arr);
console.log(arr);