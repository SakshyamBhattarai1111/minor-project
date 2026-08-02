function bookTicket() {
    window.location = "booking.html";
}

function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        showSnackbar("⚠️ Please enter username and password.");
        return false;
    }

    if (username == "admin" && password == "1234") {

        showSnackbar("✅ Welcome, " + username);

        setTimeout(function () {
            window.location = "user.html";
        }, 2000);

    } else {

        showSnackbar("✅ Login Successful");

        setTimeout(function () {
            window.location = "user.html";
        }, 2000);
    }

    return false;
}

function search() {

    var date = document.getElementById("date").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    if (date == "" || from == "" || to == "") {
        showSnackbar("⚠️ Please fill all the fields.");
        return false;
    }

    if (from == to) {
        showSnackbar("⚠️ From and To locations cannot be the same.");
        return false;
    }

    showSnackbar("🔍 Search Successful!");

    setTimeout(function () {
        window.location = "routes.html";
    }, 2000);

    return false;
}

function search1() {
    showSnackbar("🔒 Please login first to search for routes.");
    return false;
}

function signUp() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (username == "" || password == "" || confirmPassword == "") {
        showSnackbar("⚠️ Please fill all the fields.");
        return false;
    }

    if (password != confirmPassword) {
        showSnackbar("❌ Passwords do not match.");
        return false;
    }

    showSnackbar("✅ Account Created Successfully!");

    setTimeout(function () {
        window.location = "login.html";
    }, 2000);

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

function showSnackbar(message) {

    let x = document.getElementById("snackbar");

    x.innerHTML = message;
    x.classList.add("show");

    setTimeout(function () {
        x.classList.remove("show");
    }, 3000);
}

window.onload = function () {

    const dateInput = document.getElementById("date");

    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    }

};
function filterRoutes() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    let routes = document.querySelectorAll(".route-card");
    let found = false;

    routes.forEach(function(route){

        let city = route.querySelector(".route-city");

        let routeFrom = city.dataset.from;
        let routeTo = city.dataset.to;

        if(routeFrom === from && routeTo === to){
            route.style.display = "block";
            found = true;
        }else{
            route.style.display = "none";
        }

    });

    if(!found){
        showSnackbar("❌ No routes found!");
    }

    return false;
}
function booking78() {

    showSnackbar("✅ Booking Confirmed!");

    setTimeout(function () {
        window.location.href = "confirmation.html";
    }, 3000);

    return false;
}

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}
function contactForm() {

    showSnackbar("✅ Message Sent Successfully!");

    setTimeout(function () {
        window.location.href = "index.html";
    }, 2500);
    

    return false;
}
