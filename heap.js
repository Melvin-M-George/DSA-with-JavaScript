class MinHeap {
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getleftChildIndex(i){
        return (2*i)+1
    }

    getRightChildIndex(i){
        return (2*i)+2
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1
        while(index > 0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex] > this.heap[index]){
                this.swap(parentIndex,index)
                index = parentIndex;
            }else{
                break;
            }
        }
    }

    remove(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return root
    }

    heapifyDown(){
        let index = 0
        while(this.getleftChildIndex(index) < this.heap.length){
            let smallerChildIndex = this.getleftChildIndex(index);
            if(this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]){
                smallerChildIndex = this.getRightChildIndex(index)
            }
            if(this.heap[index]>this.heap[smallerChildIndex]){
                this.swap(index,smallerChildIndex)
                index = smallerChildIndex;
            }else{
                break;
            }
        }
    }
}

const heap = new MinHeap()

heap.insert(10)
heap.insert(20)
heap.insert(50)
heap.insert(2)
heap.insert(150)
heap.insert(0)

console.log(heap)


// class MaxHeap {
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftChildIndex(i){
//         return (2*1) + 1;
//     }

//     getRightChildIndex(i){
//         return (2*i) + 2;
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1;
//         while(index > 0){
//             let parentIndex = this.getParentIndex(index);
//             if(this.heap[parentIndex] < this.heap[index]){
//                 this.swap(parentIndex,index)
//                 index = parentIndex
//             }else{
//                 break;
//             }
//         }
//     }

//     remove(){
//         if(this.heap.length === 0) return null;
//         if(this.heap.length === 1) return this.heap.pop()
//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return root;
//     }

//     heapifyDown(){
//         let index = 0;
//         while(this.getLeftChildIndex(index) < this.heap.length){
//             let biggerIndex = this.getLeftChildIndex(index)
//             if(this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] > this.heap[biggerIndex]){
//                 biggerIndex = this.getRightChildIndex(index)
//             }
//             if(this.heap[index] < this.heap[biggerIndex]){
//                 this.swap(index,biggerIndex)
//                 index = biggerIndex;
//             }else{
//                 break;
//             }
//         }
//     }
// }

// const maxHeap = new MaxHeap()

// maxHeap.insert(10)
// maxHeap.insert(30)
// maxHeap.insert(20)
// maxHeap.insert(4)
// maxHeap.insert(0)

// console.log(maxHeap.heap)