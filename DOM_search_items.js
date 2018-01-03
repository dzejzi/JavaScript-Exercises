//zadanie z wykladowca
//sposob1-querySelector

document.addEventListener("DOMContentLoaded", function() {
    var titleElement = document.querySelector(".title");

    function getDataAnimation(givenElement) {
        var value = givenElement.getAttribute("data-animation");
        return value;
    }
    console.log(getDataAnimation(titleElement));

});

//sposob2-byclass
// using getElementsByClassName that returns an array of elements

document.addEventListener("DOMContentLoaded", function() {
    var titleElements = document.getElementsByClassName("title");

    function getDataAnimation(givenElements) {
        // in order to return a specific value you must provide id
        // eg.: givenElements[0]
        var value = givenElements[0].getAttribute("data-animation");
        return value;
    }
    console.log(getDataAnimation(titleElements));

});

console.log("******zadanie1******************");
//zadanie 1

document.addEventListener("DOMContentLoaded", function() {

    var firstHomeElement = document.getElementById("home");
    console.log(firstHomeElement);

    var firstHomeElementByQuery = document.querySelector("#home");
    console.log(firstHomeElementByQuery);

    var liElements = document.querySelector("li:not([data-direction])");
    console.log(liElements);

    var firstBlockElements = document.getElementsByClassName("block");
    console.log(firstBlockElements[0]);

});

console.log("******zadanie2******************");
//zadanie 2
document.addEventListener("DOMContentLoaded", function() {
    var liElementsInNav = document.querySelectorAll("nav li");
    console.log(liElementsInNav);
    console.log(liElementsInNav.length);

    var pInDiv = document.querySelectorAll("div p");
    console.log(pInDiv, pInDiv.length);

    var pdivInArticle = document.querySelectorAll("article div");
    console.log(pdivInArticle, pdivInArticle.length);
});

console.log("******zadanie3*****************");
//zadanie 3
document.addEventListener("DOMContentLoaded", function() {
    // pkt 1
    console.log("***pkt0***");
    var articleTag = document.querySelector("article.first");
    console.log(articleTag, articleTag.length);

    console.log("***pkt1***");
    var resultTagH1 = articleTag.querySelectorAll("h1");
    console.log(resultTagH1, resultTagH1.length);

    //dodatkowo
    var resultTagH2 = articleTag.querySelectorAll("h2");
    console.log(resultTagH2, resultTagH2.length);
    console.log("***pkt2***");

    var resultClassOferts = document.querySelectorAll(".oferts");
    console.log(resultClassOferts, resultClassOferts.length);

    for (var i = 0; i < resultClassOferts.length; i++) {
        console.log(resultClassOferts[i].tagName);
    }

    console.log("***pkt3**");

    var resultDivClassFirst = document.querySelectorAll("div");
    console.log(resultDivClassFirst, resultDivClassFirst.length);

    for (var i = 0; i < resultDivClassFirst.length; i++) {
        console.log(resultDivClassFirst[i].className);
    }

    console.log("******zadanie3*****************");
    //zadanie 3
    document.addEventListener("DOMContentLoaded", function() {

        var articleTag = document.querySelector("article.first");
        console.log(articleTag, articleTag.length);

        console.log("***pkt1***");
        var resultTagH2 = articleTag.getElementsByTagName("h2");
        console.log(resultTagH2, resultTagH2.length);

        console.log("***pkt2***");
        var ofertsClass = articleTag.getElementsByClassName("oferts");
        console.log(ofertsClass, ofertsClass.length);

        for (var i = 0; i < ofertsClass.length; i++) {
            console.log(ofertsClass[i].tagName);
        }

        console.log("***pkt3***");
        var divAricleTag = articleTag.getElementsByTagName("div");
        console.log(divAricleTag, divAricleTag.length);
        for (var i = 0; i < divAricleTag.length; i++) {
            console.log(divAricleTag[i].className);
        }

    });
