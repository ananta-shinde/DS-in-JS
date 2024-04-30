
class Node{
    data;
    next;
}

class CircularLinkedList{
    head = null;
    count = 0;

    push = (number)=>{
        var newnode = new Node();
        newnode.data = number;
        newnode.next = null;
        this.count++;
        if(this.head == null)
        {
            this.head = newnode;
            newnode.next = this.head;
        }
        else{
            var temp = this.head;
            while(temp.next != this.head)
            {
                temp = temp.next;
            }
            temp.next = newnode;
            newnode.next = this.head;
        }
    }

    size = ()=>{
         return this.count;
    }

    printList = ()=>{
        if(this.head != null)
        {
            var temp = this.head;
            if(this.count == 1){
                console.log(temp.data)
            }
            else{
                do{
                    console.log(temp.data);
                    temp =  temp.next;
                }while(temp != this.head)
            }
            
        }
    }

    deleteByValue = (value)=>{
          if(this.head != null)
          {
              
              if(this.head.data == value)
              {
                  var temp = this.head;
                  while(temp.next != this.head)
                  {
                     temp = temp.next;
                  }
                  this.head = this.head.next;
                  temp.next = this.head;

              }
              else{
                while(temp.next.data != value)
                {
                    temp = temp.next;
                }
                if(temp.next == this.head)
                {
                    temp.next = this.head;
                }else{
                    temp.next = temp.next.next
                }  
              }
              this.count--; 
          }
    }
}

var list = new CircularLinkedList()

list.push(20);
list.push(30);
list.push(40);
list.deleteByValue(40);


list.printList();