<html>

<body>

<form onsubmit="saveToLocalStorage(event)">

<label> Name</label>

<input type="text' name="username" required/>

<label> EmaiId</label>

<input type="email" name="emailId" required/>

<label> Phone Number</label>

input type="tel" name="phonenumber" />

<button> Submit </button>

</form>

</script>

function saveToLocalStorage(event){

event.preventDefault();

const name= event.target.username.value;

const.email=event.target.emailId.value;

const phonenumber = event.target.phonenumber.value;



const obj = {

name,

email,

phonenumber,

}

localStorage.setItem('userDetails', JSON.stringify(obj))

showNewUserOnScreen(obj);

}

function showNewUserOnScreen(user){

const parentNode = document.getElementById('listOfUsers');

const childHTML = '<li> ${user.name} -${user.email} </li>'

parentNode.innerHTML = parentNode.innerHTML + childHTML;

</script>

</body>

</html>