//Linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        if (list.isEmpty()) {
            console.log("List is Empty");
        } else {
            let curr = this.head;
            let listValues = "";
            
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}


const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.print()
list.prepend(19);
list.print()
list.prepend(22);
list.print()
list.prepend(33); 
list.print()