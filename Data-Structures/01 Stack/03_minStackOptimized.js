class minStackOptimized{
    constructor(){
        this.st=[]
        this.min=[]
        this.st_top=-1
        this.min_top=-1
    }

    push(val){
        this.st.push(val)
        this.st_top++
        if(this.min_top===-1){
            this.min.push(val)
            this.min_top++
        }else{
            if(val<=this.min[this.min_top]){
                this.min.push(val)
                this.min_top++
            }
        }
    }

    pop(){
        if(this.st_top===-1){
            return null
        }

        let val=this.st.pop()
        this.st_top--

        if(val==this.min[this.min_top]){
            this.min.pop()
            this.min_top--
        }

        return val
    }

    getMin(){
        if(this.min_top===-1){
            return null
        }

        return this.min[this.min_top]
    }

    peek(){
        if(this.st_top===-1){
            return null
        }

        return this.st[this.st_top]
    }

}

let minstack=new minStackOptimized()

minstack.push(12)
minstack.push(1)
minstack.push(2)
minstack.push(0)
minstack.push(14)
minstack.pop()
console.log(minstack.peek())
console.log(minstack.getMin())
console.log(minstack)