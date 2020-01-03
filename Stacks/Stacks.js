class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

// Add value to top of the stack. Return the size.
    push(value) {
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

// Remove the value from the top of stack. Return removed node.
    pop() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}

var stack = new Stack();
stack.push("google.com");
stack.push("github.com");
stack.push("repo.me.com");