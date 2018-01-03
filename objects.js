//zadanie z wykladowca
/*
String.prototype.upperLower = function(){
  var resultString = "";
  for(var i=0;i<this.length;i++){
    if (i%2 !==0){
      resultString += this[i].toUpperCase();
    }else{
      resultString += this[i].toLowerCase();
    }
  }

  return resultString;
}

var funnyText = "Java script jest super.".upperLower();
console.log(funnyText);

*/

//zadanie1
var book = {
    title: "Nudna ksiazka o niczym",
    author: "Gali Nudziarz",
    numberOfPages: 100
};
console.log(book.title, book.author, book.numberOfPages);

//books:

function Book(title, author, numberOfPages, volumes) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.volumes = volumes;
    this.showInfo = function() {
        console.log("Title: ", this.title);
        console.log("Author: ", this.author);
        console.log("Number of pages: ", this.numberOfPages);
        console.log("Volumes: ", this.volumes);
    }

}

var book1 = new Book("Gra o Tron", "George R.R. Martin", 800, 6);
var book2 = new Book("Nudna książka o niczym", "Gall Nudziarz", 300, 1);

book1.showInfo();
book2.showInfo();

console.log("*******zadanie2***********");
//zadanie2
var person = {
    name: "Anna",
    age: 22,
    sayHello: function() {
        console.log("hello");
    }
};

console.log(person.name);
console.log(person.age);
person.sayHello();


console.log("*******zadanie3***********");
//zadanie3
var train = {};
console.log(train instanceof Object); //true


console.log("*******zadanie4***********");
//zadanie4

var car = {
    brand: 'Mustang',
    color: 'red',
    numberOfKilometers: 0,
    drive: function(km) {
        return this.numberOfKilometers = this.numberOfKilometers + km;
    },
    printCarInfo: function() {
        return this.brand + ' ' + this.color + ' ' + this.numberOfKilometers;
    }
};

console.log(car.printCarInfo()); //=> "Czarny Mercedes, 150km"
car.drive(20);
console.log(car.printCarInfo()); //=> "Czerny mercedes, 170km"

console.log("*******zadanie5***********");
//zadanie5

car.dates = ["20.03.2010", "14.07.2013", "03.12.2016", "01.01.2017"];
console.log(car.dates);

car.registration = function() {
    return this.dates.push("21.09.2018");
}
car.registration();
console.log(car.dates);

car.printDates = function() {
    for (var i = 0; i < this.dates.length; i++) {
        console.log(this.dates[i]);
    }
}
car.printDates();

console.log("*******zadanie6***********");
//zadanie6

bird = {
    type: "wrobel",
    name: "Elemelek",
    getType: function() {
        console.log(this.type);
    }
};

bird.getType();
console.log(bird instanceof Object);


console.log("*******zadanie7***********");
//zadanie7
var myString = "Tekst";
console.log(myString);
console.log(myString instanceof Number);
console.log(myString instanceof Boolean);
console.log(myString instanceof String);
console.log(myString instanceof Array);
console.log(myString instanceof Date);
console.log(myString instanceof RegExp);
console.log(myString instanceof Object);
console.log(myString instanceof Function);
console.log(myString instanceof Error);

var myNumber = 123456;
console.log(myNumber);
console.log(myNumber instanceof Number);
console.log(myNumber instanceof Boolean);
console.log(myNumber instanceof String);
console.log(myNumber instanceof Array);
console.log(myNumber instanceof Date);
console.log(myNumber instanceof RegExp);
console.log(myNumber instanceof Object);
console.log(myNumber instanceof Function);
console.log(myNumber instanceof Error);
//console.log(myNumber instanceof Math);

//myString i myNumber nie sa instancja niczego, nie sa obiektami tylko typami prostymi


console.log("*******zadanie8***********");
//zadanie8

