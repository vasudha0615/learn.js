let fruits = ["apple","mango","orange"]
// index           0      1       2
console.log(fruits)
//.push
fruits.push("banana")
console.log(fruits)
fruits.push("kiwi")
console.log(fruits)

//unshifts adds at first
// push adds at last

fruits.shift() // removes element from first
fruits.pop() // removes element from last 

// .map add forEach()
// forEach is used to print all the elements in an array forEach doesnot return value
let numbers = ["10","20","30","40"];
numbers.forEach((value)=> {
    console.log(value)
})
 
let num1 = [5,12,8]; 
// .find returns the 1st match based on condition.
num1.find((value) => {
    console.log(value>5)
})
// .find output will be in boolean values
let num2 = ["45","60","36"]
num2.find((value) => {
    console.log(value>45)
})

// .includes
let arr = [45,18,63,93,6]
let check = arr.includes(45) 
console.log(check)

let arr1 = [3,6,9,1,2]
// to sort the array
//console.log(arr1.sort())
//console.log(arr1.reverse())
let num3 = [23,9,17,16,13]
console.log(num3.sort((a,b) => a-b))
console.log(num3.sort((a,b) => b-a))
// a-b prints in ascending order
//b-a prints in descending order