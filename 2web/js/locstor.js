//закидываем в лс
 let i =0;
 let allmessage = document.getElementById("allmessage");
  helloButton.addEventListener("click", function(){
      i++;
    const user = {
        id: i,
        name: nameInput.value, 
        fame: FameInput.value,
        age: ageInput.value
      };
  

      localStorage.setItem(`user${i}`, JSON.stringify(user));
});


function almeg(){

    allmessage.innerHTML ="";
console.log(localStorage);

    for (let i = 0;  i< localStorage.length; i++){
        allmessage.innerHTML +="<br>"+localStorage.key(i) +"  "+localStorage.getItem(localStorage.key(i));
    }
 
}

function clls(){
    localStorage.clear();
}

// парсим для использования

 
//   JSON.parse(localStorage.getItem('user'));




//выводим в косоль
// console.log(localStorage.getItem('user'));




// // удаление из лс
// localStorage.removeItem('user');
