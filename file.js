function validateform(event){
    event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let cpassword = document.getElementById("cpass").value;

let arr = [`${name}`,`${email}`,`${password}`,`${cpassword}`];
document.getElementById("para").innerText = arr;
}
