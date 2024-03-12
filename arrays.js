
var numbers = [20,45,56,88,"Ananta"] // create
numbers[0]  = 55 // update
numbers.pop() // delete

function deleteByIndex(arr,index)
{
    let temp = [];
    for(i=0;i<arr.length;i++)
    {
        if(i != index){
            temp.push(arr[i])
        }
    }
    return temp

}
// numbers = deleteByIndex(numbers,2)
numbers = numbers.filter((n,i)=>(i!=1))
console.log(numbers) // read
