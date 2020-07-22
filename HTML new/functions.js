function letsAdd (a,b){
    return a+b;

}

console.log(letsAdd(10,25));

function greeting(){
    console.log("Hello!")
}

greeting();

let hi = function(name){
    alert(`Well this is annoying ${name}`);

}
hi("Ollie");

hello = (name,age) => "Hello" + name + "my age is " + age;

console.log(hello("Ollie", 23));


//turnery if

if(false){
    console.log("Good bye!")

}else{
    console.log("goodbye!")
}

let age1 = 16;
let status = (age1>=18)? "Adult":"Minor";

console.log(status);

class pet{
    constructor(petName){
        this._name = petName;
        this._eaten = true;

    }
    hungry(){
        if(!this._eaten){
            console.log(`${this._name} is hungry`)

        }else{
            console.log(`${this._name} has eaten!`)
        }
    }
    eating(){
        console.log(`${this._name} is eating`)
    }
    speak(){
        console.log(`${this._name} says hi!`)
    }
}

let newPuppy = new pet("Sir bark-alot");
newPuppy.eating();
newPuppy.speak();
newPuppy.hungry();

class Dog extends pet {
    constructor(name, tricks) {
      super(name); // Calls the super constructor and assigns the attribute.
      this._tricks = tricks;
    }
    play() {
      console.log(`${this._name} wants to show you his tricks!`);
    }
  
    tricks() {
      console.log(`${this._name} can do a ${this._tricks}`);
    }
    speak() {
      super.speak();
      console.log(`WOOOOOOOOOF`); // Overrides parent function call();
    }
  }
  
  let doggy = new Dog("Bark Wahlberg", "Backflip");
  doggy.hungry();
  doggy.speak();