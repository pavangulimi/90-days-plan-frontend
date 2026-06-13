let a=10;
let b=2;

//arithmetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);   //quotient
console.log(a%b);   //remainder

//assignment operators
let c=5;
c+=3;
console.log(c);   //8

c-=2;
console.log(c);   //6
//comparison operators
console.log(a==b);  //false
console.log(a!=b);  //true
console.log(a>b);   //true
console.log(a<b);   //false
console.log(a>=b);  //true
console.log(a<=b);  //false     

//logical operators
let x=true;
let y=false;
console.log(x && y);
console.log(x || y);
console.log(!!!!!x);        

//type operators
console.log(typeof a);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);  //object (this is a known quirk in JavaScript)   
console.log(undefined == null);  //true (both represent absence of value)
console.log(undefined === null); //false (different types)

//bitwise operators
let m=5;  //binary: 0101
let n=3;  //binary: 0011
console.log(m & n);  //bitwise AND: 0101 & 0011 = 0001 (1 in decimal)
console.log(m | n);  //bitwise OR: 0101 | 0011 = 0111 (7 in decimal)
console.log(m ^ n);  //bitwise XOR: 0101 ^ 0011 = 0110 (6 in decimal)
console.log(~m);  //bitwise NOT: ~0101 = 1010 (in two's complement, this is -6 in decimal)
console.log(m << 1); //left shift: 0101 << 1 = 1010 (10 in decimal)
console.log(m >> 1); //right shift: 0101 >> 1 = 0010 (2 in decimal)

//ternary operator
let age=20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);  //Yes

//instanceof operator
let arr = [1, 2, 3];
console.log(arr instanceof Array);  //true
console.log(arr instanceof Object); //true (arrays are also objects in JavaScript)  


//uninary operators
let num=5;
console.log(-num);  //-5
console.log(+num);  //5 (unary plus doesn't change the value)
console.log(++num);
console.log(num);  //7 (num is now 7 after pre-increment)
console.log(num++); //7 (returns 7, then increments num to 8)
console.log(num);  //8 (num is now 8 after post-increment)
console.log(--num);
console.log(num);  //7 (num is now 7 after pre-decrement)
console.log(num--); //7 (returns 7, then decrements num to 6)
console.log(num);  //6 (num is now 6 after post-decrement)  
