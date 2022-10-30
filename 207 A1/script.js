function validateName()
{
	var name = document.getElementById("name").value;

	if(name == null || name.trim() == "")
	{
		document.getElementById("error").innerHTML = "*You need to fill in a name.";
	}
	else if (/^.{5,}$/.test(name) == false)
	{
		document.getElementById("error").innerHTML = "*This is not a name.";
	}
	else
	{
		document.getElementById("error").innerHTML = "";
	}
}

function validateEmail()
{
	var email = document.getElementById("email").value;

	if(email == null || email.trim() == "")
	{
		document.getElementById("error1").innerHTML = "*You need to fill in an email.";
	}
	else
	{
		document.getElementById("error1").innerHTML = "";
	}
}

function validatePhoneNumber()
{
	var phoneNumber = document.getElementById("phoneNumber").value;

	if(phoneNumber == null || phoneNumber.trim() == "")
	{
		document.getElementById("error2").innerHTML = "*You need to fill in a phone number.";
	}
	else if (/^[0-9]{8}$/.test(phoneNumber) == false)
	{
		document.getElementById("error2").innerHTML = "*This is not a phone number.";
	}
	else
	{
		document.getElementById("error2").innerHTML = "";
	}
}

function validateEnquiry()
{
	var enquiry = document.getElementById("enquiry").value;

	if(enquiry == null || enquiry.trim() == "")
	{
		document.getElementById("error3").innerHTML = "*You need to fill in an enquiry.";
	}
	else
	{
		document.getElementById("error3").innerHTML = "";
	}
}

window.onload=function()
{
   document.getElementById("btn").onclick=function() { 
   validation();
   buttonSubmit();
  }
}

function validation()
{
	validateEnquiry();
	validateEmail();
	validateName();
	validatePhoneNumber();
}

const monthName = ["January", "February", "March", "April", "May", "June",
  							"July", "August", "September", "October", "November", "December"];
const dayName = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];  

function getDate()
{
    var today = new Date();
    var date = today.getDate();

    if(date < 10)
    {
        date = "0" + date;
    }
    var month = monthName[today.getMonth()];
    var year = today.getFullYear();
    var day = dayName[today.getDay()];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var AMPM = "AM";

    if(hour > 12)
    {
        hour = hour - 12;
        AMPM = "PM";
    }
    
    if(minute < 10)
    {
        minute = "0" + minute;
    }
        return date+' '+month+' '+year+' '+ day+' '+hour+':'+minute +' '+AMPM;
}

function buttonSubmit()
{
  var d = new Date();

  var monthNames = ["January", "February", "March", "April", "May", "June",
  							"July", "August", "September", "October", "November", "December"];

  var date = document.getElementById("date").value;
  var name = document.getElementById("name").value;
  var error = document.getElementById("error");
  var error1 = document.getElementById("error1");
  var error2 = document.getElementById("error2");
  var error3 = document.getElementById("error3");

  if(error.innerHTML == "" && error1.innerHTML == "" && error2.innerHTML == ""
  	&& error3.innerHTML == "" && date != "" && name != "")
  {

  	alert ("You have successfully submitted your enquiry on " + getDate() + " !");

  	document.getElementById("name").value = "";
  	document.getElementById("email").value = "";
  	document.getElementById("phoneNumber").value = "";
  	document.getElementById("enquiry").value = "";
  }
}

function randomCoupon()
{
	var coupons = ["10%", "20%", "30%", "40%", "50%"];

	for (var i = coupons.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = coupons[i];
        coupons[i] = coupons[j];
        coupons[j] = temp;
    }

	do
	{
		var input = prompt ("Please choose number from 1 to 5");

	}while(input <= 0 || input >= 6)

	if(input > 0 && input < 6)
	{
		alert ("Congratulations! You get " + coupons[input-1] + " coupon! Enjoy your shopping!");
	}
}



function toggleTable() {

	document.getElementById("table2").classList.toggle("hidden");
  
  }