class CircularQueue{
    constructor(){
        this.arr=new Array(5)
        this.front=-1
        this.rear=-1
        this.max_length=5
    }

    isEmpty(){
        if(this.front===-1){
            return true
        }

        return false
    }

    isFull(){
        if((this.rear+1)%this.max_length===this.front){
            return true
        }

        return false
    }

    enqueue(val){
        if(this.isFull()){
            console.log("Full")
            return
        }else{
            if(this.isEmpty()){
                this.front=0
                this.rear=0
            }else{
                this.rear=(this.rear+1)%this.max_length
                
            }
            this.arr[this.rear]=val
        }

    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Empty")
            return null
        }

        let val=this.arr[this.front]

        if(this.front===this.rear){
            this.front=-1
            this.rear=-1
        }else{
            this.front=(this.front+1)%this.max_length
        }
        return val
        
    }

    display(){
        if(this.isEmpty()){
            console.log("Empty")
            return
        }

        let result=[]
        let i=this.front

        while(true){
            result.push(this.arr[i])
            if(i===this.rear){
                break
            }

            i=(i+1)%this.max_length
        }
        
        console.log(result)
    }
}

let cir=new CircularQueue()
console.log(cir.isEmpty())
cir.enqueue(12)
cir.enqueue(2)
cir.enqueue(1)
cir.enqueue(3)
cir.enqueue(4)
cir.display()
cir.enqueue(21)
cir.dequeue()
cir.display()
cir.enqueue(31)
cir.display()
console.log(cir.isFull())
