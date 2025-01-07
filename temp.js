class Queue{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift();
    }

    peek(){
        if(this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    print(){
        if(this.isEmpty()) return "Queue is empty";
        return this.items;
    }


}

const queue = new Queue();
queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(33);
queue.enqueue(44);
queue.dequeue();
console.log(queue.peek());
console.log(queue.print());