function fizzBuzz() {
  var output = "";
  var inputVal = $("input").val();
  if (inputVal % 3 === 0) {
    output = "Fizz 3";
  } else if (inputVal % 5 === 0) {
    output = "Buzz 5";
  } else if (inputVal % 5 === 0 && inputVal % 3 === 0) {
    output = "FizzBuzz ";
  } else {
    output = "Not a valid value";
  }
  $("#numberz").html(output);
}

$(document).ready(function() {
  $("button").click(function() {
    if ($("input").val().length == 0) {
      $("#numberz").html("Enter the number to the input");
    } else {
      fizzBuzz();
    }
  });
});
