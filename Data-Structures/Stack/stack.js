class Stack{
    constructor(){
        this.st=[]
        this.top=-1
    }

    push(val){
        this.top+=1;
        this.st.push(val);
    }

    pop(){
        if(this.isEmpty()){
            console.log("Empty stack!!")
            return null
        }
        let val=this.st[this.top]
        this.st.pop()
        this.top--;
        return val
    }

    isEmpty(){
        if(this.st.length===0){
            return true;
        }
        return false;
    }

    peek(){
        return this.top
    }
}

let stack=new Stack()
stack.push(3)
stack.push(12)
stack.push(8)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)