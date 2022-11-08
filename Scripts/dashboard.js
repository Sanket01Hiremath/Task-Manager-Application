// Write code related to dashboard page here
let taskArr=JSON.parse(localStorage.getItem("task-list")) || [];
let priorityList=JSON.parse(localStorage.getItem("priority-list")) || [];
let arrLength=0;
createTable(taskArr);

function createTable(data){

    document.querySelector("tbody").innerHTML="";
    arrLength=data.length;
    document.querySelector("#task-count").innerText=arrLength;

    data.forEach(function(ele,index){
        let row=document.createElement("tr");
    
        let col1=document.createElement("td");
        col1.innerText=ele.name;
        let col2=document.createElement("td");
        col2.innerText=ele.description;
        let col3=document.createElement("td");
        col3.innerText=ele.startDate;
        let col4=document.createElement("td");
        col4.innerText=ele.endDate;
        let col5=document.createElement("td");
        col5.innerText=ele.priority;
        let col6=document.createElement("td");
        col6.innerText="Add";
        col6.addEventListener("click",function(e){
            priorityList.push(ele);
            e.target.parentNode.remove();
            data.splice(index,1);
            localStorage.setItem("priority-list",JSON.stringify(priorityList));
            localStorage.setItem("task-list",JSON.stringify(data));
        })
    
        row.append(col1,col2,col3,col4,col5,col6);
    
        document.querySelector("tbody").append(row);
    })
}


let filter=document.querySelector("#filter");
filter.addEventListener("change",newTable);

let filterTable=[];

function newTable(){
    if(filter.value==""){
        createTable(taskArr);
    }else{
        filterTable=taskArr.filter(function(ele){
            return ele.priority==filter.value
        })
        createTable(filterTable);
    }
}
