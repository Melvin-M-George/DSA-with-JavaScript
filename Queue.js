//Implementation of Queue using object

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
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear-this.front;
    }

    print(){
        return this.items;
    }
}


const queue = new Queue();
queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(33);

console.log(queue.size());
console.log(queue.dequeue());

console.log(queue.print());



//Implementation of queue using arrays

class Queue1 {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek(){
        if(this.isEmpty()) return "Queue is empty";
        return this.items[0]; 
    }

    size(){
        return this.items.length;
    }

    print(){
        if(this.isEmpty()) return "Queue is empty";
        return this.items;
    }
}

// const queue = new Queue1();
// queue.enqueue(11);
// queue.enqueue(22);
// queue.enqueue(33);
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue.print());




