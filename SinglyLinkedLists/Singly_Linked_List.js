class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

// Add to the end of the SLL. Return new LL
    push(value){
        var newVtx = new Node(value);
        if(!this.head){
            this.head = newVtx;
            this.tail = this.head;
        } else {
            this.tail.next = newVtx;
            this.tail = newVtx;
        }
        this.length++;
        return this;
    }
// Remove from end of the LL. Return removed node
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
  
 //Remove from start of LL. Return removed node.
    shift(){
        if(!this.head) return undefined;
        var temp = this.head;
        this.head = temp.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return temp;
    }   

// Add to the start of the list. Return list
    unshift(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
// Retrieving a node at a specific position. Index starts at 0. Return node.
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

// Set value at specific position. Utilize get method to find specific node. Return true / false
    set(index, value){
        var newNode = this.get(index);
        if(!newNode) return false;
        newNode.value = value;
        return true;
    }

// Insert a node with 'value' at specific index. Return true / false.
    insert(index,value) {
        if(index < 0 || index > length) return false;
        if(index === 0){
            return this.unshift(value);
        }
        if(index === this.length) {
            return this.push(value);  
        } 
        var newNode = new Node(value);
        var prevNode = this.get(index-1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

// Remove a node at specific index. Return the node
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var prevNode = this.get(index-1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

// Reverse a linked list in-place
    reverse(){
        //Swap the head and tail
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var prev = null;
        var next;
        for(var i=0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

// Utility method to print out the LL.
    print(){
        var arr = []
        var current = this.head;
        while(current) {
            arr.push(current.value);
            current=current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList();
list.push("hello");
list.push("how");
list.push("are");
list.push("you");