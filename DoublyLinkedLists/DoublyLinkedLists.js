class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

// Add to the end of DLL. Return list
push(value){
    var newNode = new Node(value);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
}

// Remove node from end of DLL. Return removed Node.    
pop(){
    if(!this.head) {
        return undefined;
    }
    var removed = this.tail;
    if(this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = removed.prev;
        this.tail.next = null;
        removed.prev = null;
    }
    this.length--;
    return removed;
}
// Remove from the beginning of the DLL. Return node.
shift(){
    if(!this.head) {
        return undefined;
    }
    var removedHead = this.head;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    } else {
        this.head = removedHead.next;
        this.head.prev = null;
        removedHead.next = null;
    }
    this.length--;
    return removedHead;
}

// Add to the beginning of the DLL. Return list. 
unshift(value) {
   var newNode = new Node(value);
   if(length === 0) {
       this.head = newNode;
       this.tail = newNode;
   } else {
       newNode.next = this.head;
       this.head.prev = newNode;
       this.head = newNode;
   }
   this.length++;
   return this;
}

// Get value at specified index. Return node.
get(index) {
    if(index < 0 || index >= this.length) {
        return undefined;
    }
    if(index <= this.length/2) {
        var count = 0;
        var current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
            }
        } else {
        var count = this.length - 1;
        var current = this.tail;
        while(count !== index) {
            current = current.prev;
            count--;
            }
    }
    return current;
}

// Set value of node at specified index. Return true/ false
set(index, value) {
    var node = this.get(index);
    if(!node) {
        return false;
    }
    node.value = value;
    return true;
}

// Insert a new node a specified index. Return true/ false
insert(index, value) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);
    var node = new Node(value);
    var prevNode = this.get(index-1);
    var afterNode = prevNode.next;

    prevNode.next = node, node.prev = prevNode;
    afterNode.prev = node, node.next = afterNode;

    this.length++;
    return true;
}
// Remove a node at specified index. Return removed node.
remove(index) {
   if(index < 0 || index >= this.length) return undefined;
   if(index === 0) return this.shift();
   if(index === this.length - 1) return this.pop();
   var removed = this.get(index);
   var beforeNode = removed.prev;
   var afterNode = removed.next;

   beforeNode.next = afterNode; removed.prev = null;
   afterNode.prev = beforeNode; removed.next = null;

   this.length--;
   return removed;
}

// Reverse a DLL
 reverse() {
     var node = this.head;
     this.head = this.tail;
     this.tail = node;

     var prev = null;
     var next;

     for(var i=0;i<this.length;i++){
         next = node.next;
         node.next = prev;
         node.prev=next;

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

dList = new DoublyLinkedList();
dList.push("This");
dList.push("is");
dList.push("a");
dList.push("DLL");