console.log("******zadanie1**********");
//zadanie1

/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//kompilator znajduje deklaracje funkcji
function sortArray() {

    //deklaracja tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //na tablicy points wywołujemy funkcje ktora ma ja posortowac
    points.sort(function(a, b) {
        //metoda sort () porównuje dwie wartości, wysyła wartości do funkcji porównania i sortuje wartości zgodnie z wartością zwróconą (ujemną, zerową, dodatnią)
        return a - b;
    });

    //funkcja zwraca(wysyla) posortowana tablice
    return points;
}

//wywolanie funkcji sortArray
console.log(sortArray());



console.log("*******zadanie2*************");
//zadanie2
function getMaxOfArray() {
    return Math.max.apply(0, arguments);
}

console.log(getMaxOfArray(5, 29, 6, 4, 34, 56, 2, 3));


console.log("*******zadanie3*************");
//zadanie3
function countHello(parameter) {
    var myVar;
    var i = 1;
    var id = setInterval(write, 3000);

    function write() {
        if (i <= parameter) {
            console.log("Hello licznik:" + i);
            i++;
        } else {
            clearInterval(id);
            console.log("**delete setInterval**");
        }
    }
}

//aaaaaaaaa!!!! wywoluje sie za kazdym razem aaaaa
countHello(8);

console.log("*******zadanie4*************");
//zadanie4
//test(); //jak wywolam przed definicja funkcji to tez dziala i jest git

function test() {
    var j = 0;
    var timeoutIdInterval = setInterval(function() {
        console.log('Czesc');
        j++;
        if (j == 10) {
            clearInterval(timeoutIdInterval);
            console.log("**delete setInterval**");
        }

    }, 1000);

}
//test(); //jak wywołam po definicji funkcji wszystko dziala i jest git

//functionWitaj(); to nie dziala - nie da sie wywolac funkcji anonimowej przed jej definicja
var functionWitaj = function() {
    var k = 0;
    var timeoutIdInterval = setInterval(function() {
        console.log('Witaj');
        k++;
        if (k == 10) {
            clearInterval(timeoutIdInterval);
            console.log("**delete setInterval**");
        }

    }, 1000);
}
//functionWitaj(); //jak wywołam po definicji funkcji która jest zapisana jako wyrażenie funkcyjne (funkcja anonimowa) wszystko dziala i jest git
