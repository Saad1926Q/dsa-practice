class HashMapQuadraticProbing{
    constructor(size){
        this.table=new Array(size)
        this.size=size
        this.count=0
    }

    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        if(this.count===this.size){
            console.log("Hashmap Full")
            return
        }

        let index=this.hash(key)
        let startIndex=index
        let j=1

        while(this.table[index]!==undefined && (this.table[index]!==null || this.table[index].key!==key)){
            index=(startIndex+j*j)%this.size
            j++

            if(j>=this.size){
                console.log("No empty slots available for key:", key);
                return
            }
        }

        if(this.table[index]===undefined || this.table[index]===null){
            this.table[index]={key:key,value:value}
            this.count++
        }else{
            this.table[index].value=value
        }


    }

    get(key){
        let index=this.hash(key)
        let startIndex=index
        let j=0

        while(this.table[index]!==undefined){
            if(this.table[index]!==null && this.table[index].key===key){
                return this.table[index].value
            }
            index=(startIndex+j*j)%this.size
            j++

            if(j>=this.size){
                break
            }
        }

        return undefined
    }

    remove(key){
        let index=this.hash(key)
        let startIndex=index
        let j=0

        while(this.table[index]!==undefined){
            if(this.table[index]!==null && this.table[index].key===key){
                this.table[index]=null
                this.count--
                return true
            }
            index=(startIndex+j*j)%this.size
            j++

            if(j>=this.size){
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

let hashmap=new HashMapQuadraticProbing(10)
hashmap.set('saad','hacker')
hashmap.set('asad','hr')
hashmap.set('asd','he')
hashmap.set('sd','bhr')
hashmap.set('as','hbr')
hashmap.set('ddnn','hr')
hashmap.set('asds','he')
hashmap.set('sdsa','bhr')
hashmap.set('assaa','hbr')
hashmap.set('ddenn','hr')
hashmap.set('asdss','he')
hashmap.set('sdsar','bhr')
hashmap.set('assaz','hbr')
hashmap.display()