function login() {

    let email = document.getElementById("mail").value;
    let ps = document.getElementById("password").value;

    if(email === "" || ps === "") {
        alert("All fields are required");
        return;
    }

    if(email === "admin@gmail.com" && ps === "1234") {
        window.location.href = "user.html";
    }

    else {
        alert("Invalid email or password");
    }
}

function showPassword() {

    let pass = document.getElementById("password");

    if(pass.type === "password") {
        pass.type = "text";
    }

    else {
        pass.type = "password";
    }
}

function Reset() {
    document.getElementById("myForm").reset();
}
function booking(){
    window.location.href="booking.html"
}