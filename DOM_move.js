//zadanie1

console.log("**********zadanie1************");

var buttons = document.getElementsByClassName("button");
//console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        //    console.log(this.id);
        this.nextElementSibling.classList.toggle("hidden");
    });
}

console.log("aaaaaa");

var allLinks = document.querySelectorAll("a");
console.log(allLinks);

for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].parentElement.addEventListener("click", function() {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });
}

var allLists = document.querySelectorAll("div ul");
console.log(allLists);

for (var i = 0; i < allLists.length; i++) {
    allLists[i].parentElement.addEventListener("mouseover", function() {
        for (var j = 0; j < this.firstElementChild.children.length; j++) {
            this.firstElementChild.children[j].style.backgroundColor = "green";
        }

        this.firstElementChild.firstElementChild.style.backgroundColor = "red";
        this.firstElementChild.lastElementChild.style.backgroundColor = "blue";
    });
    //console.log(allLists[i].parentElement);
}

document.addEventListener("DOMContentLoaded", function() {

    //Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
    var firstChild = document.querySelector('.first').firstElementChild;
    var thirdChild = firstChild.nextElementSibling.nextElementSibling;
    console.log("firstChild", firstChild);
    console.log("thirdChild", thirdChild);
    //Element o id second -> jego rodzic -> jego czwarte dziecko.
    var secondElement = document.getElementById('second');
    var parentElement = secondElement.parentElement;
    var fourthChildElement = parentElement.children[3];
    console.log(secondElement);
    console.log(parentElement);
    console.log(fourthChildElement);
    //Element o atrybucie data-ex nastawionym na wartość third
    var dataExElement = document.querySelector("[data-ex]");
    console.log(dataExElement);
    // -> jego dziadek
    var grandpaElement = dataExElement.parentElement.parentElement;
    console.log(grandpaElement);
    //-> jego ostatnie dziecko
    var lastChild = grandpaElement.lastElementChild;
    console.log(lastChild);
    //-> jego pierwsze dziecko
    var firstChildofLastChild = lastChild.firstElementChild;
    console.log(firstChildofLastChild);
    //-> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w górę)
    var middleChild = firstChildofLastChild.children[Math.ceil(firstChildofLastChild.children.length / 2 - 1)];
    console.log(middleChild);


});
