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
`

/*
if(document.getElementsById("alert").innerHTML) {
    console.log("var")
} else {
    console.log("yok")
}*/

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
    ulDOM.appendChild(liDOM);
    task.value = "";
    
    let spanDOM = document.createElement("span");
    spanDOM.classList.add("xmarkspan");
    spanDOM.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    liDOM.appendChild(spanDOM);

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
        liDOM.remove();    
    }


    
  } else {
    alert.innerHTML = alertFunction(
        "Error!",
        "You should fill the form!",
        "danger"
    )
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
}

/*

let task = document.getElementById("task")
let addButton = document.getElementById("liveToastBtn")
let removeButton = document.getElementById("removeAll")
let ulDOM = document.querySelector("#list")

addButton.addEventListener("click", addElement );
removeButton.addEventListener("click", removeAll );

function addElement() {
    if (!document.querySelector("#list")){
        console.log('test')
/*
        let classUl = document.getElementsByClassName("ul")
        let createUl = document.createElement("ul")
        //createUl.setAttribute("id", "list");
        createUl.innerHTML = "test"
        classUl.append(createUl);*/
/*
    }
    let liDOM = document.createElement("li")
    liDOM.classList.add("li")
    liDOM.innerHTML = task.value
    ulDOM.append(liDOM)
    task.value = ""   
}

function removeAll() {
    let liRm = document.querySelectorAll(".li")
    let li = document.getElementById("list").getElementsByClassName("li")
    console.log(li)

    liRm.remove()
  

}
*/

//---------------------

/*
 for (i = 0; i = 2; i++) {
        liRm.remove()
    }
function newElement() {
    if (input.value != 0) {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = input.value
        ulDOM.append(liDOM)
        input.value = ""
    } else {
        console.log("Bilgi eksik")
    }  
 
}

function removeAll() {
    //removeEl = document.querySelector("#list>li")
    ulDOM.remove()
    /*console.log(removeEl.length)
    removeEl.remove();
    
}

*/

/*
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

//////// enter ile input kaydetme
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});

///////////////////// DATAMIZ

const myTasks = [
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 1",
    // },
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 2",
    // },
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 3",
    // },
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 4",
    // },
]; // bu datayi herhangi bir yerden de cekebilirdik.

/////////SİTE HER YENİLERNİRKEN ÇALIŞACAK
if (myTasks.length == 0) {
    document.querySelector("#taskList").classList.add("d-none");
}

myTasks.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name} <button class="removeButton">
        Delete
            </button>`;
    li.classList.add("listItem");
    li.id = `${element.id}`;
    document.querySelector("#taskList").append(li);
});

//////////// listTasks -ELEMANLARI YAZDIRAN FONKSİYON-
let listTasks = () => {
    if (myTasks.length > 0) {
        document.querySelector("#paragraph").classList.add("d-none");
        document.querySelector("#taskList").classList.remove("d-none");
    } else {
        document.querySelector("#paragraph").classList.remove("d-none");
        document.querySelector("#taskList").classList.add("d-none");
    }
    document.querySelector("#taskList").innerHTML = "";
    myTasks.forEach((element) => {
        const li = document.createElement("li");
        li.innerHTML = `${element.name} <button class="removeButton">
        Delete
            </button>`;
        li.id = `${element.id}`;
        li.classList.add("listItem");
        document.querySelector("#taskList").append(li);
    });
};

///////////////////////////////// taskList'e YENİ ELEMAN EKLEME
const addNewTask = () => {
    if (taskInput.value != 0) {
        let liDOM;
        liDOM = {
            id: `${Math.round(Math.random() * 100000)}`,
            name: `${taskInput.value}`,
        };
        myTasks.push(liDOM);
        document.querySelector("#snackbar").innerHTML =
            "You have added a to-do.";
        snackbar();
    } else {
        alert("Bir şey yazmalısın.");
    }
    listTasks();
    taskInput.value = "";
    console.log(myTasks);
};

/////////////////////////////////////

/////////////// TÜM GÖREVLERİ SİLME
let deleteItems = () => {
    myTasks.splice(0, myTasks.length);
    console.log(myTasks);
    listTasks();
    document.querySelector("#snackbar").innerHTML = "You removed all to-do's.";
    snackbar();
};

///////////////////////// SEÇİLEN GÖREVİ SİLME

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeButton")) {
        //remove current task

        const selectedItemId = e.target.parentNode.id;
        myTasks.map((item) => {
            if (item.id === selectedItemId) {
                let findIndex = myTasks.indexOf(item);
                myTasks.splice(findIndex, 1);
            }
        });

        console.log(myTasks);

        listTasks();
        document.querySelector("#snackbar").innerHTML = "You removed a to-do.";
        snackbar();
    }
});
/////////////////// li MAVİ YAPMA- (task tamamlandı)
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("listItem")) {
        //complete task
        e.target.classList.toggle("liFinished");
        document.querySelector("#snackbar").innerHTML =
            "You re-added the to-do.";
        snackbar();

        if (e.target.classList.contains("liFinished")) {
            document.querySelector("#snackbar").innerHTML =
                "Congratulations. You've complete the job.";
            snackbar();
        }
    }
});

////////// TOAST

function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

// function toast(text) {
//     <div
//         class="toast align-items-center"
//         role="alert"
//         aria-live="assertive"
//         aria-atomic="true"
//     >
//         <div class="d-flex">
//             <div class="toast-body">{text}</div>
//             <button
//                 type="button"
//                 class="btn-close me-2 m-auto"
//                 data-bs-dismiss="toast"
//                 aria-label="Close"
//             ></button>
//         </div>
//     </div>;
// }

*/
