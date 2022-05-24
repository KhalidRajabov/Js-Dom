let list1 = document.getElementById("list-1");
let list2 = document.getElementById("list-2");
let items_1 = list1.getElementsByTagName("li");
let items_2 = list2.getElementsByTagName("li");
let new_list = document.getElementById("new");
let btnClick = document.getElementById("btnClick");
let btnRemove = document.getElementById("btnRemove");
let allLists = document.getElementsByTagName("li")
let sortedLists = document.getElementsByClassName("sorted")
let area = document.getElementById("area")
btnClick.onclick = function () {
  new_list.innerHTML=""
  let newarr=[];
  let listarray=[];
  for (let i = 0; i < items_1.length; i++) {
    let text1=items_1[i].childNodes[0].nodeValue;  
    newarr.push(text1);
  }
  for (let i = 0; i < items_2.length; i++) {
    let text2=items_2[i].childNodes[0].nodeValue;  
    newarr.push(text2);
  }
  
  listarray= newarr.filter((item,index) => newarr.indexOf(item) ===index);
  
  for (let i = 0; i < listarray.length; i++) {
    let new_li = document.createElement("li");
    new_li.classList="list-group-item list sorted"
    new_list.append(new_li);
    new_li.innerText = listarray[i];
  }
  
  area.innerText ="Total lists currently:  " + sortedLists.length

}

btnRemove.onclick=function(){
  new_list.innerHTML=""
  area.innerText ="Total lists currently:  " + allLists.length
}

function listCounter(){
  area.innerText ="Total lists before click:  " + allLists.length
}
listCounter();