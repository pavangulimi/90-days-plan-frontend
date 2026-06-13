let names=["Alice", "Bob", "Charlie", "David", "Eve"];
// Adding an element to the end of the array
names.push("pavan");
console.log(names);
// Removing the last element from the array
names.pop();
console.log(names);
// Adding an element to the beginning of the array
names.unshift("pavan");
console.log(names);

// Removing the first element from the array
names.shift();
console.log(names);

// Finding the index of an element
let index = names.indexOf("Bob");
console.log(index);  //1


// slice method
console.log(names.slice(1,3));  //slice does not modify the original array 3 is not included


console.log(names);  //original array is unchanged

//splice method
names.splice(0,3,"pavan");  //start index, number of elements to remove, element to add
console.log(names);  //splice modifies the original array

//join method
let joinedNames=names.join(",");
console.log(joinedNames);  //Alice Bob Charlie David Eve
console.log(typeof joinedNames);  //string


//forEach Method
names.forEach((name) =>{
    console.log(name);
});


//reduce method
let numbers=[1,2,3,4,5];
let sum=numbers.reduce((accumulator,currentValue) =>{
    return accumulator + currentValue;
    });

    
console.log(sum);  //15

let arr = [];

let total = arr.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);
