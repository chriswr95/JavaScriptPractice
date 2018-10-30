/*
 * Implement all your JavaScript in this file!
 */
var memory = undefined;
var operation = undefined;
var displayNeedsWipe = false;

$(".button").click(function(){
  if(/\d/.test($(this).val())){
    console.log($(this).val());
    if(displayNeedsWipe){
      clearDisplay();
      displayNeedsWipe = false;
    }
    $("#display").val($("#display").val() + $(this).val());
  }
});

$("#clearButton").click(function(){
  clearDisplay();
  memory = undefined;
  operation = undefined;
});

$(".action").click(function(){
  console.log($(this).html());
  if(!$("#display").val()) return;
  if(!memory){
    moveDisplayToMemory();
    // operation = add;

  } else { //there is something in memory
    if(operation && memory){
      memory = operation(memory, $("#display").val());
    }
    // operation = add;
  }
  setOperation($(this).html());
  clearDisplay();
});

$("#equalsButton").click(function(){
  if(operation && memory && $("#display").val() ){
      $("#display").val(operation(memory, $("#display").val()));
  } else if(memory){
    $("#display").val(memory);
  }
  memory = undefined;
  operation = undefined;
  displayNeedsWipe = true;
});

var add = function(a, b){
  return (parseInt(a) + parseInt(b)).toString();
};

var subtract = function(a, b){
  return (parseInt(a) - parseInt(b)).toString();
}

var multiply = function(a, b){
  return (parseInt(a) * parseInt(b)).toString();
};

var divide = function(a, b){
  return (parseInt(a) / parseInt(b)).toString();
}

var setOperation = function(op){
  console.log("setting operation..");
  console.log("op = " + op);
  if(op == "+") operation = add;
  else if(op == "-") operation = subtract;
  else if(op == "*") operation = multiply;
  else operation = divide;
}

var moveDisplayToMemory = function(){
  memory = $("#display").val();
};

var clearDisplay = function(){
  $("#display").val('');
};
