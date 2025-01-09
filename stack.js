

//Implementation of Stack using array

class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Stack is Empty";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    printStack() {
        return this.items;
    }

    //Write a function that takes a string and uses a stack to reverse it.
    reverseString(string) {
        for (let char of string) {
            this.items.push(char);
        }
        let reversed = "";
        while (!this.isEmpty()) {
            reversed += this.items.pop();
        }
        return reversed;
    }

    //Write a function to check if an expression has balanced parentheses using a stack.
    validParentheses(string) {
        let stack = [];

        for (let i of string) {
            if (i === "(" || i === "{" || i === "[") {
                stack.push(i);
            } else {
                if (stack.length === 0) {
                    return false;
                }
                let top = stack.pop();
                if (i === ")" && top !== "(" || i === "}" && top !== "{" || i === "]" && top != "[") {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

    //Write a function to sort a stack 
    sort(stack) {
        let tempstack = [];

        while (stack.length > 0) {
            let top = stack.pop();

            while (tempstack.length > 0 && tempstack[tempstack.length - 1] > top) {
                stack.push(tempstack.pop());
            }
            tempstack.push(top);
        }

        while (tempstack.length > 0) {
            stack.push(tempstack.pop())
        }

        return stack;
    }


}

const stack = new Stack();
console.log(stack.sort([22, 44, 33, 11, 55]));
// stack.push(11);
// stack.push(22);
// stack.push(33);
// stack.push(44);
// stack.push(55);
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.printStack());


//Implementation of stack using linked list

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack1{
//     constructor(){
//         this.top = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     push(value){
//         const node = new Node(value);
//         node.next = this.top;
//         this.top = node;
//         this.size++;
//     }

//     pop(){
//         if(this.isEmpty()){
//             return "Stack is empty";
//         }
//         const poppedValue = this.top.value;
//         this.top = this.top.next;
//         this.size--;
//         return poppedValue;
//     }

//     peek(){
//         if(this.isEmpty()) return "stack is empty";
//         return this.top.value;
//     }
// }

// const stack = new Stack1();
// stack.push(11);
// stack.push(22);
// stack.push(33);
