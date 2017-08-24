function change()
{
var x=document.getElementById("name").value;
	if(x!=''){
	document.getElementById("para").innerHTML="Hello "+x+" welcome to my website.";
	document.getElementById("name").disabled=true;
	document.getElementById("button").disabled=true;
	}
	else{
	alert("Please enter your name");
	}
}
function greetingmessage()
{
var d=new Date();
var day=new Array();
day[0]="Sunday";
day[1]="Monday";
day[2]="Tuesday";
day[3]="Wednesday";
day[4]="Thursday";
day[5]="Friday";
day[6]="Saturday";

var date=day[d.getDay()];

var time=d.getHours();
	if(time<12)
	{
	document.getElementById("greeting").innerHTML="Good Morning today is "+date+"!";
	}
	else if(time<18)
	{
	document.getElementById("greeting").innerHTML="Good Afternoon today is "+date+"!";
	}
	else
	{
	document.getElementById("greeting").innerHTML="Have a nice day, today is "+date+"!";
	document.getElementById("greeting").innerHTML="Have a nice day, today is "+date+"!";
	}
}
function changeimage()
{
document.getElementById("image").src="img2.jpg";
}
function changeback()
{
document.getElementById("image").src="linkedin.JPG";
}
