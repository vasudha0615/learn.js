//create person object
let person = {
    name : "vasudha",
    age : 20
}

console.log(person)

let student = {
    name: "John",
    age: 20,
}
//modify property
student.name = "mary"

// add properties
student.rollNo = 14
student.faculty = "Science"

//delete property
delete student.age

// display the object
console.log(student);

let cat = {
    name: "luna",
    hobby: "sleeping",
//use function as value
    greet: function(){
        console.log("cat says hi!")
    }
}

//call object method
cat.greet()

//add new method
cat.introduce = function () {
    console.log("hello")
}

cat.introduce()

//constructor function
function person1 (){
    this.name= "john"
    this.age=30
}
//create objects
let person2 = new person1()
let person3 = new person1()

//access properties
console.log(person2.name)
console.log(person3.age)

//constructor function with parameters
function emp (emp_name, emp_age, emp_gender){
this.name = emp_name
this.age = emp_age
this.gender = emp_gender

greet = function(){
    console.log("hey")
}
}

//create objects and pass arguements
let emp1 = new emp("hari",30,"male")

//access properties
console.log(emp1.name)
