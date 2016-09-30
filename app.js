var time = document.getElementById('time').value;
var rate = document.getElementById('rate').value;

var nextQuestion = function(){
  if(isNaN(document.getElementById("time").value)==true){
    alert("Enter the number of days you plan on growing your beard. (Just a number, please)");
  } else {
    document.getElementById('time').style.display = "none";
    document.getElementById('rate').style.display = "block";
    document.getElementById('next').style.display = "none";
    document.getElementById('submit').style.display = "block";
  }
};

var beardify = function(){
  var time = document.getElementById('time').value;
  var rate = document.getElementById('rate').value;
  var beardLength = rate*time;
  var mightiness = function(){
    if(beardLength <= 8){
      return "meh";
    } else if (beardLength > 8 && beardLength <= 20){
      return "not bad";
    } else if (beardLength > 20){
      return "mighty, indeed"
    }
  };
  var modal = document.getElementById('modal');
  var animateBox = document.getElementById('animation-wrapper')
  if(isNaN(document.getElementById("rate").value)==true){
    alert("Enter how many millimeters your beard grows each day. (Just a number, please)");
  } else {
    modal.style.left = "6vw";
    modal.style.width = "35vw";
    modal.style.height = "auto";
    modal.style.top = "5vh";
    document.getElementById('questions').style.display = "none";
    animateBox.style.display = "block";
    animateBox.style.animation = "fadeIn 1s";
    document.getElementById('lengthdisplay').innerHTML = "Your beard will be " + beardLength +"mm long. </br>This beard length is: " + mightiness() + ".";
    }
};
var reload = function(){
  location.reload();
};


//launch beard growth animation w/ day counter
//add Calculate Again/refresh page button that appears w/ delay
