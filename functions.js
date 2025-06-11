// functions are one of the most powerful features in javascript.They allow you to reuse code organize logic,and handle dynamic inputs.
//function declaration
function sayhello()
{
    console.log("hello")

}
//calling function
sayhello()
sayhello()

for(let i= 1;i<10;i++){
    sayhello()
}
function sum(a,b)
{
    console.log(a+b)
}
sum(5,7)//function calling
function mul(a,b){
    console.log(a*b)
}
mul(9,9)

function diff(a,b){
    console.log(a-b)
}
diff(34,21)

function div(a,b){
    console.log(a/b)
}
div(10,5)

function power(a,b){
    console.log(a**b)
}
power(4,8)

function hello(param){
    console.log(param)
}
hello("hey")

function collectthings(x,...y){
    console.log(x)
    console.log(y)
}
collectthings(1,23456789)



//nested functions
function outer(){
    console.log("outer")
        function inner(){
            console.log("inner")
        }
        inner()
    }
outer()
