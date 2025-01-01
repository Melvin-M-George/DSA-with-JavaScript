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
    //function to check if a linked list is empty or not
    isEmpty() {
        return this.size === 0;
    }
    //function to find the size of the linkedlist
    getSize() {
        return this.size;
    }
    //function to add a node at the start of a linkedlist
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
    //function to add a node at the end of the linked list
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

    //function to print the values of a linked list as an array
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
    //function to insert a given value at a given index of a linkedlist
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
    //function to remove a node at a given index of a linked list
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
    //function to remove a given value from an linked list
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
    //function to search for a value in a linked list
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
    //function to reverse a linkedlist
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

    //Write a function to create a linkd list from an array
    createListFromArray(array) {
        array.forEach((e)=>list.append(e));    
    }

    //write a function to find the length of a linked list;
    findLength(){
        let length = 0;
        let curr = this.head;
        while(curr){
            length++;
            curr = curr.next;
        }
        return length;
    }

    //Write a function to check the linked list is empty or not
    checkEmptyOrNot(){
        return !this.head;
    }
    
    //Write a function to find the middle node of a linked list.
    findMiddleNode(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }
    
    //Write a function to check if a linked list has a cycle.
    checkCycleOrNot(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast){
                return true;
            }
        }
        return false;
    }

    //function to create a circular linked list;
    createCircular(){
        if(!this.head){
            console.log("List is empty");
            return
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = this.head;
    }

    //Write a function to remove duplicate values from a linked list.
    removeDuplicates(){
        let seen = new Set();
        let prev = null;
        let curr = this.head;
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next;
                this.size--;
            }else{
                seen.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    //Write a function to check if a value exists in the linked list or not
    checkValue(value){
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    //Write a function to return the value at a specific index in the linked list.
    findValueAtIndex(index){
        if(index < 0 || index > this.size){
            return null;
        }
        let curr = this.head;
        for(let i=0;i<index;i++){
            curr = curr.next;
        }
        return curr.value;
    }

    //Write a function to print the values of the linked list in reverse order (without reversing the list itself).
    reversePrint(curr){
        if(!curr){
            return
        };
        this.reversePrint(curr.next);
        console.log(curr.value);
    }

    //Write a function to count the occurrences of a given value in the linked list.
    count(value){
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

    //Write a function to remove duplicates from a sorted linked list.
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

    //Write a function to find the value of the nth node from the end of the linked list.
    findNthNodeFromEnd(n){
        let first = this.head;
        let second = this.head;
        for(let i=0;i<n;i++){
            if(!first){
                return 
            }
            first = first.next;
        }
        while(first){
            first = first.next;
            second = second.next;
        }
        return second.value;
    }

    //Write a function to remove every kth node from the linked list.
    removeEverykthNode(k){
        let curr = this.head;
        let prev = null;
        let count = 1;
        while(curr){
            if(count % k === 0){
                prev.next = curr.next;
                list.size--;
            }else{
                prev = curr;
            }
            curr = curr.next;
            count++;
        }
    }
    

}

const list = new LinkedList();
list.append(11);
list.append(22);
list.append(33);
list.append(44);
list.append(55);

list.print()

















//Tail implementation

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }
//     getSize() {
//         return this.size;
//     }


//     prepend(value) {
//         const node = new Node(value);
//         if (list.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }


//     append(value) {
//         const node = new Node(value);
//         if(list.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             this.tail = node;   
//         }
//         this.size++;
//     }

//     removeFromFront() {
//         if(list.isEmpty()){
//             return null;
//         }
//         const value = this.head.value;
//         this.head = this.head.next;
//         this.size--;
//         return value;
//     }

//     removeFromEnd() {
//         if(list.isEmpty()){
//             return null;
//         }
//         const value = this.tail.value;
//         if(this.size === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             let prev = this.head;
//             while(prev.next != this.tail){
//                 prev = prev.next;
//             }
//             prev.next = null;
//             this.tail = prev;

//         }
//         this.size--;
//         return value;
//     }




//     print() {
//         if (list.isEmpty()) {
//             console.log("List is empty");
//         } else {
//             let curr = this.head;
//             let listValues = "";

//             while (curr) {
//                 listValues += `${curr.value} `;
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }


// }



// const list = new LinkedList();

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.prepend(0);
// list.print();
// console.log(list.getSize());

// list.removeFromFront();
// list.print()
// list.removeFromEnd();
// list.print();


