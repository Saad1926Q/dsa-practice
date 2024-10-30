class HashMapDoubleHashing{
    constructor(size){
        this.table=new Array(size)
        this.size=size
        this.count=0
    }

    hash1(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    hash2(key){
        let prime=this.size-1
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return 1+(total%(this.size-1))  // a number between 1 and size-1
    }

    // set(key,value){
    //     if(this.size===this.count){
    //         console.log("Hashmap Full")
    //         return
    //     }

    //     let index=this.hash1(key)
    //     let v=this.hash2(key)

        
    // }
}