
var students = ["Ram","Shyam","Laxman","hanuman","Ravan"]

console.log(students.length)
console.log(students)

students.map((value,i)=>{
    if((i+1)%2 == 0){
        students[i] = 200;
}});

students = students.filter((value,i)=>(value != "Laxman"))


console.log(students)


