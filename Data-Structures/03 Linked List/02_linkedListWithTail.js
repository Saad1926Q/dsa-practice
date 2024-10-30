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

let linked_list=new LinkedList()
linked_list.prepend(10)
linked_list.prepend(1)
linked_list.append(8)
linked_list.insert(6,3)
linked_list.insert(16,4)
linked_list.print()
console.log(linked_list.removeFromFront())
linked_list.removeFromFront()
linked_list.append(4)
linked_list.print()
console.log(linked_list.removeFromEnd())
linked_list.print()
linked_list.append(8)
linked_list.print()