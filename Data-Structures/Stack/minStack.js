class minStack{
    constructor(){
        this.st=[]
        this.top=-1
    }

    isEmpty(){
        return this.top===-1
    }

    push(val){
        if(this.isEmpty()){
            this.st.push([val,val])
            this.top++
        }else{
            this.st.push([val,Math.min(val,this.st[this.top][1])])
            this.top++
        }
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty!!")
            return null
        }
        let val=this.st.pop()[0]
        this.top--
    }

    getMin(){
        if(this.isEmpty()){
            return null
        }

        return this.st[this.top][1]
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.st[this.top][0]
    }
}

let minstack=new minStack()

minstack.push(12)
minstack.push(3)
minstack.push(1)
minstack.push(13)
minstack.pop()
console.log(minstack.peek())
console.log(minstack.getMin())
console.log(minstack)