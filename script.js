// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
//edit
var edit = document.getElementsByClassName("edit");
var i=0;
//Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var att = document.createAttribute("id"); 
  att.value = inputValue;  
  li.setAttributeNode(att);      
  var count = document.createAttribute("count");
  i++;
  count.value =  i ;                      
  li.setAttributeNode(count); 
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
 //CLOSE
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none"; 
  document.getElementById("myInput").value = "";
  document.getElementById("updateBtn").style.display = "none"; 
  document.getElementById("addBtn").style.display = "block"; 
    }
  }
  //EDIT
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u270E");
  span.className = "edit";
  span.appendChild(txt);
  li.appendChild(span);

 for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
        var div = this.parentElement;
  document.getElementById("myInput").value = div.getAttribute("id");
  document.getElementById("myInputHidden").value = div.getAttribute("count");
  var data = document.getElementById("myInput").value;
  document.getElementById("updateBtn").style.display = "block"; 
  document.getElementById("addBtn").style.display = "none";
    }
  }
}

function updateElement() {
  var i= document.getElementById("myInputHidden").value;
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var att = document.createAttribute("id");     
  att.value = inputValue;                      
  li.setAttributeNode(att); 
  var count = document.createAttribute("count");
  count.value =  i ;                      
  li.setAttributeNode(count);
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something!");
  } else {
    var item=document.getElementById("myUL");
    item.replaceChild(li,item.childNodes[i]);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("updateBtn").style.display = "none"; 
  document.getElementById("addBtn").style.display = "block"; 

 //CLOSE
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none"; 
  document.getElementById("myInput").value = "";
  document.getElementById("updateBtn").style.display = "none"; 
  document.getElementById("addBtn").style.display = "block"; 
    }
  }
 //EDIT
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u270E");
  span.className = "edit";
  span.appendChild(txt);
  li.appendChild(span);

 for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
        var div = this.parentElement;
        document.getElementById("myInput").value = div.getAttribute("id");
        document.getElementById("myInputHidden").value = div.getAttribute("count");
         var data = document.getElementById("myInput").value;
  document.getElementById("updateBtn").style.display = "block"; 
  document.getElementById("addBtn").style.display = "none";
    }
  }
}
