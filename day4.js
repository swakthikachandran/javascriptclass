//an array is a data structure that can hold multiple values in a single variable. These values can be of any type: numbers, strings, objects, even other arrays.

let number=[1,2,"three",true];

let names=new Array("john","james");
console.log(number[2]);
console.log(names.length);

//filter it filter the values of argumrnts

let result=number.filter(number=>number[1]);
console.log(result);

//slice that elements based on the index variable
//splice that returns value to updated one

let A=[1,2,3,4,5];
A.splice(1,3,"swakthika");
console.log(A)

//object
let details={
    myname:"swakthika",
    totalmark:"90",
    subject:{
        dbms:90,
        java:90

   },
   avg:function()
   {
    let sum=this.subject.dbms+this.subject.java;
return sum;   
}
}
console.log(details.totalmark)
console.log(details["myname"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());


//object destructuring is a syntax in javascript that allows you to extract values from objects

const person=
{
name1:"swakthka",
age:19,
city:"udhagamandalam"
};

//destructuring

const{name1,age,city}=person;
console.log(name1);
console.log(age);
console.log(city);


//array destructuring
const person1=["aakash",23,"coonoor"];
const[name2,age2,place]=person1;
console.log(name2+" "+age2+" "+place);


