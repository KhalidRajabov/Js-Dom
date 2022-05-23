let btn = document.getElementById("btn");
btn.onclick = function () {
  let list1 = document.getElementById("list-1");
  let list2 = document.getElementById("list-2");
  let items_1 = list1.getElementsByTagName("li");
  let items_2 = list2.getElementsByTagName("li");
  let new_list = document.getElementById("new");
  
  

  for (let i = 0; i < items_1.length; i++) {
    let text1 = i.innerText;
    for (let j = 0; j < items_2.length; j++) {
        let text2 = j.innerText;
        if (text1 != text2) {
        let new_li = document.createElement("li");
        new_list.append(new_li);
        new_li.innerText = new_li;
        console.log("works");
      }
    }
  }
};
