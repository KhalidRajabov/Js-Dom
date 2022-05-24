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
  let new_li = document.createElement("li");
  new_li.classList = "list-group-item list sorted";
  new_list.append(new_li);
  new_li.innerHTML = text + `<i id="icon" class="fa-solid fa-delete-left"></i>`;
  
  
  let icon = document.getElementById("icon")
    icon.onclick=function(){
      icon.parentElement.remove();
     }  
  
  

};
btnRemove.onclick=function(){
  new_list.innerHTML=""
}

