class person{
    constructor(name, gender, age, interests, bio, greeting){
        this._name = name;
        this._gender = gender;
        this._age = age;
        this._interests = interests;
        this._bio = bio;
        this._greeting = greeting;
    }
    name1(){
        console.log(`The teacher is called ${this._name}`);
    

}
let person2 = new person("Sam", "Male", "44", "Football", "Hello", "Welcome");
person2.name1();
person2.gender();
person2.age();
person2.interests();
person2.greeting();
person2.bio();



class teacher extends person {
    constructor(name, gender, age) {
        super(name, gender, age);

    }
   

    
    age1(){
        console.log(`The teacher is ${this._age} years old`);

    }
    gender1(){
        console.log(`The teacher is ${this._gender}`);
    }

    
} 
let teacher1  = new teacher("Lucy", 23, "Female");
teacher1.name1();
teacher1.age1();
teacher1.gender1();