var Robot = function(name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
    if (this.isFunctional === true) { // dodalismy "this."
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function(newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname; // dodalismy "this."
};

Robot.prototype.fixIt = function() {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

//zaczynamy ;)
var robot1 = new Robot("Chappie");
//console.log(robot1);
robot1.sayHi("Human");
robot1.changeName("RoboCop");
console.log(robot1.name);
robot1.fixIt();
//psujemy robota.... hehehehehe.....
robot1.isFunctional = false;
robot1.sayHi("Human");
robot1.fixIt(); // naprawiamy robota :)


/*
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};

/*
//OBIEKT KONSTRUKTOR THIS

// Kociaki;p

var cat = {
  name: "Filemon",
  age: 2,
  friends: ["Mruczek", "Reksio"],
  isSleepy: true,
   saySomething: function() {
        console.log("Jestem:", this);
    },
  sayYourName: function() {
      console.log("Jestem:", this.name);
  }
}
cat.saySomething();
cat.sayYourName();

var cat2 = {
  name: "Janusz",
  age: 2,
  friends: ["Mruczek", "Reksio"],
  isSleepy: true,
  saySomething: function() {
      console.log("Jestem:",this);
    },
  sayYourName: function() {
        console.log("Jestem:",name);
          }
}
console.log(cat2.sayYourName());




//auteczka

var Car = function(givenType, givenHP, givenColor) {
  this.type = givenType;
  this.hp = givenHP;
  this.color = givenColor;
  this.getInfo = function() {
      console.log("Metryczka: ", this.type, this.hp, this.color);
  }
};

var fiat = new Car("fiat", 125, "yellow");
var fiat2 = new Car("fiat2", 125, "yellow2");
fiat.getInfo();

*/

//PROTOTYPY----------------------------------------------

// przykład slide 36 - bez prototypu
/*function Animal(nameAnimal, roarAnimal) {
  this.name = nameAnimal;
  this.getVoice = function() {
      console.log(roarAnimal);
  }
}

var dog = new Animal("Reksio", "hau hau");
dog.getVoice();
var cat = new Animal("Mruczek", "miał miał");
cat.getVoice();
var mouse = new Animal("Miki", "pi pi pi");
mouse.getVoice();
var fox = new Animal("Chytrusek", "dawaj kase!");
fox.getVoice();

*/
/*
console.log("***z prototypem*************");

function Animal(nameAnimal, roarAnimal) {
  this.name = nameAnimal;
  this.roar = roarAnimal;

}
Animal.prototype.getVoice = function() {
  console.log(this.roar);
}


var dog = new Animal("Reksio", "hau hau");
dog.getVoice();
var cat = new Animal("Mruczek", "miał miał");
cat.getVoice();
var mouse = new Animal("Miki", "pi pi pi");
mouse.getVoice();
var fox = new Animal("Chytrusek", "dawaj kase!");
fox.getVoice();
*/


// nadpisywanie metod: - kod bez prototypu
/*
function Human(giveName, givenAge) {
  this.name = giveName;
  this.age = givenAge;
  this.getAge = function() {
      console.log(this.age);
  }
}

var male = new Human("Janusz", 29);
male.getAge();

var female = new Human("Ania", 31);
female.getAge(); //nadpisujemy Ani wiek i wiek sie zmienia na nadpisany
female.getAge = function() {
  console.log("18");
}
female.getAge();


// nadpisywanie metod: - kod Z prototypem
function Human(giveName, givenAge) {
  this.name = giveName;
  this.age = givenAge;
}

Human.prototype.getAge = function() {
  console.log(this.age);
}

var male = new Human("Janusz", 29);
//male.getAge();

var female = new Human("Ania", 31);
//female.getAge(); //nadal mamy nadpisany Ani wiek i wiek sie zmienia na nadpisany
female.getAge = function() { //nadalismy Ani metode dlatego jej wiek bedzie 18, wpisalismy jakby metode do konstruktora ale tylko dla Ani- metody i pola maja wieksza waznosc niz prototypy
  console.log(18);
}
female.favouriteColor = "pink"; //tylko Ania bedzie miała ulubiony kolor
//female.getAge();


Human.prototype.getAge = function() {
  console.log(this.age + 5);
}
female.getAge(); //bedzie 18 bo Ania ma nadpisana metode
male.getAge(); //bedzie 34 bo doda gosciowi 5 lat, on nie ma nadpisanej metody
*/
