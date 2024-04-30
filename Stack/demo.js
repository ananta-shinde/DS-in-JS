
class Node{
    data;
    next;
}

class Stack{
    top = null;

    push = (number)=>{
        var newNode = new Node();
        newNode.data = number;

        if(this.top == null)
        {
            this.top = newNode;
        }
        else{
            var temp = this.top;
            this.top = newNode
            newNode.next = temp;
        }
    }

    pop = () =>{
        var data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}


var mymarks  = new Stack();

mymarks.push(20);
mymarks.push(30);
mymarks.push(22);

console.log(mymarks.pop())