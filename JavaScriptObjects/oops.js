
const student = {
    email:"ananta@mail",
    contact: 545455,
    addreess: "Plot no 3, chilathana",
    getData : (email,contact)=>{ console.log(email+ ":"+contact)}
}

class Student{
     email;
     contact;
     addreess;
     getData = ()=>{ console.log(this.email+ ":"+this.contact)}
}

var stud = new Student();
var stud2 = new Student();
// var stud2 = stud;
stud2.email = "demo2@gmail"
stud.email = "demo@gmail"
stud2.email = "adfdfdf"
stud.contact = 1234566;

student.getData("demo",454545)
stud.getData()
stud2.getData()

 
