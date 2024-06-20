class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
        const newNode =  new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop(){
        if(!this.head) return undefined

        let pre     = this.head
        let temp    = this.head

        while(temp.next){
            pre     = temp
            temp    = temp.next
        }

        this.tail       = pre
        this.tail.next  = null
        this.length--

        if(this.length == 0){
            this.head = null
            this.tail = null
        }

        return temp
    }
}

var myLinkedList    = new LinkedList(4)
var pushResult      = myLinkedList.push(7)
var popResult       = myLinkedList.pop()
var popResult       = myLinkedList.pop()
var popResult       = myLinkedList.pop()
console.log(popResult);