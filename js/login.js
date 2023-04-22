const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let body = {
        "username": username,
        "password": password
    }
    fetch("http://localhost:5000/users/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then((response) => response.json()).then((data) => {
      if (data.status === "success"){
        window.location = "AOT.html";
      } else {
        alert(data.message)
      }
    })
});