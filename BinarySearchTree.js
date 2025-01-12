class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else{
            
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());