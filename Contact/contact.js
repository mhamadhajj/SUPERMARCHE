//name check//
let nameinput = document.getElementById("name");
nameinput.addEventListener("input",function(){
	nameinput.style.backgroundColor="yellow";
});

let nameblur = document.getElementById("name");
nameblur.addEventListener("blur",function(){
	let letters=/^[a-zA-Z]+ [a-zA-Z]+$/;
	if(nameblur.value.match(letters))
	{return nameblur.style.backgroundColor="#4CAF50";}
else
{ alert("Enter your Full Name")
nameblur.style.backgroundColor="red"; }
});

let namefocus = document.getElementById("name");
namefocus.addEventListener("focus",function(){
	namefocus.style.backgroundColor="yellow";
});


//mail check//
let mailfocus=document.getElementById("MAIL");
mailfocus.addEventListener("focus",function(){
	mailfocus.style.backgroundColor="yellow";
});

let mailblur = document.getElementById("MAIL");
mailblur.addEventListener("blur",function(){
	let regex=/^(.+)@(.+)$/;
	if(mailblur.value.match(regex))
	{return mailblur.style.backgroundColor="#4CAF50";}
else
{ alert("it's not a mail")
mailblur.style.backgroundColor="red";}
});


let mailinput=document.getElementById("MAIL");
mailinput.addEventListener("input",function(){
 mailinput.style.backgroundColor="#yellow";
});

//comment check//
let commentfocus=document.getElementById("comment");
commentfocus.addEventListener("focus",function(){
	commentfocus.style.backgroundColor="yellow";
});

let commentblur = document.getElementById("comment");
commentblur.addEventListener("blur",function(){
	commentblur.style.backgroundColor="#4CAF50";
});

let commentinput=document.getElementById("comment");
commentinput.addEventListener("input",function(){
 commentinput.style.backgroundColor="#yellow";
});



