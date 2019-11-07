var printedData = "BLANK"

function listSave() {
  printedData = document.getElementById('sortable1').children;
  console.log(printedData);
}

function listLoad() {
  // let printedData = document.getElementById('sortable1').children;
  // console.log(printedData);
  var ul = document.getElementById('sortable1'); // sending point, id sortable 1
  var candidate = document.getElementById('candidate'); // sets candidate equal to the inputted name
  var li = document.createElement('li'); //sets variable li equal to li
  var desc = document.getElementById('desc') //sets variable desc equal to desc
  li.appendChild(document.createTextNode(printedData)); //creates the li using both candidate's value and desc's value, adding them together and putting them in parenthesis
  ul.appendChild(li); //adds the list item to the list
  console.log(printedData.HTMLCollection);
}
