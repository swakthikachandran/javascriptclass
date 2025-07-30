let employees=[];
function addEmp(id,name,salary=true)
{
    employees.push({id,name,salary});
    console.log("employee added",employees);

}
addEmp(1,"swakthika",2000)
addEmp(2,"aakash",50000)
addEmp(3,"Augest",0)

//to update employeee

function updateEmp(id,newDetail){
const emp=employees.find(e=>e.id===id)
if(emp){
    Object.assign(emp,newDetail);
    console.log("updated",employees);
}else{
    console.log("employee not found")
}
}
updateEmp(3,{name:"joo"});


//deleting
function removeEmp(id)


{ 
    const index=employees.fileIndex((e)=> e.id === id);
    if(index !==-1){
        employees.splice(index,id)
        console.log("employee removed",employees);
    }
    else{
        console.log("employee not found");
    }
    }
    
    removeEmp(3)



    //salary calculate

    function totalSalary()
    {
        const total=employees.reduce((sum,emp)=>sum+emp.salary,0);
        console.log("total salary is ",total);

    }
totalSalary()
