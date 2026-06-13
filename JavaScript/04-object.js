let person ={named:"john",age:30,city:"new york"}
console.log(person)


//grouping messages
console.group("fruits")
console.log("apple")
console.log("banana")
console.log("orange")
console.groupEnd()

//tracing
function a(){
    b();
}   
function b(){
    c();
}   
function c(){
    console.trace("trace");
}
a();



//assertion
let x=10;
console.assert(x>=18,"x is not greater than 18");
