document.addEventListener("DOMContentLoaded", function() {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //zadanie z wykladowca
    console.log("------zadanie z wykladowca------");

    function getDatasInfo(elements) {
        var dataValuesArray = [];
        for (var i = 0; i < elements.length; i++) {
            dataValuesArray.push(elements[i].getAttribute("data-color"))
        }
        return dataValuesArray;
    }
    console.log(getDatasInfo(links));


    //zadanie1
    console.log("------zadanie1-----");
    console.log(homeElement.length);
    console.log(childElements.length); //tablica
    console.log(banner.length);
    console.log(blocks.length); //tablica
    console.log(links.length); //tablica
    console.log(links.constructor == Array);

    for (var i = 0; i < childElements.length; i++) {
        console.log(childElements[i], "tag: ", childElements[i].tagName, "class: ", childElements[i].className);
    }

    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i], "tag: ", blocks[i].tagName, "class: ", blocks[i].className);
    }

    for (var i = 0; i < links.length; i++) {
        console.log(blocks[i], "tag: ", links[i].tagName, "class: ", links[i].className);
    }


    //zadanie2
    console.log("------zadanie2-----");

    for (var i = 0; i < blocks.length; i++) {
        console.log("element blocks: ", blocks[i], "innerHTML: ", blocks[i].innerHTML, "\t", "outerHTML: ", blocks[i].outerHTML);
    }

    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i].outerHTML);
        blocks[i].innerHTML = "Nowa wartość diva o klasie blocks"; // nowa wartość przypisania
    }


    //zadanie3
    console.log("------zadanie3-----");
    var mainFooter = document.getElementById("mainFooter");
    console.log(mainFooter);

    function getId(element) {
        //var nameOfmainFooter = element.Name;
        return element.id;

    }
    console.log(getId(mainFooter));


    //zadanie4
    console.log("------zadanie4-----");

    //console.log(childElements);

    function getTags(elements) {
        var newArraychildElements = [];
        for (var i = 0; i < elements.length; i++) {
            newArraychildElements[i] = elements[i];
        }
        return newArraychildElements;

    }
    console.log(getTags(childElements)); //childElements to tablica


    //zadanie5
    console.log("------zadanie5-----");
    console.log(banner);

    function getClassInfo(element) {
        var newString = element.className;
        var newClassArray = newString.split(" ");

        return newClassArray;
    }
    console.log(getClassInfo(banner));

    /*
    ZADANIE 5. DOM ELEMENT
    function getClassInfo(element) {
      return element.classList
    }
    console.log(getClassInfo(banner))

    */


    //zadanie6
    console.log("------zadanie6-----");
    var liInNav = document.querySelectorAll("nav li");
    //console.log(liInNav);
    function setDataDirection(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (!elements[i].hasAttribute("data-direction")) {
                elements[i].setAttribute("data-direction", "top")
            }
        }
        return elements;
    }
    console.log(setDataDirection(liInNav));

});
