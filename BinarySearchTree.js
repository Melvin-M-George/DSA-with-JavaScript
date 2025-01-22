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
            this.insertNode(this.root,node);
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(value === root.value){
                return true;
            }else if(value < root.value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right,value);
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right); 
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value);
    }

    deleteNode(root,value){
        if(root === null){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value);
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value);
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value);
        }
        return root;
    }

    isValidBST(){
        return this.validate(this.root,-Infinity,Infinity);
    }

    validate(root,min,max){
        if(root === null){
            return true;
        }   
        if(root.value <= min || root.value >= max){
            return false;
        }

        return this.validate(root.left,min,root.value) &&
        this.validate(root.right,root.value,max);
    }


    maxDepth(root){
        if(root===null){
            return 0;
        }
        let leftHeight = this.maxDepth(root.left);
        let rightHeight = this.maxDepth(root.right);

        return Math.max(leftHeight,rightHeight) + 1;
    }

    secondLargest(root){
        if(root === null){
            return null;
        }

        let parent = null;
        let curr = root;

        while(curr.right){
            parent = curr;
            curr = curr.right;
        }

        if(curr.left){
            return this.max(curr.left);
        }
        return parent.value;
    }


    closest(target){
        let curr = this.root;
        let close = Infinity;
        while(curr){
            if(Math.abs(curr.value - target) < Math.abs(close-target)){
                close = curr.value;
            }
            if(curr.value < target){
                curr = curr.right;
            }else if(curr.value > target){
                curr = curr.left;
            }else{
                return curr.value;
            }
        }
        return close;
    }

    balanced(root){
        return this.isBalanced(root) !== -1
    }

    isBalanced(root){
        if(root===null){
            return 0
        }

        let leftHeight = this.isBalanced(root.left)
        if(leftHeight === -1) return -1

        let rightHeight = this.isBalanced(root.right)
        if(rightHeight === -1) return -1

        if(Math.abs(rightHeight - leftHeight) > 1) return -1 

        return Math.max(leftHeight,rightHeight) + 1
    }




}

const bst = new BinarySearchTree(); 

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);



bst.delete(10)
bst.levelOrder();

