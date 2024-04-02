
class Node{
    data;
    next = null;
}

class SignlyLinkedList
{
    head = null;
    
    push = (number)=>{
          var newnode = new Node();
          newnode.data = number;
          if(this.head == null){
            this.head = newnode;
          }else{
            var temp = this.head;
             while(temp.next != null)
             {
                temp = temp.next;
             }
             temp.next = newnode
          }
          
    }

    printList = ()=>{
        var temp = this.head;
        while(temp != null)
        {
            console.log(temp.data)
            temp = temp.next
        }
    }
}


var slist = new SignlyLinkedList();

slist.push(20);
slist.push(40);
slist.push(50);
slist.push(60);
slist.push(50);
slist.push(80);
slist.printList();


 
 