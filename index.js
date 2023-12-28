let username = "";
let password = "";

document.getElementById("username").addEventListener("input", function () {
  handleUsernameChange(this.value);
});

function handleUsernameChange(value) {
  username = value;
  // console.log(username);
}

document.getElementById("password").addEventListener("input", function () {
  handlePasswordChange(this.value);
});

function handlePasswordChange(value) {
  password = value;
  // console.log(password);
}

function handleSubmit() {
  event.preventDefault();

  if (username.trim() != "" && password.trim() != "") {
    if (password.length >= 6) {
      alert("Login Successfully");
      window.location.href = "main.html";
    } else {
      alert("Password should be greater than 6 digit");
    }
  } else {
    alert("Please enter username and password");
  }
}
