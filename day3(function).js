 //let  a=20
//function say()
//{
//console.log("within"+a);
//}
//say();
//function say()
//{
  //  let name="iam swakthika"
//console.log("hellow");
//console.log("within the function"+name);

//}
//say();



//function voting(age) {
    //if (age >= 18) {
        //console.log("Eligible");
    //} else {
       // console.log("Not eligible");
    //}
//}
  
//voting(10); 
//{
  //  if (age >= 18) {
    //    const iscloudy=true;
      //  var israining=true;
        ///console.log("Eligible");
        //console.log(iscloudy);

    //} 
      //  console.log(israining);
    //}

//voting(18);



function back(){
    console.log("message");
}
back();  



function call(callback){
console.log("message2");
setInterval(callback,1000);
}
call(back);

let count=0;
let Interval=()=>
{
    count++;
    console.log(count);
    if(count<5){
    Interval();
        
    }
}
Interval();