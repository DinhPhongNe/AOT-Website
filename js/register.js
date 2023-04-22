const form = document.getElementById("form");
const api = "http://localhost:5000/users/v1/register"

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let body = {
        "username": username,
        "password": password,
        "email" : email
    }
    fetch("http://localhost:5000/users/v1/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then((response) => response.json()).then((data) => {
      alert(data.message)
    })
});