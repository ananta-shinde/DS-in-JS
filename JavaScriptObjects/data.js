
const names = ["ananta", "Shardul"]

var data ={
    key1:"value1",
    key2:"value2"
}

const student = {
    email:"ananta@mail",
    contact: 545455,
    addreess: "Plot no 3, chilathana",
}

// Object.freeze(student)
console.log(student["email"])
console.log(student.contact)

student.email = "demo"
student.rollNo = 12455
student.rollNo = 121000455
student["rollNo"] = 54545555454

// student = "Sample"
console.log(student)

student.email = undefined
result = Object.keys(student)
result = Object.values(student)
result = Object.entries(student)
 


console.log(result)

