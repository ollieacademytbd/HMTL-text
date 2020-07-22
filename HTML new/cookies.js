// let name = prompt('Please enter your name.');
// let exdays = prompt("Enter a number");

// let date = new Date();
// date.setTime(date.getTime()+(exdays*24*60*1000));
// let expires = "expires=" + date.toUTCString();
// document.cookie =` name = ${name}; expires=${expires}`;

// function myCookies(){
//     alert(document.cookie);
// }
// document.cookie = "username=Donald Tramp, expires=Thu, 18 Dec 2013 12:00:00 UTC, path=/;";

// myCookies();


//Make a cookie
function makeCookie(cookieName, username, email, exdays){
    let d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + "Username: " + username +" & "+ "Email: " + email + ";" + expires + ";path=/";


}


makeCookie("myCookie", "vg", "vg@somemail.com", 2);
console.log(makeCookie);

const params = new URLSearchParams(window.location.search);
console.log(params);

for (const param of params){
    console.log(param);
}

function something(){
    console.log("Hi");

}
something();