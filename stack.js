

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

const stack  = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);
stack.push(55);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.printStack());