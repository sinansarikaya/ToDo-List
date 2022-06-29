let addBtn = document.getElementById("addBtn"); //ADD BUTTON
let rmBtn = document.getElementById("rmAll"); //REMOVE BUTTON
let ulDiv = document.querySelector("div.ul"); //UL DIV
let task = document.getElementById("task"); //TEXT INPUT
let ulDOM = document.querySelector("#list"); //UL
const alert = document.getElementById("alert")

addBtn.addEventListener("click", addItem);
rmBtn.addEventListener("click", removeAll);

const alertFunction = (title, message, type) => `
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function close_alert() {
    let al = document.querySelector("#alert>div");
    al.classList.remove("show");
}



function addItem() {
  if (task.value != 0) {
    if (!document.querySelector("#list")) {
      ulDOM = document.createElement("ul");
      ulDOM.setAttribute("id", "list");
      ulDiv.append(ulDOM);
    }
    let liDOM = document.createElement("li");
    liDOM.classList.add("li");
    liDOM.innerHTML = task.value;
    setStorage(task.value);
    ulDOM.appendChild(liDOM);

    task.value = "";
    
    let spanDOM = document.createElement("span");
    spanDOM.classList.add("xmarkspan");
    spanDOM.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    liDOM.appendChild(spanDOM);

    alert.innerHTML = alertFunction(
        "Success!",
        "Item added successfully!",
        "success"
    )
    setTimeout("close_alert()", 1500);

    liDOM.addEventListener("click", checkFunc);
    function checkFunc(){
        if(liDOM.classList.contains('checked')){
            liDOM.classList.remove("checked")
        } else {
            liDOM.classList.add("checked")
        } 
    }

    spanDOM.addEventListener("click", removeItem);
    
    function removeItem() {
        alert.innerHTML = alertFunction(
            "Deleted!",
            "Item has deleted",
            "danger"
        )
        setTimeout("close_alert()", 1500);
        liDOM.remove();    
    }
    
  } else {
    alert.innerHTML = alertFunction(
        "Error!",
        "You should fill the form!",
        "danger"
    )
    setTimeout("close_alert()", 1500);
  }

}
function removeAll() {
  let ulDOM = document.querySelector("#list");
  if (!ulDOM) {
    alert.innerHTML = alertFunction(
        "Error!",
        "There is no item to delete!",
        "danger"
    )
  } else {
    alert.innerHTML = alertFunction(
        "Deleted!",
        "Item has deleted",
        "danger"
    )
    ulDOM.remove();
  }
  setTimeout("close_alert()", 1500);
}
// LOCALSTORAGE
//GET LOCALSTORAGE
function getStorage() {
    let toDo = JSON.parse(localStorage.getItem("todo"));
    return toDo;
}
//SET LOCALSTORAGE
function setStorage(value) {
    let str = JSON.parse(localStorage.getItem("todo"));
    let toDos;
    if (str == null) {
        toDos = [];
    } else {
        toDos = getStorage();
    }
    toDos.push(value);
    localStorage.setItem("todo", JSON.stringify(toDos));
}
//DELETE LOCALSTORAGE
function deleteStorage(value) {
    
}