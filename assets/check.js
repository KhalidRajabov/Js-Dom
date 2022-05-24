let new_list = document.getElementById("new");
let btnClick = document.getElementById("btnClick");
let btnRemove = document.getElementById("btnRemove");
let input = document.getElementById("input");
let btnRemoveSome = document.getElementById("btnRemoveSome")

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
    let icon = document.createElement("i")
     icon.classList="fa-solid fa-delete-left"
    let form = document.createElement("form")
    form.innerHTML= `<input id="check" class="my-box" type="checkbox">`
    li.classList = "list-group-item list sorted";
    new_list.append(li);
    li.innerHTML = text;
    form.append(icon)
    li.append(form)
    icon.onclick=function(){
      li.remove();
    }
    let checkbox = form.querySelector(`#check`)
    
    btnRemoveSome.onclick=function(){
      let list = new_list.getElementsByTagName("li")
      for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        if(checkbox.value!=""){
          checkbox.parentElement.parentElement.remove();
        }
      }
      
    }
  }
}
btnRemove.onclick = function () {
  new_list.innerHTML = "";
};

