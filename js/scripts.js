//Back-end logic
var pingPong = function(userNumber) {

var startNumber = 1;
var endNumber = userNumber;

var countList = [];

  for (var i = startNumber; i <= endNumber; i++) {

    if(i%3 !== 0 && i%5 !==0 && i%15 !== 0) {
      countList.push(i);
    } else if (i%15 === 0) {
      countList.push("ping-pong")
    } else if (i%3 === 0){
      countList.push("ping");
    } else if (i%5 === 0) {
      countList.push("pong")
    }
    // if (i%3) {
    //   i = countList.push("ping");
    // } else {
    // countList.push(i);
    // }
  }
  return countList;
}



//Front-end logic
$(document).ready(function() {
  $("#number-submit").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#user-number").val());

      // alert(userNumber);
    var numberOutput = pingPong(userNumber);

    $("#ping-pong-results").text(numberOutput);
  });
});
