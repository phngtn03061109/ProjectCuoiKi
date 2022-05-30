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
		alert("Đăng Kí Thành Công");
		window.open('login.html'); // Redirecting to other page.

}