//Zadanie rozwiązywane z wykładowcą

function distFromAvarage(givenArray) {

    var sum = 0;
    var averange = 0;
    for (var i = 0; i < givenArray.length; i++) {
        sum += givenArray[i];
    }
    averange = sum / givenArray.length;
    //  console.log(averange);

    var resultArray = [];
    var distance = 0;
    for (var j = 0; j < givenArray.length; j++) {
        distance = givenArray[j] - averange;
        resultArray.push(Math.abs(distance));
    }
    return resultArray;

    /*for (var j = 0; j < givenArray.length; j++) {
        if (givenArray[i] - averange >= 0) {
            resultArray[j] = givenArray[j] - averange;
        } else {
            resultArray[j] = averange - givenArray[j];
        }
    }*/
}

var firstArray = [1, 2, 3, 4, 5, 6, 7]; //4
var secondArray = [1, 1, 1, 1]; //1
var thirdArray = [2, 8, 3, 7]; //5
var ultimateArray = [2, 6, 9, 8, 10, 1]; //6
console.log(distFromAvarage(firstArray)); //[3,2,1,0,1,2,3]
console.log(distFromAvarage(secondArray)); //[0,0,0,0]
console.log(distFromAvarage(secondArray)); //[3,3,2,2]
console.log(distFromAvarage(ultimateArray)); //[4,0,3,2,6,5]



console.log("*****************************");
//zadanie1

var arrayOne = ["banan", "jablko", "mandarynka"];
console.log(arrayOne[0]);
console.log(arrayOne[arrayOne.length - 1]);
for (var i = 0; i < arrayOne.length; i++) {
    console.log(arrayOne[i]);
}

console.log("*****************************");
//zadanie2

function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }


    if (newArray.length == 0) {
        console.log("Tablica jest pusta");

    }
    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

console.log("*****************************");
//zadanie3

function printTable(array1) {
    for (var i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }

}
var arrayThree = [1, 2, 3, 4, 5, 6, 7];
printTable(arrayThree);

console.log("*****************************");
//zadanie4

function multiply(array4) {
    var ratio = 1;
    for (var i = 0; i < array4.length; i++) {
        ratio *= array4[i];
    }
    return ratio;
}
console.log(multiply([1, 2, 3, 4, 5, 6, 7])); // => 5040
console.log(multiply([1, 1, 1, 1])); //=> 1
console.log(multiply([2, 8, 3, 7])); //=> 336

console.log("*****************************");
//zadanie5
function getEvenAvarage(array5) {

    var sum5 = 0;
    var k = 0;
    for (var i = 0; i < array5.length; i++) {
        if (array5[i] % 2 === 0) {
            sum5 += array5[i];
            k++;
        }
    }

    if (k == 0) {
        return "null";
    } else {
        return sum5 / k;
    }
}

console.log(getEvenAvarage([1, 2, 3, 4, 5, 6, 7])); //=> 4
console.log(getEvenAvarage([1, 1, 1, 1])); //=> null
console.log(getEvenAvarage([2, 8, 3, 7, 4]));
//=> 4.666

console.log("*****************************");
//zadanie6
function sortArray(array6) {
    return array6.sort(function(a, b) {
        return a - b
    });
}
console.log(sortArray([145, 11, 3, 64, 4, 6, 10])); ///=> [3,4,6,10,11,64,145]



console.log("*****************************");
//zadanie7

function addArrays(arr7, arr8) {
    var arrResult9 = [];
    var longer = 0;

    if (arr7.length > arr8.length) {
        longer = arr7.length;
    } else {
        longer = arr8.length;
    }

    for (var i = 0, j = 0; i < longer, j < longer; i++, j++) {
        if (arr7[i] == undefined) {
            arr7[i] = 0;
        }
        if (arr8[j] == undefined) {
            arr8[i] = 0;
        }
        arrResult9.push(arr7[i] + arr8[j]);
    }
    return arrResult9;
}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17])); //=> [5,9,7,10,12,17]
console.log(addArrays([8, 3, 22], [1, 3, 2])); //=> [9,6,24]
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));
//=> [5,4,77,6,3,5]

/*
//drugie rozwiazanie
function addArrays(a, b) {
    var joinArray = [];

    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        joinArray.push((a[i] || 0) + (b[i] || 0));
    }
    console.log(joinArray);
}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17])); //=> [5,9,7,10,12,17]
console.log(addArrays([8, 3, 22], [1, 3, 2])); //=> [9,6,24]
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));
//=> [5,4,77,6,3,5]
*/



/*Zmienne lokalne i globalne

firstVariable = "Hello";
var firstVariable = "Hello world!";
function test() {
  firstVariable = "Bye world;(";
  var secondVariable = "Yo";
  return firstVariable;
}

console.log(firstVariable);
console.log(test());
console.log(firstVariable);
console.log(secondVariable);


*/
