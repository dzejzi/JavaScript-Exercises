/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener("DOMContentLoaded", function() {
    //  console.log("dziala");
    var allListElements = document.querySelectorAll("li");
    //  console.log(allListElements);
    var bodyElement = document.getElementsByTagName("body");
    //  console.log(body);

    for (var i = 0; i < allListElements.length; i++) {
        allListElements[i].addEventListener("click", function() {
            //console.log("dziala");
            var imageURL = this.firstElementChild.getAttribute("src");
            //  console.log(imageURL);
            var divFullScreen = document.createElement("div");
            this.parentElement.parentElement.parentElement.appendChild(divFullScreen);
            divFullScreen.innerHTML = "<div class=" +
                "\"fullScreen\"" +
                "><" +
                "img src=\"" +
                imageURL +
                "\"><" +
                "button class=" +
                " \"close\"" +
                ">Close</button></" +
                "div> ";
            //console.log(divFullScreen);
            var butonClose = this.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild;
            console.log(butonClose);
            butonClose.addEventListener("click", function() {
                console.log(this.parentElement.parentElement.parentElement);
                this.parentElement.parentElement.parentElement.removeChild(divFullScreen);
            });
        });
    }
});
/*
Na stronie poprawnie wyświetlają się zdjęcia w trybie pełnego ekranu, po kliknięciu na obrazek.
Należałoby zmienić jednak np. szerokości i wysokości wyświetlania obrazków w css ponieważ po wyświetleniu ich w trybie pełnego ekranu nie pokazuje się pasek do automatycznego przewijania w pionie, nie ma możliwości kliknięcia na guzik close bez pomniejszenia całej strony.
*/
