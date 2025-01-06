class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    push(element){
        return this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items[this.items.length-1]
    }

    size(){
        return this.items.length;
    }

    printStack(){
        return this.items;
    }
}

const stack = new Stack();
stack.push(444);
stack.push(555);
stack.push(999);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.printStack());