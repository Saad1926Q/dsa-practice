class QueueOptimized{
    constructor(){
        this.front=-1
        this.rear=-1
        this.items={}
    }

    isEmpty(){
        if(this.front===-1){
            return true
        }
        return false
    }

    enqueue(val){
        if(this.isEmpty()){
            this.front++
        }

        this.rear++
        this.items[this.rear]=val
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Empty")
            return null
        }

        let val=this.items[this.front]
        delete this.items[this.front]
        
        if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return val
        }

        this.front++
        return val
    }

    size(){
        if(this.isEmpty()){
            return 0
        }
        return this.rear-this.front+1
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.items[this.front]
    }
    
}

let queue=new QueueOptimized()
queue.enqueue(12)
queue.enqueue(2)
queue.enqueue(8)
queue.enqueue(1)
console.log(queue)
console.log(queue.size())
queue.dequeue()
console.log(queue)
console.log(queue.size())
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.size())
console.log(queue.isEmpty())
