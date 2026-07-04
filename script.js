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

    if (username == "admin" && password == "admin123") {
        alert("Welcome Admin");
    }
    else {
        alert("Login Successful");
    }

    return false;
}