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
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")

//listleri sayir
function listCounter(){
  p1.innerText ="Total lists currently:  " + allLists.length
}
listCounter();

//yeni list yaratmaq uchun button
btnClick.onclick = function () {
  new_list.innerHTML=""
  let newarr=[];
  let listarray=[];
  
  //1ci listdeki itemleri yeni newarr-arrayina atir
  for (let i = 0; i < items_1.length; i++) {
    let text1=items_1[i].childNodes[0].nodeValue;  
    newarr.push(text1);
  }

  //2ci listdeki itemleri yeni newarr-arrayina atir
  for (let i = 0; i < items_2.length; i++) {
    let text2=items_2[i].childNodes[0].nodeValue;  
    newarr.push(text2);
  }

  //newarr'daki duplicate olanlari silib butun itemleri yeni listarray'a atir
  listarray= newarr.filter((item,index) => newarr.indexOf(item) ===index);
  
  //listarray'daki her bir itemi, umumi itemin sayi qeder yeni bir listin ichine atir
  for (let i = 0; i < listarray.length; i++) {
    let new_li = document.createElement("li");

    //style olunmasi uchun bootstrap ve ozume aid class adi verirem
    new_li.classList="list-group-item list sorted"
    new_list.append(new_li);
    new_li.innerText = listarray[i];
  }
  

  //hazirki butun listlerin ve yeni duzelmish listlerin sayini yazir
  p1.innerText ="Total lists currently:  " +  allLists.length
  p2.innerText="New lists: " + sortedLists.length

}


//yeni yaranmish listi silir ve umumi listlerin sayini verir
btnRemove.onclick=function(){
  new_list.innerHTML=""
  p2.innerText ="Total lists currently:  " + allLists.length
  p1.innerText ="Total lists currently:  " +  allLists.length
}


