let new_list = document.getElementById("new");
let btnClick = document.getElementById("btnClick");
let btnRemove = document.getElementById("btnRemove");
let input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnClick").click();
    event.currentTarget.value = "";
  }
});




btnClick.onclick = function () {
  let text = input.value;
  if (text != "") {
    let li = document.createElement("li");
    li.classList = "list-group-item list sorted";
    new_list.append(li);
    li.innerHTML = text + `<i onclick="myFunction()" id="icon" class="fa-solid fa-delete-left"></i>`;
  }
};

function myFunction(){
  let icon = document.getElementById("icon")
  icon.parentElement.remove();
}
btnRemove.onclick = function () {
  new_list.innerHTML = "";
};


