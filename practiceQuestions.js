class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(list.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    print(){
        if(!this.head){
            console.log("List is empty");
        }else{
            let curr = this.head;
            let arr = []
            while(curr){
                arr.push(curr.value);
                curr = curr.next;
            }
            console.log(arr);
        }
    }
}

const list = new LinkedList();
list.append(1);
list.prepend(0);
list.append(2);
list.print();