class DirectAddressTable{
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
        this.table[index]=value
    }

    get(key){
        let index=this.hash(key)
        let value=this.table[index]
        if(value){
            return value
        }
        return undefined
    }

    remove(key){
        let index=this.hash(key)
        let value=this.table[index]
        if(value){
            this.table[index]=undefined
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

let hashmap=new DirectAddressTable(10)
hashmap.set('saad','hacker')
hashmap.set('helo','whatup')
hashmap.set('yo','memes')
hashmap.display()
hashmap.remove('yo')
hashmap.display()