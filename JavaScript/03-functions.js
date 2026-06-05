function add(a,b){
    
    return a+b;
    
}
console.log("hello world");
let result1 = add(10,20);
console.log(result1); // 30
let result2 = add(5,15);
console.log(result2); // 20
console.log(typeof add); // function

// Constructor Function
// A constructor function is used to create multiple objects with same structure.
function Person(name,age,role){
    this.name=name;
    this.age=age;
    this.role=role;
}

let person1 = new Person("pavankumar",24,"Dotnet Developer'");
console.log(typeof Person);
console.log(person1.name);
console.log(typeof person1); 
// gives the name of the constructor function which created the object. In this case, it will return "Person" because person1 is created using the Person constructor function.
console.log(person1.constructor.name); 

let person2 = new Person("suresh",30,"Java Developer");
console.log(person2.name);
console.log(typeof person2);
console.log(person2.constructor.name);

// instanceof operator is used to check if an object is an instance of a particular constructor function.
console.log(person1 instanceof add);
console.log(person2 instanceof Person);


let arr = [1, 2, 3];

console.log(typeof arr);
console.log(arr.constructor.name);