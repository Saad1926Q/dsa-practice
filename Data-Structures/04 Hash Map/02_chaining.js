class Node{
    constructor(key,value){
        this.key=key
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

    append(key,value){
        let newNode=new Node(key,value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }

    find(key){
        let current=this.head
        while(current){
            if(current.key===key){
                return current
            }
            current=current.next
        }
        return null
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

    remove(key){
        if(this.isEmpty()){
            return null
        }else if(this.size===1 || this.head.key===key ){
            this.removeFromFront()
            return key
        }else{
            let temp=this.head
            let i=0
            while(temp.next){
                if((temp.next).key===key){
                    if(temp.next===this.tail){
                        this.tail=temp
                        this.tail.next=null
                        this.size--
                    }else{
                        temp.next=(temp.next).next
                        this.size--
                    }
                    return key
                }
                i++
                temp=temp.next
            }
            return null
        }
    }

    traverse(){
        if(this.isEmpty()){
            console.log("Linked list is empty")
        }else{
            let current=this.head
            let listValues=''
            while(current){
                listValues+=`${current.key}:${current.value}->`
                current=current.next
            }
            listValues+='null'
            return listValues
        }
    }
}

class HashMap{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }

        return total%this.size  //So that it doesnt exceed the size of the array
    }

    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            bucket=new LinkedList()
            bucket.append(key,value)
            this.table[index]=bucket
        }else{
            let sameKeyItem=bucket.find(key)
            if(sameKeyItem){
                sameKeyItem.value=value
            }else{
                bucket.append(key,value)
            }
        }
    }

    get(key){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            let sameKeyItem=bucket.find(key)
            if(sameKeyItem){
                return sameKeyItem.value
            }
        }
        return undefined
    }

    remove(key){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(key)
            if(sameKeyItem){
                bucket.remove(key)
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                if(!this.table[i].isEmpty()){
                    console.log(i,this.table[i].traverse())
                }
            }
        }
    }
}

let hashmap=new HashMap(10)
hashmap.set('saad','hacker')
hashmap.set('daas','badmaas')
console.log(hashmap.get('daas'))
hashmap.remove('daas')
hashmap.display()
