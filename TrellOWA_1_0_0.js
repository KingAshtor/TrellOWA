function addItem() {
  var ul = document.getElementById('sortable1'); // sending point, id sortable 1
  var candidate = document.getElementById('candidate');// sets candidate equal to the inputted name
  var li = document.createElement('li'); //sets variable li equal to li
  var desc = document.getElementById('desc') //sets variable desc equal to desc
  li.setAttribute('id', desc.value); //sets an attribute of the list item to desc
  li.setAttribute('id', candidate.value); //sets an attribute of the list item to its name
  li.appendChild(document.createTextNode(candidate.value + ' ' + '(' + desc.value + ')')); //creates the li using both candidate's value and desc's value, adding them together and putting them in parenthesis
  ul.appendChild(li); //adds the list item to the list
}

function removeItem() {
  var ul = document.getElementById('sortable1'); //finds point, sortable 1 list
  var candidate = document.getElementById('candidate'); //sets the list area
  var item = document.getElementById(candidate.value); //sets the variable item equal to the value of the input
  item.parentNode.removeChild(item); //removes the list item from anywhere in any list (parentNode)
}
