class HashMapLinearProbing{
    constructor(size){
        this.table=new Array(size)
        this.size=size
        this.count=0   //Keeps track of number of key-value pairs in the hashmap
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }

        return total%this.size 
    }

    set(key,value){
        if(this.count===this.size){
            return
        }else{
            let index=this.hash(key)
            const startIndex=index

            while(this.table[index]!==undefined && this.table[index]!==null && this.table[index].key!==key){
                index=(index+1)%this.size

                if(index===startIndex){
                    return
                }
            }

            if(this.table[index]===undefined || this.table[index]===null){
                this.table[index]={key:key,value:value}       
                this.count++   
            }else{
                this.table[index].value
            }
        }
    }

    get(key){
        let index=this.hash(key)
        const startIndex=index

        while(this.table[index]!==undefined){
            if(this.table[index]!==null && this.table[index].key===key){
                return this.table[index].value
            }

            index=(index+1)%this.size

            if(index===startIndex){
                break
            }
        }

        return undefined
    }

    remove(key){
        let index=this.hash(key)
        const startIndex=index

        while(this.table[index]!==undefined){
            if(this.table[index]!==null && this.table[index].key===key){
                this.table[index]=null  // Using null as a marker
                this.count--
                return true //key found and removed
            }
            index=(index+1)%this.size

            if(index===startIndex){
                break
            }
        }

        return false
    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(`${i}:${this.table[i].key}->${this.table[i].value}`)
            }
        }
    }


}

let hashmap=new HashMapLinearProbing(10)
hashmap.set('saad','hacker')
hashmap.set('dasa','hacker')
hashmap.set('cat','billi')
hashmap.display()
hashmap.remove('at')
hashmap.display()