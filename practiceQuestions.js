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

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let removeNode;
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
    }

    removeValue(value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value != value) {
                prev = prev.next;
            }
            if (prev.next) {
                let removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if(!this.head){
            return -1;
        }
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

}

//create a function to create a linkd list from an array

// function linkedListFromArray(array){
//     const list = new LinkedList();
//     array.forEach(e => list.append(e));
//     return list;
// }
// const linkedList = linkedListFromArray([11,22,33,44,55])
// linkedList.print()

//write a function to find the length of a linked list;

// const list = new LinkedList();
// list.append(22);
// list.prepend(11);
// list.append(33);
// list.print();

// function findLength(list){
//     let length = 0;
//     let curr = list.head;
//     while(curr){
//         length++;
//         curr = curr.next;
//     }
//     return length;
// }

// console.log(findLength(list));


