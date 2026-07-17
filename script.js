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
function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (username == "" || password == "" || confirmPassword == "") {
        alert("Please fill all the fields.");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Sign Up Successful");
    window.location = "login.html";
    return false;
}
function toggleTheme() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("theme-btn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}