class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
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

    forwardTraversal(){
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
    
    reverseTraversal(){
        if(this.isEmpty()){
            console.log("Linked list is empty")
        }else{
            let current=this.tail
            let listValues=''
            while(current){
                listValues=`<-${current.value}`+listValues
                current=current.prev
            }
            listValues=`null`+listValues
            console.log(listValues)
        }
    }

    prepend(value){
        let node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }

    append(value){
        let node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }

    insert(value,index){
        if(index===0){
            this.prepend(value)
        }else if(index===this.size){
            this.append(value)
        }else{
            let node=new Node(value)
            let temp=this.head
            let i=0
            while(temp!=null){
                if(i===index-1){
                    (temp.next).prev=node
                    node.next=temp.next
                    node.prev=temp
                    temp.next=node
                    this.size++
                    return
                }
                i++
                temp=temp.next
            }
        }
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
        }else{
            (this.head.next).prev=null
            this.head=this.head.next
        }
        this.size--
        return val
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log("Empty")
            return null
        }

        let val=this.tail.value

        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            (this.tail.prev).next=null
            this.tail=this.tail.prev
        }
        this.size--
        return val
    }

    removeValue(value){
        if(this.isEmpty()){
            console.log("Empty")
            return null
        }

        if(this.head.value===value){
            this.removeFromFront()
            return value
        }else if(this.tail.value===value){
            this.removeFromEnd()
            return value
        }else{
            let temp=this.head
            while(temp!=null){
                if(temp.value===value){
                    temp.prev.next=temp.next
                    temp.next.prev=temp.prev
                    this.size--
                    return value
                }
                temp=temp.next
            }
        }
        
        return null
    }

    removeIndex(index){
        if(this.isEmpty()){
            console.log("Empty")
            return null
        }
        let val

        if(index===0){
            val=this.removeFromFront()
            return val
        }else if(index===this.size-1){
            val=this.removeFromEnd()
            return val
        }else{
            let temp=this.head
            let i=0
            while(temp!=null){
                if(i===index){
                    val=temp.value
                    temp.prev.next=temp.next
                    temp.next.prev=temp.prev
                    this.size--
                    return val
                }
                i++
                temp=temp.next
            }
            return null
        }
    }
}

let doubly_linked_list=new DoublyLinkedList()
doubly_linked_list.forwardTraversal()
doubly_linked_list.prepend(8)
doubly_linked_list.prepend(7)
doubly_linked_list.prepend(6)
doubly_linked_list.forwardTraversal()
doubly_linked_list.reverseTraversal()
doubly_linked_list.append(3)
doubly_linked_list.append(9)
doubly_linked_list.append(90)
doubly_linked_list.append(19)
doubly_linked_list.forwardTraversal()
doubly_linked_list.removeFromFront()
doubly_linked_list.forwardTraversal()
doubly_linked_list.reverseTraversal()
doubly_linked_list.removeFromEnd()
doubly_linked_list.forwardTraversal()
doubly_linked_list.reverseTraversal()
doubly_linked_list.insert(1,2)
doubly_linked_list.forwardTraversal()
doubly_linked_list.reverseTraversal()
doubly_linked_list.removeValue(8)
doubly_linked_list.forwardTraversal()
doubly_linked_list.reverseTraversal()
console.log(doubly_linked_list.removeIndex(7))
doubly_linked_list.forwardTraversal()
doubly_linked_list.reverseTraversal()