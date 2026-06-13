let age =20;
if(age>=18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}


// else if labber
let marks=79;
if(marks>=90){
    console.log("Grade: A");
}
else if(marks>=80){
    console.log("Grade: B");
}
else{
    console.log("Grade: C");
}   


//swtich statement
let day=4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day"); 
}
let option="on";
switch(option){
    case "on":
        console.log("The option is on.");
        break;
    case "off":
        console.log("The option is off.");
        break;
    default:
        console.log("Invalid option");
}



let val=[10,20,30,40,50];
for(let i=0;i<val.length;i++){
    console.log(val[i]);
    if(val[i]==40){
        break;
    }
}

for(i in val){
    console.log(val[i]);
}
let mobiles={name:"Samsung", model:"Galaxy M16 5G", color:"Blue"};
for(key in mobiles){
    console.log(key +": " + mobiles[key]);
}

let batteryPercentage=100;
console.time("Battery Drain Time");
while(batteryPercentage>0){
    console.log("Battery percentage: " + batteryPercentage + "%");
    batteryPercentage-=10;
}
console.timeEnd("Battery Drain Time");


let x =5;
do{
    console.log(x);
    x++;
}while(x>10);


let scores=[85, 92, 78, 90, 88,77];
for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
        continue;
    }
    else{
        console.log(scores[i]);
    }
}