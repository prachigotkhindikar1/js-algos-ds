class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

// Insert a node in BST. Return tree.
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(!current.left) {
                        current.left = newNode;
                        return this;
                    }else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

// Search for node in BST. Return node.
    find(value){
        if(!this.root) return false;
        var current = this.root, found = false;
        while(current && !found) {
            if(value < current.value){
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

// Breadth First Search
    BFS() {
        var data = [],
        queue = [],
        current = this.root;

        queue.push(current);
        while(queue.length){
            var node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        return data;
    }

// Depth first search - PreOrder
 DFSPreOrder() {
     var data = [], current = this.root;
     function traverse(node){
         data.push(node.value);
         if(node.left) traverse(node.left);
         if(node.right) traverse(node.right);
     }
     traverse(current);
     return data;
 }

// Depth first search - InOrder
 DFSInOrder() {
     var data = [],
     current = this.root;

     function traverse(node){
         if(node.left) traverse(node.left);
         data.push(node.value);
         if(node.right) traverse(node.right);
     }

     traverse(current);
     return data;
 } 

// Depth first search - PostOrder
 DFSPostOrder() {
     var data= [],
     current = this.root;

     function traverse(node){
         if(node.left) traverse(node.left);
         if(node.right) traverse(node.right);
         data.push(node.value);
     }

     traverse(current);
     return data;
 }     
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);
tree.insert(2);
tree.insert(6);
tree.insert(18);