var questionA;
var score;
score = 0;
function froga(){
var min = 1;
var max = 1000;
var math1 = Math.floor(Math.random() * (max - min + 1)) + min;
var math2 = Math.floor(Math.random() * (max - min + 1)) + min;
document.getElementById("question").innerHTML = math1 + " " + "+" + " " + math2;
document.getElementById("answer").value = "";
document.getElementById("poeng").innerHTML = score;
questionA = math1 + math2;
 }
function fire() {
var svar = document.getElementById('answer').value;
      if (svar == questionA) {
        score = score + 1;
        froga ();
        
        
      } else {
        alert("Fel, försök igen")
        document.getElementById("answer").value = "";
      }
    }
  