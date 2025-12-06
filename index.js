const email = "admin@gmail.com";
const password = "1234";

document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();

    let emailInput = document.getElementById("email").value.trim();
    let passwordInput = document.getElementById("password").value.trim();

    if (emailInput === email && passwordInput === password) {

        localStorage.setItem("loggedInUser", emailInput);

        alert("Login Successful!");
        window.location.href = "home.html";

    } else {
        alert("Invalid Email or Password!");
    }
    if (e.key === "Enter") {
        document.getElementById("formLogin")
    }
});