var el_down = document.getElementById("geeks");

function mdp(length) {
  var symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";
  var password = "";
  
  while (password.length < length) {
    password += Math.random().toString(36).slice(2);
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    password += Math.random().toString(36).toUpperCase().slice(2);
  }

  password = password.slice(0, length); 
  
  el_down.innerHTML = password;


 mdp(15); 

}

 

  