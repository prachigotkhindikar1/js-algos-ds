{
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor() {
            this.first = null;
            this.last = null;
            this.size = 0;
        }

//Add to the queue. Add to end of queue (SLL PUSH). Return size.
    enqueue(value) {
        var newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode
            this.last = newNode;
        }
        return ++this.size;
    }

//Remove from the queue. Remove from start(SLL SHIFT). Return removed node.
    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp;
    }
  }

  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(12);
  queue.enqueue(13);
}