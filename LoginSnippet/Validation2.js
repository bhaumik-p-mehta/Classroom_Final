$(document).ready(function () {
  function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

$('#captchaOperation').html([randomNumber(1,10), '+', randomNumber(1,10), '='].join(' '));

});


$(function() {

	$("#emailvalid").show();
	$("#result").show();
	$("#cvalue").show();

	var error_email = false;
	var error_password = false;
	var error_captcha = false;

	$("#email").focusout(function() {

		check_email();

	});

	$("#password").focusout(function() {

	check_password();

});

$("#captcha").focusout(function() {

check_captcha();

});

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

		if(pattern.test($("#email").val())) {
			$("#emailvalid").html("Valid email address");
			$("#emailvalid").show();
		} else {
			$("#emailvalid").html("Invalid email address");
			$("#emailvalid").show();
			error_email = true;
		}

	}


	function check_password() {

		var password_length = $("#password").val().length;

		if(password_length < 8) {
			$("#result").html("At least 8 characters");
			$("#result").show();
			error_password = true;
		} else {
			$("#result").html("Strong");
			$("#result").show();
		}

	}

	function check_captcha() {
		var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
		var str2 = $("#captcha").val();
		if(sum !=  str2) {
			$("#cvalue").html("Incorrect");
			$("#cvalue").show();
			error_captcha = true;
		} else {
			$("#cvalue").html("correct");
			$("#cvalue").show();
		}

	}

	$("#register").submit(function() {

		error_email = false;
		error_password = false;
		error_captcha = false;

		check_email();
		check_password();
		check_captcha();

		if(error_email == false && error_password == false && error_captcha == false) {
			return true;
		} else {
			return false;
		}

	});

});
