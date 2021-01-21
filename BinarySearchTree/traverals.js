{
    class Node {
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor(){
            this.root = null;
        }

        insert(value) {
            let newNode = new Node(value);
            if(!this.root) {
                this.root = newNode;
                return this;
            } else {
                var current = this.root;
                while(true){
                    if(value < current.value) {
                        if(current.left === null){
                            current.left = newNode;
                            return this;
                        }else {
                            current = current.left;
                        }
                    } else if(value > current.value){
                        if(current.right === null){
                            current.right = newNode;
                            return this;
                        }else{
                            current = current.right;
                        }
                    }
                }
            }
        }

        find(value) {
            if(!this.root) return false;
            let current = this.root;
            let found = false;
            while(current && !found){
                if(value > current.value){
                    current = current.right;
                }else if(value < current.value){
                    current = current.left;
                } else{
                    found = true;
                }
            }
            if(!found) return undefined;
            return current;
        }

        bfs() {
            let node = this.root;
            let data = [];
            let queue = [];

            queue.push(node);
            while(queue.length){
                node = queue.shift();
                data.push(node.value);
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }
            }
            return data;
        }

        dfsPreOrder(){
            let data = [];
            let current = this.root;
            function traverse(node){
                data.push(node.value);
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
            }
            traverse(current);
            return data;
        }

        dfsPreOrderIterative(){
            if(!this.root) return undefined;
            let data = [];
            let stack = [];
            let current = this.root;
            stack.push(current);
            while(current || stack.length > 0){
                current = stack.pop();
                data.push(current.value);
                if(current.right) stack.push(current.right);
                if(current.left) stack.push(current.left);
                current = current.left;
            }
            return data;
        }

        dfsPostOrder() {
            let data = [];
            let current = this.root;
            function traverse(node) {
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                data.push(node.value)
            }
            traverse(current);
            return data;
         }

         dfsInOrder() {
            let data = [];
            let current = this.root;
            function traverse(node) {
                node.left && traverse(node.left);
                data.push(node.value)
                node.right && traverse(node.right);
            }
            traverse(current);
            return data;
         }

         dfsInOrderIterative() {
             let data = [];
             let stack = [];
             let current = this.root;

             while(current || stack.length){
                 while(current){
                     stack.push(current);
                     current = current.left;
                 }

                 current = stack.pop();
                 data.push(current.value);
                 current = current.right;
             }
             return data;
         }


    }

    let tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(13);
    tree.insert(11);
    tree.insert(2);
    tree.insert(16);
    tree.insert(7);
    console.log("BFS",tree.bfs());
    console.log("Preorder recursive",tree.dfsPreOrder());
    console.log("Preorder iterative",tree.dfsPreOrderIterative());
    console.log("Postorder recursive",tree.dfsPostOrder());
    console.log("Inorder recursive",tree.dfsInOrder());
    console.log("Inorder iterative", tree.dfsInOrderIterative());
}
