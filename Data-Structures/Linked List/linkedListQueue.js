class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }

    append(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }

    insert(value,index){
        if(index==0){
            this.prepend(value)
            return
        }else if(index==this.size){
            this.append(value)
            return
        }else{
            let node=new Node(value)
            let temp=this.head
            let i=0
            while(temp!=null){
                if(i===index-1){
                    node.next=temp.next
                    temp.next=node
                    this.size++
                    return
                }
                i++
                temp=temp.next
            }
        }

        console.log("Invalid Index");
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log("Empty")
            return null
        }
        let val=this.head.value
        if(this.size===1){
            this.head=null
            this.tail=null
            this.size--
        }else{
            this.head=this.head.next
            this.size--
        }
        return val
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log("Empty")
            return null
        }
        let val=this.tail.value
        if(this.size===1){
            val=this.head.value
            this.head=null
            this.tail=null
            this.size--
        }else{
            let temp=this.head
            while(temp.next!==this.tail){
                temp=temp.next
            }
            temp.next=null
            this.tail=temp
            this.size--
        }
        return val
    }

    print(){
        if(this.isEmpty()){
            console.log("Linked list is empty")
        }else{
            let current=this.head
            let listValues=''
            while(current){
                listValues+=`${current.value}->`
                current=current.next
            }
            listValues+='null'
            console.log(listValues)
        }
    }
}


class LinkedListQueue{
    constructor(){
        this.list=new LinkedList()
    }

    enqueue(val){
        this.list.append(val)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    display(){
        this.list.print()
    }

    isEmpty(){
        return this.list.isEmpty()
    }
}

let queue=new LinkedListQueue()

queue.enqueue(8)
queue.enqueue(6)
queue.enqueue(3)
queue.display()
queue.dequeue()
queue.display()