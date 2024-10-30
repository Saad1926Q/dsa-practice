class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){    //O(1)
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }

        this.size++
    }

    append(value){    //O(n)
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next!=null){
                curr=curr.next
            }

            curr.next=node
        }

        this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return
        }

        if(index===0){
            this.prepend(value)
        }else{
            let node=new Node(value)

            let i=0

            let curr=this.head

            while(i<index-1){
                curr=curr.next
                i++
            }
            node.next=curr.next
            curr.next=node
            this.size++
        }
    }

    removeIndex(index){
        if(index<0 || index>=this.size){
            return null
        }

        let removed
        if(index==0){
            removed=this.head
            this.head=this.head.next
        }else{
            let i=0
            let curr=this.head
            while(i<index-1){
                curr=curr.next
                i++
            }
            removed=curr.next
            curr.next=removed.next
        }
        this.size--
        return removed.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }else{
            if(this.head.value===value){
                this.head=this.head.next
                this.size--
                return value
            }else{
                let found=false
                let curr=this.head

                while(curr.next && (curr.next).value!==value){
                    curr=curr.next
                }
                
                if(curr.next){
                    found=true
                }

                if(found===true){
                    curr.next=(curr.next).next
                    this.size--
                    return value
                }

                return null
                

            }
        }
    }

    reverse(){
        let prev=null
        let curr=this.head
        let next

        while(curr.next){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }

        this.head=curr
        this.head.next=prev
    }

    search(value){
        if(this.isEmpty()){
            return null
        }else{
            let i=0
            let curr=this.head
            
            while(curr!=null){
                if(curr.value===value){
                    return i
                }
                curr=curr.next
                i++
            }

            return null
        }
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