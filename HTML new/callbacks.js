function greeting(name,age) {
    //Creates an alert(pop-up box) which says hello and appends the value of name.
    alert('Hello ' + name + '. Your age is ' + age);
  }
  
  function processUserInput(callback) {
  //A simple user input box appears on the browser that take a value and assigns it to name
    var name = prompt('Please enter your name.');
    let age = prompt('What is your age?');
    // we then pass the `name` variable to the callback function which will be passed to greeting.
    callback(name,age);
  }
  //Call the function `processUserInput( )` and in the brackets we pass the function `greeting`.
  processUserInput(greeting);