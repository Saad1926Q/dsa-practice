class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift();
    }

    isEmpty(){
        if(this.items.length===0){
            return true;
        }
        return false;
    }

    peek(){   //Get the value at the front of the queue without removing it
        if(this.isEmpty()!=true){
            return this.items[0];
        }
        return null;
    }


    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items);
    }
}

let queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(12)
queue.enqueue(13)
console.log(queue.size())
queue.dequeue()
queue.print()