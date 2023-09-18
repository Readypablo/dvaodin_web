// Получить ссылки на элементы DOM

let nameInput = document.getElementById("nameInput"); 
let helloButton = document.getElementById("helloButton"); 
let output = document.getElementById("output");
let ageInput = document.getElementById("ageInput"); 
let FameInput  = document.getElementById("FameInput"); 







// Добавить обработчик события при клике на кнопку
helloButton.addEventListener("click", function(){
    let name = nameInput.value;
    let fame = FameInput.value;
    let age = ageInput.value;

  

 if (name === "" | fame === ""  | age === ""){
  output.style.color = "red";
    output.textContent = "Пожалуйста, введите ваше имя  и фамилию .";
 }
else {
  output.style.color = "white";
output.textContent = "Привет, " + name +" "+ fame+ " "+ age+ "!";
}
});









document.getElementById("nameInput").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("abcdefghijklmnopqrstuvwxyzйцукенгшщзхфывапролджэячсмитьбю ".indexOf(chr) < 0)
      return false;
};
document.getElementById("FameInput").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("abcdefghijklmnopqrstuvwxyzйцукенгшщзхфывапролджэячсмитьбю ".indexOf(chr) < 0)
      return false;
};








