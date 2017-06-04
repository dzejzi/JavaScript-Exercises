//zadanie z wykladowca
document.addEventListener("DOMContentLoaded", function() {

    console.log("******zadanie z wykladowca*********");

    console.log("****pkt1****");
    var liElements = document.querySelectorAll(".ex5 li:not([data-direction])");
    console.log(liElements);

    for (var i = 0; i < liElements.length; i++) {
        liElements[i].dataset.direction = "up";
        console.log(liElements[i].dataset.direction);
    }

    console.log("****pkt2****");
    //wersja z modulo
    var listElems = document.querySelectorAll(".ex5 li")
    for (var i = 0; i < listElems.length; i++) {
        if (i % 2 !== 0) {
            listElems[i].style.backgroundColor = "green";
        }
    }


    //z nth
    /*
    var listElems = document.querySelectorAll(".ex5 li:nth-child(2n)")
    for (var i = 0; i < listElems.length; i++) {
        listElems[i].style.backgroundColor = "green";
    }*/

    /*
        //metoda i+2 - nie dziala bo robi krok co i+2
        var listElems = document.querySelectorAll(".ex5 li")
        for (var i = 0; i < listElems.length; i + 2) {
            listElems[i].style.backgroundColor = "green";
        }*/

    console.log("****pkt3****");
    listElems[4].classList.toggle("big");


    var secondListElems = document.querySelectorAll(".ex5 li:nth-child(2n+3)");
    for (var i = 0; i < secondListElems.length; i++) {
        secondListElems[i].style.textDecoration = "line-through";
    }
});
console.log("******zadanie1*********");
//zadanie1

document.addEventListener("DOMContentLoaded", function() {
    // zad 1.3
    var chromeElement = document.querySelector(".chrome");
    console.log(chromeElement);
    chromeElement.style.width = "100px";

    // zad 1.1
    var firefoxElement = document.querySelector(".firefox");
    firefoxElement.style.backgroundImage = "url('assets/img/firefox.png')";

    var edgeElement = document.querySelector(".edge");
    edgeElement.style.backgroundImage = "url('assets/img/edge.png')";

    // zad 1.2
    var linkFirefox = document.querySelector(".firefox~a");
    linkFirefox.setAttribute("href", "http://firefox.com");
    linkFirefox.innerText = "Firefox";

    var linkChrome = document.querySelector(".chrome~a");
    linkChrome.innerText = "Chrome";

    var linkEdge = document.querySelector(".edge~a");
    linkEdge.setAttribute("href", "http://edge.com");

    console.log("******zadanie2*********");
    //zadanie2
    var nameElem = document.getElementById('name');
    var favColorElem = document.getElementById('fav_color');
    var favMealElem = document.getElementById('fav_meal');

    nameElem.innerHTML = "Janusz";
    favColorElem.innerHTML = "Zielony";
    favMealElem.innerHTML = "Kopytka";

    console.log("******zadanie3*********");
    //Zadanie 3

    var setMenuClass = document.querySelector(".ex3 ul");
    console.log(setMenuClass);
    setMenuClass.classList.toggle("menu");
    console.log(setMenuClass);

    var allLiElem = document.querySelectorAll(".ex3 li");
    console.log(allLiElem);
    for (var i = 0; i < allLiElem.length; i++) {
        allLiElem[i].classList.add("menuElement");
        allLiElem[i].classList.remove("error");
    }
    console.log(allLiElem);

    console.log("******zadanie4*********");
    //Zadanie 4

    var liExercise4 = document.querySelectorAll(".ex4 li");
    console.log(liExercise4);

    //rozwiazanie1
    /*var k = 1;
    for (var i = 0; i < liExercise4.length; i++) {
        liExercise4[i].dataset.dataId = k.toString();
        k++;
    }
    console.log(liExercise4);*/

    //rozwiazanie2
    var k = 1;
    for (var i = 0; i < liExercise4.length; i++) {
        var attrValue = k.toString();
        liExercise4[i].setAttribute("data-id", attrValue)
        k++;
    }
    console.log(liExercise4);

});
