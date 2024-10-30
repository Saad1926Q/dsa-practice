class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null 
    }

    insert(value){
        const node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
            let current=this.root
            let inserted=false
            while(inserted===false){
                if(value<current.value){
                    if(current.left){
                        current=current.left
                    }else{
                        current.left=node
                        inserted=true
                    }
                }else if(value>current.value){
                    if(current.right){
                        current=current.right
                    }else{
                        current.right=node
                        inserted=true
                    }

                }
            }
        }
    }

    preorder(node){  //Root Left Right
        let result=``
        function traversal(node){
            if(node===null){
                return
            }
    
            result+=`${node.value} `
            traversal(node.left)
            traversal(node.right)
        }

        traversal(node)

        return result
    }

    postorder(node){  //Left Right Root
        let result=``
        function traversal(node){
            if(node===null){
                return
            }
    
            traversal(node.left)
            traversal(node.right)
            result+=`${node.value} `
        }

        traversal(node)

        return result
    }

    inorder(node){  //Left Root Right
        let result=``
        function traversal(node){
            if(node===null){
                return
            }
    
            traversal(node.left)
            result+=`${node.value} `
            traversal(node.right)
        }

        traversal(node)

        return result
    }

    search(node=this.root,value){
        if(!node || node.value===value){
            return node
        }

        if(value<node.value){
            return this.search(node.left,value)
        }else{
            return this.search(node.right,value)
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(node=this.root,value){
        const findInorderSuccessor=(node)=>{
            let min=node.value
            let inorder_successor=node
            while(inorder_successor.left){
                inorder_successor=inorder_successor.left
            }

            return inorder_successor.value
        }

        if(node===null){
            return node
        }

        if(value<node.value){
            node.left=this.deleteNode(node.left,value)   //Delete value from left subtree
        }else if(value>node.value){
            node.right=this.deleteNode(node.right,value)  //Delete value from right subtree
        }else{
            if(!node.left && !node.right){
                return null
            }else if((!node.left && node.right)||(node.left && !node.right)){
                if(node.left){
                    return node.left
                }else{
                    return node.right
                }
            }else{
                node.value=findInorderSuccessor(node.right)
                node.right=this.deleteNode(node.right,node.value)
            }
        }

        return node
    }
}

let bst=new BinarySearchTree()

bst.insert(2)
bst.insert(3)
bst.insert(6)
bst.insert(1)
bst.insert(0)
bst.insert(11)
bst.insert(31)
bst.insert(8)
bst.delete(11)
console.log(bst)
console.log(bst.inorder(bst.root))