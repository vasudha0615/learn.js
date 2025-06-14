let score = 77
if (score > 35) 
    {
    console.log("you passed the exam")
}else{
    console.log("failed")
}

let rating = 4;

// rating of 2 or below is bad
// rating of 4 or above is good
// else the rating is average

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}

//nested if...else statement

let marks =67

if (marks>40){
    if (marks>80){
        console.log("distinction")
    }

    else{
        console.log("passed")
    }
}
    else{
        console.log("failed")
    }

    //for loop
    for (let i = 0; i < 3; i++) {
    console.log("Hello everyone");

}
let sum = 0
const n = 100
for (i = 0; i < n; i++){
    sum += i;
}
console.log(sum)

//while loop
i = 0
while(i < 5){
    console.log(i)
    i += 1
}