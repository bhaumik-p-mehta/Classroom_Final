$(document).ready(function () {
  $('#password').keyup(function () {
      $('#result').html(checkStrength($('#password').val()))
  })

function checkStrength(password) {
//initial strength
var strength = 0

if (password.length < 6) {
  $('#result').removeClass()
  $('#result').addClass('short')
  return 'Password needs to be minimum 7 characters'
}

//length is ok, lets continue. //if length is 8 characters or more, increase strength value

if (password.length > 7) strength += 1

//if password contains both lower and uppercase characters, increase strength value

if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1

//if it has numbers and characters, increase strength value

if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1

//if it has one special character, increase strength value

if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

//if it has two special characters, increase strength value

if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) strength += 1

//if value is < 2

if(strength < 2) {
  $('#result').removeClass()
  $('#result').addClass('weak')
  return 'Weak'
} else if (strength == 2) {
  $('#result').removeClass()
  $('#result').addClass('good')
  return 'Good'
} else {
  $('#result').removeClass()
  $('#result').addClass('strong')
  return 'Strong';
}

}

const email =
        document.getElementById('email');
    email.addEventListener('blur', ()=>{
       let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
       let s = email.value;
       if(regex.test(s)){
          $("#emailvalid").removeClass();
          $("#emailvalid").addClass("Valid");
          $("#emailvalid").text("Valid Email ID");
        }
        else{
          $("#emailvalid").removeClass();
          $("#emailvalid").addClass("Invalid");
          $("#emailvalid").text("Enter a valid email id");
        }
    })

});

$(document).ready(function () {
  function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

$('#captchaOperation').html([randomNumber(1,10), '+', randomNumber(1,10), '='].join(' '));

});
