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
        if (list.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let arr = []
            while (curr) {
                arr.push(curr.value);
                curr = curr.next;
            }
            console.log(arr);
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return null;
        }
        if(index === 0){
            this.head = this.head.next;
        }else{
            let removeNode;
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
    }

    removeValue(value){
        if(!this.head){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value!=value){
                prev = prev.next;
            }
            if(prev.next){
                let removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }
    
}

const list = new LinkedList();
list.append(1);
list.prepend(0);
list.append(2);
list.print();