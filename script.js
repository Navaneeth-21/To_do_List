let addButton = document.getElementById("btn");
let inputText = document.getElementById("inputField");
// let tasks_list = document.getElementsByClassName("tasker-body")[0];
let tasks_list_ul = document.getElementById("tasks")
let icon_btn = document.getElementsByClassName("btn1")[0];
addButton.addEventListener("click", function () {
    Array = []
    let items;
    items = document.createElement("li");
    items.innerText = inputText.value;
    tasks_list_ul.append(items);
    // Array.append(items);
    for(let i=0;i<tasks_list_ul.length;i++){
        let trash_btn = <i class="fa-solid fa-trash-can"></i>
        tasks_list_ul.appendChild(trash_btn);
    }
    inputText.value = " ";
    // var delbtn = document.createElement("Button");
    // delbtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    // listItems.appendChild(items);
    // listItems.classList.add("btn1");
    icon_btn.addEventListener("click", function () {
        tasks_list_ul.remove();
    })
})