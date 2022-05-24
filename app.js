let list1 = document.getElementById("list-1");
let list2 = document.getElementById("list-2");
let items_1 = list1.getElementsByTagName("li");
let items_2 = list2.getElementsByTagName("li");
let new_list = document.getElementById("new");
let btnClick = document.getElementById("btnClick");
let btnRemove = document.getElementById("btnRemove");

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
    new_li.classList="list-group-item list"
    new_list.append(new_li);
    new_li.innerText = listarray[i];
  }
  
  console.log(listarray);

}


btnRemove.onclick=function(){
  new_list.innerHTML=""
}