document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});


/*pkt 1
po przeniesieniu tagu script do sekcji head w konsoli wyskakuje blad: cannot read property 'classList' of null - dzieje sie tak dlatego, ze nie mamy gwarancji, że cała strona została uprzednio załadowana
*/

/*pkt 2
przeniesienie kodu do document.addEventListener("DOMContentLoaded",.... poprawilo sytuacje poniewaz DOMContentLoaded jest specjalnym eventem,
uruchamiającym się w momencie załadowania
całej strony!!!
*/

/*pkt 2
po przeniesieniu tagu script ponownie do sekcji head wszystko nadal dziala poprawnie
*/

//zadanie2

document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementsByTagName("button");
    console.log(myButton);


    myButton[0].addEventListener("click", function(event) {
        console.log("Hura! Działa!");
    });

});

//zadanie03
document.addEventListener("DOMContentLoaded", function() {

    var myButton = document.getElementsByTagName("button");
    console.log(myButton);
    var clickCount1 = 0;
    var clickCount2 = 0;
    var clickCount3 = 0;
    for (var i = 0; i < myButton.length; i++) {
        console.log(myButton[i]);
        myButton[i].addEventListener("click", function(event) {

            var clickCount = [];
            var lastLetter = this.id.toString().slice(-1);
            if (lastLetter == 1) {
                clickCount1++;
                clickCountString = clickCount1.toString();
            }
            if (lastLetter == 2) {
                clickCount2++;
                clickCountString = clickCount2.toString();
            }
            if (lastLetter == 3) {
                clickCount3++;
                clickCountString = clickCount3.toString();
            }
            //console.log(this.id);
            var selector = "#" + this.id + "~p span";
            //  console.log(selector);
            var spanCounterElements = document.querySelector(selector);
            spanCounterElements.innerHTML = clickCountString;
            //  console.log(spanCounterElements);
        });
    }
});

//wersja2
/*document.addEventListener("DOMContentLoaded", function() {

   var firstButton = document.getElementById("button1");
   var firstCounter = document.querySelector(".counter");
   var secondButton = document.getElementById("button2");
   var secondCounter = document.querySelectorAll(".counter")[1];
   var thirdButton = document.getElementById("button3");
   var thirdCounter = document.querySelectorAll(".counter")[2];
   var clickCount1 = 0;
   var clickCount2 = 0;
   var clickCount3 = 0;

   firstButton.addEventListener("click", function() {
       clickCount1 += 1;
       firstCounter.innerHTML = clickCount1;
   });
   secondButton.addEventListener("click", function() {
       clickCount2 += 1;
       secondCounter.innerHTML = clickCount2;
   });
   thirdButton.addEventListener("click", function() {
       clickCount3 += 1;
       thirdCounter.innerHTML = clickCount3;
   })


});*/

document.addEventListener("DOMContentLoaded", function() {
    var buttonElements = document.querySelectorAll("button");
    console.log(buttonElements);
    var ClickCounter = document.querySelector(".counter");
    for (var i = 0; i < buttonElements.length; i++) {
        console.log(buttonElements[i]);
        var counter = 0;
        buttonElements[i].addEventListener("click", function() {
            counter++;
            ClickCounter.innerHTML = counter;

        });
    }


});

document.addEventListener("DOMContentLoaded", function() {

    var threeDivs = document.getElementsByTagName("div");
    console.log(threeDivs);

    for (var i = 0; i < threeDivs.length; i++) {

        threeDivs[i].addEventListener("click", function(event) {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    }


});

document.addEventListener("DOMContentLoaded", function() {
    var boxElement = document.getElementById("box");
    //console.log(boxElement);
    var globalXElement = document.getElementById("globalX");
    var globalYElement = document.getElementById("globalY");
    var localXElement = document.getElementById("localX");
    var localYElement = document.getElementById("localY");


    boxElement.addEventListener("mousemove", function(e) {
        globalXElement.innerHTML = e.clientX;
        globalYElement.innerHTML = e.clientY;
        localXElement.innerHTML = e.screenX;
        localYElement.innerHTML = e.screenY;

    });
})

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#element1').addEventListener('click', function(e) {
        console.log('Event in #element1 fired!');
    });

    document.querySelector('#element2').addEventListener('click', function(e) {
        console.log('Event in #element2 fired!');
        e.stopPropagation();
    });

    document.querySelector('#element3').addEventListener('click', function(e) {
        console.log('Event in #element3 fired!');
    });

    document.querySelector('#element4').addEventListener('click', function(e) {
        console.log('Event in #element4 fired!');
        e.stopImmediatePropagation();
    });

    document.querySelector('#element5').addEventListener('click', function(e) {
        console.log('Event in #element5 fired!');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var windowHeight = document.getElementById("windowHeight");
    var windowWidth = document.getElementById("windowWidth");

    window.addEventListener("resize", function() {
        console.log(this.innerHeight);
        //console.log(this);
        windowHeight.innerHTML = this.innerHeight;
        windowWidth.innerHTML = this.innerWidth;
    });

})

document.addEventListener("DOMContentLoaded", function() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");

    // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
    // addEventListener to właśnie document)
    console.log("obiekt document: ", this);

    a.addEventListener("click", function(event) {
        // Tutaj this wskazuje na element DOM o id a
        console.log("a: ", this);
    });

    b.addEventListener("click", function(event) {
        // Tutaj this wskazuje na element DOM o id b
        console.log("b: ", this);


        function innerFuncOne() {
            // Tutaj this wskazuje na element Window, bo funkcja została
            //wywołana bez żadnego kontekstu.
            b.style.backgroundColor = "#00ff00";
            console.log("innerFuncOne: ", this);
        }
        innerFuncOne();

    });

})

/*
var parentElements = document.querySelectorAll(".parent");
console.log(parentElements);

for (var i = 0; i < parentElements.length; i++) {
    parentElements[i].addEventListener("mouseover", function() {
        this.children[0].style.display = "block";
    });
     parentElements[i].addEventListener("mouseout", function() {
          this.children[0].style.display = "none";
      });

}
*/

// ładne:
var parentElements = document.querySelectorAll(".parent");
console.log(parentElements);

for (var i = 0; i < parentElements.length; i++) {
    function showChildrenElements() {
        this.children[0].style.display = "block";
    }

    function hideChildrenElement() {
        this.children[0].style.display = "none";
    }
    parentElements[i].addEventListener("mouseover", showChildrenElements);
    parentElements[i].addEventListener("mouseout", hideChildrenElement);
}
