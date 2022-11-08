// Write code related to Done page here
let doneArr=JSON.parse(localStorage.getItem("done-list")) || [];
doneArr.forEach(function(ele){
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

    row.append(col1,col2,col3,col4,col5);

    document.querySelector("tbody").append(row);
})
