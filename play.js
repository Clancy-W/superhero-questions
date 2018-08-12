var questions = "";
var correct = "";
function questionChange() {
  if (questions.length == 0) {
    finish();
  }
  random = Math.floor(Math.random()*questions.length);
  $("#question").html(questions[random][0]);
  $("#one").html(questions[random][1]);
  $("#two").html(questions[random][2]);
  $("#three").html(questions[random][3]);
  $("#four").html(questions[random][4]);
  correct = questions[random][5];
  questions.splice(random, 1);
}

function checkCorrect(i) {
  $("#game").css("display", "none");
  $("#fin").css("display", "none");
  if (i == parseInt(correct)) {
    $("#correct").css("display", "block");
  } else {
    $("#incorrect").css("display", "block");
  }
}

function next() {
  $("#game").css("display", "block");
  $("#correct").css("display", "none");
  $("#incorrect").css("display", "none");
  $("#fin").css("display", "none");
  questionChange();
}

function finish() {
  $("#game").css("display", "none");
  $("#correct").css("display", "none");
  $("#incorrect").css("display", "none");
  $("#fin").css("display", "block");
}


$(document).ready(function(){
  $("#correct").css("display", "none");
  $("#incorrect").css("display", "none");
  $("#fin").css("display", "none");
  $.get("https://raw.githubusercontent.com/Clancy-W/superhero-questions/master/questions.csv",function(data){
    questions = data.slice(0, -2).split("\n");
    for (i=0; i < questions.length; i++) {
      questions[i] = questions[i].split(", ");
    }
    questionChange();
  });

});
