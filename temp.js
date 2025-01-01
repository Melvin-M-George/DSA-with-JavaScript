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
        if (!this.head) {
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
            let arr = [];
            let curr = this.head;
            while (curr) {
                arr.push(curr.value);
                curr = curr.next;
            }
            console.log(arr);
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
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

    remove(index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            let removeNode;
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
            this.head = thsa.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            let removeNode;
            while (prev.next && prev.next.value != value) {
                prev = prev.next;
            }
            if (prev.next) {
                removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (!this.head) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    createListFromArray(array) {
        array.forEach((e) => list.append(e));
    }

    findLength() {
        let curr = this.head;
        let length = 0;
        while (curr) {
            length++;
            curr = curr.next;
        }
        return length;
    }

    checkEmptyOrNot() {
        return !this.head;
    }

    findMiddleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }

    checkCycleOrNot() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    createCircular() {
        if (!this.head) {
            console.log("List is empty");
            return
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = this.head;
    }

    removeDuplicates() {
        let seen = new Set();
        let prev = null;
        let curr = this.head;
        while (curr) {
            if (seen.has(curr.value)) {
                prev.next = curr.next;
                this.size--;
            } else {
                seen.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }


    checkValue(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    findValueAtIndex(index) {
        if(index < 0 || index > this.size){
            return null;
        }
        let curr = this.head;
        for(let i=0;i<index;i++){
            curr = curr.next;
        }
        return curr.value;
    }

    reversePrint(curr){
        if(!curr){
            return 
        }
        this.reversePrint(curr.next);
        console.log(curr.value);
    }

    countValue(value){
        let count = 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                count++;
            }
            curr = curr.next;
        }
        return count;
    }

    removeSortedDuplicates(){
        let curr = this.head;
        while(curr && curr.next){
            if(curr.value === curr.next.value){
                curr.next = curr.next.next;
                this.size--;
            }else{
                curr = curr.next;
            }
        }
    }
}

const list = new LinkedList();
list.append(22);
list.prepend(11);
list.append(33);
list.append(55);
list.insert(44, 3);

list.print();


