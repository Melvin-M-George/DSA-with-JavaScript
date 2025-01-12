
//Generic tree

class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    add(value, parentValue){
        const node = new TreeNode(value);
        if(this.root === null){
            this.root = node;
        }else{
            const parent = this.findNode(this.root, parentValue);
            if(parent){
                parent.children.push(node);
            }else{
                console.log("Parent not found");
            }
        }
    }

    findNode(currentNode, value){
        if(currentNode.value = value){
            return currentNode;
        }
        for(let child of currentNode.children){
            const result = this.findNode(child,value);
            if(result) return result;
        }
        return null;
    }

    traverseDFS(node = this.root) {
        if (!node) return;
        console.log(node.value); 
        node.children.forEach(child => this.traverseDFS(child)); 
      }
}