let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours);
let Day=currenttime.getDay();
console.log(Day);
let minutes=currenttime.getMinutes();
console.log(minutes);

class Exam{
    constructor(personname)
    {
        this.personname=personname;
        console.log(personname);
    }
}
let result=new Exam("swakthika")

class Bank{
    constructor(initialamount=0)
    {
        this._balance=initialamount;

    }
    
    set balance(amountdeposit){
        if(amountdeposit>0)
        {
            this.balance += amountdeposit;
            console.log(_balance);
        }
    }
}
let add=new Bank(10);
console.log(add);
add._balance=20;
console.log(add);



//import and export modele
//exports allowed you to make variables,function,or
//class available to other files
//import allows you to bring  those into another file


export function add(a,b)
{
    return a+b;

}
export const pi=3.14;