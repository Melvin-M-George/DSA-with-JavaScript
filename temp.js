class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }
    
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    size(){
        return this.rear - this.front;
    }

    peek(){
        return this.items[this.front];
    }

    print(){
        return this.items;
    }




}

const queue = new Queue();
queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(33);
queue.enqueue(44);
queue.dequeue()

console.log(queue.peek());
console.log(queue.print());