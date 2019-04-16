var adcontents = JSON.parse(adcontents);
var arr = [
    { count: 0, name: "Weight Loss Products" },
    { count: 0, name: "Weight Loss Programs/Training" },
    { count: 0, name: "Supplement Products" },
    { count: 0, name: "Vaccines" },
    { count: 0, name: "Branded Alcohol" },
    { count: 0, name: "Selling/Promoting Illegal drugs" },
    { count: 0, name: "Selling Wrinkle Products" },
    { count: 0, name: "Selling Weapons & Accessory" },
    { count: 0, name: "Dating Site" },
    { count: 0, name: "Webinars, Seminars, Online Masterclass" },
    { count: 0, name: "Facebook Events" },
    { count: 0, name: "Selling Apartments/ Houses/ Properties" },
    { count: 0, name: "Houses/ Apartments/ Properties for rent" },
    { count: 0, name: "IG Pages" },
    { count: 0, name: "Messenger" },
    { count: 0, name: "WhatsApp" },
    { count: 0, name: "Error 403/404" },
    { count: 0, name: "Branded Shoes" },
    { count: 0, name: "Branded Apparels" },
    { count: 0, name: "Branded Multiple Products" },
    { count: 0, name: "Non Branded Shoes" },
    { count: 0, name: "Non Branded Apparels" },
    { count: 0, name: "Non Branded Jewelry" },
    { count: 0, name: "Non Branded Multiple Products" },
    { count: 0, name: "Entertainment Articles" },
    { count: 0, name: "News Articles" },
    { count: 0, name: "Quizzes" },
    { count: 0, name: "Slideshows" },
    { count: 0, name: "Quizzes with Slideshows" }
];

function refresh() {
  var select2 = document.getElementById("select2");
  var select3 = document.getElementById("select3");
  

  maketable(arr);

  for (var i = 0; i < arr.length; i++) {
    var add = document.createElement("option");
    var text = document.createTextNode(arr[i].name);
    add.appendChild(text);
    add.value = arr[i].name;
    var select1 = document.getElementById("select1");
    select1.appendChild(add);
  }

  for (var i = 0; i < arr.length; i++) {
    var add = document.createElement("option");
    var text = document.createTextNode(arr[i].name);
    add.appendChild(text);
    add.value = arr[i].name;
    var select1 = document.getElementById("select1");
    select2.appendChild(add);
  }

  for (var i = 0; i < arr.length; i++) {
    var add = document.createElement("option");
    var text = document.createTextNode(arr[i].name);
    add.appendChild(text);
    add.value = arr[i].name;
    var select1 = document.getElementById("select1");
    select3.appendChild(add);
  }

  document.getElementById("submit").addEventListener("click", function() {
    var selected1 = select1.value;
    var selected2 = select2.value;
    var selected3 = select3.value;
    var rows = document.getElementsByClassName("rows");

    for (var i = 0; i < arr.length; i++) {
      if (
        selected1 === arr[i].name ||
        selected2 === arr[i].name ||
        selected3 === arr[i].name
      ) {
        var str = rows[i].innerHTML.split(" | ");
        str[0]++;
        rows[i].innerHTML = str[0]+" | "+str[1];
        arr[i].count = parseInt(arr[i].count) + 1;
        console.log(arr[i].name +" "+ arr[i].count);


        for(var x = i; x < rows.length-1; x++){
            var firststr = rows[x].innerHTML.split(" | ");
            var first = firststr[0];
            var secondstr = rows[x+1].innerHTML.split(" | ");
            var second = secondstr[0];

            if (first > second) {
            tmp = rows[x].innerHTML;
            rows[x].innerHTML = rows[x+1].innerHTML;
            rows[x+1] = tmp;
        }
        }
      }
    }
    //maketable();
  });

  function maketable() {
    var table = document.getElementById("contents");
    var rows = document.getElementsByClassName("rows");

    /*var tmp = 0;
    for (var x = 0; x < rows.length; x++) {
      for (var i = 1; i < rows.length; i++) {
        
        var firststr = rows[x].innerHTML.split(" | ");
        var first = firststr[0];
        var secondstr = rows[i].innerHTML.split(" | ");
        var second = secondstr[0];
        
        if (first > second) {
            console.log(first+"|+|"+second);
            tmp = arr[x];
            arr[x] = arr[i];
            arr[i] = tmp;
            //console.log(arr[x]);
        }
      }
    }

    if (rows) {
      $(".rows").remove();
    }*/

    for (var i = 0; i < arr.length; i++) {
      var add = document.createElement("div");
      add.innerHTML = arr[i].count + " | " + arr[i].name;
      //add.setAttribute("id", "row" + i);
      add.setAttribute("class", "rows");
      table.appendChild(add);
    }
  }
}
window.addEventListener("load", refresh);
