//for...of - used to loop over the values of an array

//for...in - used to loop over the keys(indexes) of an array and objects

let names = ["vasudha","sujith","divya","hari","deekshitha"]
//              0         1       2      3       4

for(let x of names){
    console.log(x)
}

// for in loop used for mainly objects
// rare in arrays

let person = {
    fname :"vasudha",
    age:20,
    city:"hyd"
}

for(let key in person){
    console.log(key,person[key])
}