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
  item.parentNode.removeChild(item.value); //removes the list item from anywhere in any list (parentNode)
}

var d,h,m,s,animate; //declaring variables

function init(){ //makes function named init
    d=new Date(); //sets d equal to the date
    h=d.getHours(); // sets h equal to the current hours
    m=d.getMinutes(); //sets m equal to the current minutes
    s=d.getSeconds(); // sets s equal to the current seconds
    clock(); //runs clock()
};

function clock(){ //makes function named clock
    s++; //adds to seconds
    if(s==60){ //if seconds equals 60
        s=0; //sets seconds to 0
        m++; //adds 1 to minute
        if(m==60){ //if minutes equals 60
            m=0; //sets minutes to 0
            h++; //adds 1 to hours
            if(h==24){ //if hours equals 24
                h=0; //sets hours to 0
            }
        }
    }
    $('sec',s);
    $('min',m);
    $('hr',h);
    animate=setTimeout(clock,1000);
};
//Following code adds 0 in front of singular numbers
function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

window.onload=init;
