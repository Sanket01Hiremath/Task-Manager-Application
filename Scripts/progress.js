// Write code for the Progress page here 
let priorityArr=JSON.parse(localStorage.getItem("priority-list")) || [];
let doneList=JSON.parse(localStorage.getItem("done-list")) || [];
priorityArr.forEach(function(ele,index){
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
        e.target.parentNode.remove();
        doneList.push(ele);
        priorityArr.splice(index,1);
        localStorage.setItem("done-list",JSON.stringify(doneList));
        localStorage.setItem("priority-list",JSON.stringify(priorityArr));
    })

    row.append(col1,col2,col3,col4,col5,col6);

    document.querySelector("tbody").append(row);
})
