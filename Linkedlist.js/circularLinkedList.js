
class Node{
    data;
    next = null;
    prev = null;
}

class CircularLinkedList{
     head =-1
     tail =-1
    data = new Array(5);

     push=(number)=>{
        
        if(this.head == -1){
            this.head++;
            this.tail++;
            this.data[this.head] = number;
        }
        else{
            if(this.head != this.tail)
            {
                this.tail++;
                if(this.tail>=5)
                {
                    tail = 0;
                }
                this.data[this.tail] = number;  
            }else{
                console.log("list is full")        
            }
           
        }
        console.log("list :"+this.data+" head:"+this.head+" tail:"+this.tail)
        
     }
}

var clist = new CircularLinkedList();

clist.push(20)
clist.push(30)