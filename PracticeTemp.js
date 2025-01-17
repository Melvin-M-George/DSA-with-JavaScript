class MinHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i){
        return (2*i) + 1;
    }

    getRightChildIndex(i){
        return (2*i) + 2;
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(index > 0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex] > this.heap[index]){
                this.swap(parentIndex,index);
                index = parentIndex;
            }else{
                break;
            }
        }
    }

    remove(){
        
    }
}