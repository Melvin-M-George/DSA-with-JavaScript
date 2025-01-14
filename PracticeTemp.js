class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }


    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (value === root.value) {
                return true;
            } else if (value < root.value) {
                this.search(root.left, value);
            } else {
                this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(22);
bst.insert(55);
bst.insert(44);
bst.insert(33);

bst.levelOrder();