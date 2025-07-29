//regular expression(regex) is a sequence of characters that defines a search pattern.

//first step: a pattern enclosed between slashes,as follows:
//ex:
//      /ab/


//step two:
//  \w+-matches one or more word characters (letters,digits,or underscores)
//
///
//
//
//




let number=9025530668
let value=/^[1-9]\{9}$/


//if(number === test)//(===executes checks for both value and data type too)

if(value.test(enter.toString()))
{ 
    console.log("correct")
}
else{
    console.log("wrong pattern")
}

const text="hellow";
const wodrs=text.match(/\b\w+\b/gi);
console.log(Words.length);



