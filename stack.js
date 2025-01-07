

//Implementation of Stack using array

class Stack{
    constructor(){
        this.items = [];
    }
    
    isEmpty(){
        return this.items.length === 0;
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length === 0){
            return "Stack is Empty";
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    printStack(){
        return this.items;
    }
}

// const stack  = new Stack();
// stack.push(11);
// stack.push(22);
// stack.push(33);
// stack.push(44);
// stack.push(55);
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.printStack());


//Implementation of stack using linked list

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack1{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    push(value){
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    peek(){
        if(this.isEmpty()) return "stack is empty";
        return this.top.value;
    } 
}

const stack = new Stack1();
stack.push(11);
stack.push(22);
stack.push(33);
