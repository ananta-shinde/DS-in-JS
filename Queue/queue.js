class Node{
    data;
    next =  null;
}


class MyQueue{
    front = null;
    tail = null;


    push = (number)=>{
        var newNode = new Node();
        newNode.data = number

        if(this.front == null){
            this.front = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    
    }

    pop = ()=>{
        var data;
        if(this.front != null){
            data  = this.front.data;
            this.front = this.front.next;
        }
        return data;
    }

    getfront = () => {
        return this.front.data;
    }
    gettail = () => {
        return this.tail.data;
    }

}

var queue = new MyQueue();

queue.push(20);
queue.push(25);
queue.push(40);
console.log(queue.pop())
console.log(queue.getfront())
console.log(queue.gettail())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())