const user=document.getElementById("username");
const psswrd=document.getElementById("password");
const check=document.getElementById("checkbox");
const sbtbtn=document.getElementById("submit");
const existbtn=document.getElementById("existing");
function load(){
	if(localStorage.getItem("username")){
		existbtn.style.display="block";
	}
}
load();
existbtn.addEventListener("click",function(e){
	e.preventDefault();
	alert(`Logged in as ${localStorage.getItem("username")}`);
});
sbtbtn.addEventListener("click",(e)=>{
	e.preventDefault();
	alert(`Logged in as ${user.value}`);
	if(check.checked){
		localStorage.setItem("username",user.value);
		localStorage.setItem("password",psswrd.value);
	}
	else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");	
	}
	load();
});
