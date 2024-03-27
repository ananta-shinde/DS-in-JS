
class Student{
    id;
    name;
    email;
    addresss;
}

class StudentList{
    slist = [];
    insertStudent = (student)=>{
          this.slist.push(student);
    }
}

var s1 = new Student();
s1.id = 100;
s1.name = "Ananta"
s1.email = "demo@gmail"

var studentList = new StudentList()
studentList.insertStudent(s1)

console.log(studentList.slist[0])