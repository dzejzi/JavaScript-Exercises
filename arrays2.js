//zadanie1
var avg = [4, 4, 1, 2, 5, 40];
var summary = 0;

for (var i=0; i < avg.length; i++){
  summary += avg[i];
}
console.log(summary/(avg.length)); //srednia arytmetyczna


//zadanie z wykladowca
console.log("***zadanie z wykladowca***");

var arr3= [];
for (var i=0; i<12; i++){
    arr3[i] = i;
}

for (var i=0; i<12; i++){
    console.log(arr3[i]);
}


//zadanie2
var array= [];
for (var i=0; i<10; i++){
    array[i] = Math.ceil((Math.random())*(60-1)+1); //losowanie liczby z przedzialu od 1 do 60
}
for (var i=0; i<10; i++){
    if(array[i]%2 !== 0) // nieparzyste zwiekszam o 1
    (array[i] += 1);
}
for (var i=0; i<10; i++){
    console.log(array[i]);
}

//zadanie2 z wykladowca
console.log("***zadanie z wykladowca***");

var arr4= [];
for (var i=0; i<12; i++){
    arr4[i] = Math.ceil((Math.random())*(10-1)+1); //losowanie liczby z przedzialu od 1 do 10;
}

//wypisuje tablice wylosowanych liczb - w tablicy moze byc wiecej niz jedno powtorzenie
for (var i=0; i<12; i++){
    console.log(arr4[i]);
}


var arr5= [];
var k=0;
for (var i=0; i<12; i++){
  for (var j=i+1; j<12; j++){
    if (arr4[i] === arr4[j]){
      arr5[k]=arr4[i];
      k++;
    }
  }
}

arr5.sort(function(a, b){return a-b}); //sortowanie tablicy od najmniejszej do najwiekszej
console.log("****");
for (var i=0; i<arr5.length; i++){
    console.log(arr5[i]);
}

console.log("****"); //tylko sobie rozdzielam :)
var noRepeat=0; // sprawdzam ile liczb sie nie powtarza w posortowanejtablicy wynikow
for (var i=0; i<arr5.length; i++){
    if( arr5[i] !== arr5[i+1]){
      noRepeat++; // jesli sie nie powtarza to zwiekszam o 1
    }
}

console.log(noRepeat); // Wynik

//zadanie 3
var arr1 = [4, 55, 17, 22, 1];
var  arr2 = [4, 53, 11, 22, 20]

for (var i=0; i<arr1.length; i++){
  for (var j=0; j<arr2.length; j++){
    if (arr1[i] === arr2[j])
    console.log(arr1[i]);
  }
}

//zadanie 3
var string =  "My name is Bond, James Bond";
var sbStr = string.replace("," , "")
var arr6 = [];
arr6 = sbStr.split(" ");
console.log(arr6);
for (var i=0; i<arr6.length; i++){
  console.log(arr6[i].length);
}

//Wynik w konsoli: 2, 4, 2, 4, 5, 4
