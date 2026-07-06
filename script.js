function bookTicket() {
    window.location = "booking.html";
}

function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Please enter username and password.");
        return false;
    }

    if (username == "admin" && password == "1234") {
        alert("Welcome, " + username);
        window.location = "user.html";
    }
    else {
        alert("Login Successful");
    }

    return false;
}
function search(){
var date = document.getElementById("date").value;
var from= document.getElementById("from").value;
var to = document.getElementById("to").value;
if(date=="" || from=="" || to==""){
    alert("Please fill all the fields");
  
}
    else if(from==to){
        alert("From and To locations cannot be same");
    }
    if (to=="Kathmandu" || from=="Pokhara" || to=="Pokhara" || from=="Kathmandu"){
        alert("Search Successful");
       window.location = "routes.html";
    }
}
function search1(){
alert("Please login first to search for routes");
}