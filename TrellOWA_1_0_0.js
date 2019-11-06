function addItem() {
  var ul = document.getElementById("sortable1"); //finds sending point, id sortable 1
  var candidate = document.getElementById("candidate");//finds ID of an input, id candidate
  var li = document.createElement("li"); //creates an li in sortable 1's list
  li.setAttribute('id', candidate.value); //sets the id of the list item to its name
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li); //adds the list item
}

function removeItem() {
  var ul = document.getElementById("sortable1"); //finds point, sortable 1 list
  var candidate = document.getElementById("candidate"); //sets the list area
  var item = document.getElementById(candidate.value);
  ul.removeChild(item); //removes the list item
}
