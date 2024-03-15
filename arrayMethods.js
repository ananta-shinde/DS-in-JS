
var students = ["Ram","Shyam","Laxman","hanuman","Ram","Ravan"]

console.log(students.length)
console.log(students)

// students.map((value,i)=>{
//     if((i+1)%2 == 0){
//         students[i] = 200;
// }});

students.filter((value,i)=>(value != "Laxman"))
// students.push(100);
result = students.concat([20,30,40,"Ananta"])
// students.fill(20,2,5)
console.log(students.find(s=>s=="Ravan"))
console.log(students.findIndex(s=>s=="Ram"))
console.log(students.lastIndexOf("Ram"))
console.log(students.indexOf("Ram"))
console.log(students.join("/"))
console.log(students.reverse())
console.log(students.includes("ME"))

students.


console.log(students)


