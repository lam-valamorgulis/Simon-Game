// create animation of color
function animation(color) {
  var getColor = "#" + color;
  $(getColor).addClass("pressed");
  setTimeout(function () {
    $("#" + color).removeClass("pressed");}, 100);
};
// create music affect
function music(event, color) {
  var a1 = new Audio("sounds/" + color + ".mp3");
  a1.play();
}
// create random get color
function getColor() {
  var sq = ["red", "green", "blue", "yellow"];
  var sqItem = sq[Math.floor(Math.random() * sq.length)];
  return sqItem;
}
var computerColor = [];
function newNode() {
  newColor = getColor();
  computerColor.push(newColor);
  animation(newColor);
  music(event,newColor);
}
// create function to check if user click the right title
function check(userColor,computerColor,count) {
  if (computerColor[count] === userColor) {
    return true;
  } else { return false;}
}
// create function starover
function startOver() {
  level = 0;
  computerColor = [];
  started = false;
  count = 0;
}
// define variable
var started = false;
var level = 1;
var count = 0;
// control keypres
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    newNode();
    started = true;
  }
});
// control click event
$(".btn").click(function() {
  var userColor = $(this).attr("id");
  console.log("nguoi chon la " + userColor);
  music(event,userColor);
  animation(userColor);
  if (check(userColor,computerColor,count) === true ) {
    count++;
    if (count === computerColor.length) {
      count = 0;
      level++;
      setTimeout(function () {
        newNode();
      }, 1000);
      $("#level-title").text("Level " + level);
    }} else {
      music(event,"wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      console.log(computerColor);
      startOver()}});
