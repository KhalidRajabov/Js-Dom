let btn = document.getElementById("btn");
btn.onclick = function () {
  let list1 = document.getElementById("list-1");
  let list2 = document.getElementById("list-2");
  let items_1 = list1.getElementsByTagName("li");
  let items_2 = list2.getElementsByTagName("li");
  let new_list = document.getElementById("new");

  console.log(list1);
  for (let i = 0; i < items_1.length; i++) {
    for (let j = 0; j < items_2.length; j++) {
      if (items_1 != items_2) {
        console.log(items_1.text, items_2);
        let new_li = document.createElement("li");
        new_list.append(new_li);
        new_li.innerText = "";
        console.log("works");
      }
    }
  }
};
