//Store
localStorage.setItem("myCat", "Tom");
//Print to the console
console.log(localStorage.getItem("myCat"));
//Output = Tom

//Remove an item
localStorage.removeItem("myCat");


// Save data to sessionStorage
sessionStorage.setItem("key","value");

//Get saved data from sessionStorage
let data = sessionStorage.getItem("key");
console.log(data);
// // Remove saved data from sessionStorage
// sessionStorage.removeItem("key");

// //Remove all saved data from sessionStorage
// sessionStorage.clear();