// Write code related to Home page here 
let form=document.querySelector("form");
form.addEventListener("submit",createData);

let valArr=JSON.parse(localStorage.getItem("task-list")) || [];
function createData(){
    event.preventDefault();

    let valObj={
        name:document.querySelector("#name").value,
        description:document.querySelector("#desc").value,
        startDate:document.querySelector("#start").value,
        endDate:document.querySelector("#end").value,
        priority:document.querySelector("#priority").value,
    }

    valArr.push(valObj);

    localStorage.setItem("task-list",JSON.stringify(valArr));
}