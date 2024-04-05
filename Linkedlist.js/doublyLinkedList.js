class Node{
    data;
    next = null;
    prev = null;
}

class DoublyLinkedList{
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
           newnode.prev = temp;
           temp.next = newnode

        }
        
  }

  printListInOrder = ()=>{
    var temp = this.head;
    while(temp != null)
    {
        console.log(temp.data)
        temp = temp.next
    }
}

printListReverseOrder = ()=>{
    var temp = this.head;
    while(temp.next != null)
    {
        temp = temp.next
    }
    while(temp != null)
    {
        console.log(temp.data)
        temp = temp.prev
    }
}

deleteByValue = (value)=>{
    var temp = this.head;
    while(temp.next.data != value)
    {
        temp = temp.next;
    }

    temp.next = temp.next.next;
    temp.next.prev = temp;
  }
}


var Dlist = new DoublyLinkedList();

Dlist.push(20)
Dlist.push(120)
Dlist.push(200)
Dlist.push(210)
Dlist.push(2000)
Dlist.deleteByValue(200)
// Dlist.printListInOrder();
Dlist.printListReverseOrder();