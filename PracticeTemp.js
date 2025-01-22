class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1;
    }

    getRightChildIndex(i) {
        return (2 * i) + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }


    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) > this.heap.length
                && this.heap[this.getRightChildIndex(index) < this.heap[smallerChildIndex]]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if(this.heap[index] > this.heap[smallerChildIndex]){
                this.swap(index,smallerChildIndex);
                index = smallerChildIndex;
            }else{
                break;
            }
        }
    }
}


const heap = new MinHeap()

heap.insert(11)
heap.insert(22)
heap.insert(33)
heap.insert(44)
heap.insert(55)
heap.insert(66)

console.log(heap.remove());

console.log(heap)
