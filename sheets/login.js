var name = "";
var pass = "";
 function inputChange(){
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
 }

var found = false;
    if(name == "Crisco849" && pass == "password" ){
       found = true;
        var win = window.open("mainpage.html","_blank");
        win.replace();
}
  
  if(found == false){
    alert("Username or Password is Incorrect.");
  }






