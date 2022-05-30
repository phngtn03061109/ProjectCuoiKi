var emaill = document.forms['form']['email'];
var passwordd = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

emaill.addEventListener('textInput', email_Verify);
passwordd.addEventListener('textInput', pass_Verify);

function validateddd() {
	if (emaill.value.length < 8) {
		emaill.style.border = "1px solid red";
		email_error.style.display = "block";
		emaill.focus();
		return false;
	}
}

function email_Verify() {
	if (emaill.value.length >= 8) {
		emaill.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}

function pass_Verify() {
	if (passwordd.value.length >= 6) {
		passwordd.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if (email == "phungtn" && password == "conginuadau222") {
		alert("Đăng Nhập Thành Công");
		window.open('index.html'); // Redirecting to other page.
		return false;
	}
	else {
		attempt--;// Decrementing by one.
		alert("Bạn đã nhập sai email hoặc mật khẩu;");
		window.open('login.html');
		// Disabling fields after 3 attempts.
		if (attempt == 0) {
			document.getElementById("email").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}