var value1 = document.querySelector(".value11");
var click = document.querySelector("button");
var List = document.querySelector(".List1");
click.onclick = create;
//btn.onclick = create;
function create(arg) {
    if (value1.value != "") {
        arg.preventDefault();
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");
        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML = value1.value;
        newDiv.appendChild(newLi);
        var compbtn = document.createElement("button");
        compbtn.classList.add("complete");
        compbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(compbtn);
        var delbtn = document.createElement("button");
        delbtn.classList.add("delete");
        delbtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(delbtn);
        List.appendChild(newDiv);
        value1.value = "";
    }
    else {
        alert("Input Field can't be blank");
    }
}
List.onclick = deletecheck;
function deletecheck(e) {
    var item = e.target;
    console.log(item);
    if (item.classList[0] == "delete") {
        var parent = item.parentElement;
        console.log(parent);
        parent.remove();
    }
    if (item.classList[0] == "complete") {
        var parent = item.parentElement;
        parent.classList.toggle("completed");
    }
}
