addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
      helloButton.click();
    }
  });
  
  var inputs = document.querySelector(':input').keypress(function(e){ 
  
    if (e.which == 	9) {
       e.preventDefault();
       var nextInput = inputs.get(inputs.index(this) + 1);
       if (nextInput) {
          nextInput.focus();
       }
    }
});