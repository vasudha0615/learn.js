let arr = [-5,2,4,8,9]

let check = arr.every((value) => value > 1)
console.log(check)

// .some

let arr2 = [3,-9,8,4,7]
let output = arr2.some((value) => value < 0)
console.log(output)

// .flat

let arr3 = [1,2,[5,6],[5,8],[99,88],[56,72],[65,99,87]]
let final = arr3.flat()
console.log(final)

// .join
let fname = ["s","u","j","i","t","h"]
let output1 = fname.join("")
console.log(output1)

// indexof

let names = ["hi","hello","bye","sujith","vasudha"]
console.log(names.indexOf("vasudha"))

// .fill

let stu = ["A1","B1","C1","D1"]
console.log(stu.fill("S1"))
