
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

    findByValue = (value)=>{
          var temp = this.head;
          while(temp != null){
            if(temp.data == value)
            {
                return temp.data;
            }
            temp = temp.next
          }
          return null;
    }

    deleteByValue = (value)=>{
        var temp = this.head;
        while(temp.next.data != value)
        {
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    size = ()=>{
        var count = 0;
        if(this.head == null){
            return 0;
        }else{
             var temp = this.head;
             while(temp !=null)
             {
                count++
                temp = temp.next
             }
        }
        return count;
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
console.log(slist.findByValue(160));
slist.deleteByValue(50);
console.log(slist.size())
slist.printList();


 
 