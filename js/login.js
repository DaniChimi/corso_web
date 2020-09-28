function logSubmit(event) {
    var userName = document.getElementById("inputUserName").value;
    var password = document.getElementById("inputPassword").value;

    if ( password == "admin" && userName == "admin") {
        console.log(userName);
        window.location.href = "menu/menu.html";

    }

    else {
        alert ("Wrong UserName or Psw");

    }
    //location.replace("http://www.yoururl.com");
    event.preventDefault();
}

loginForm = document.getElementById("loginForm")
loginForm.addEventListener('submit', logSubmit);