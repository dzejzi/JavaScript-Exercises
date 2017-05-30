//zadanie1
function miksowanie(napis)
{
  return "zmiksowana " + napis;
}

console.log(miksowanie("marchewka"));

//zadanie 2
function wypisywanie(n)
{
  for (var i=0; i<n; i++)
  console.log("Programowanie jest fajne!");
}

wypisywanie(3);

//zadanie3
function maksimum(a, b, c)
{
  if (a >= b && a >= c)
  return a;

  if (b >= a && b >= c)
  return b;

  if (c >= a && c >= b)
  return c;
}

console.log(maksimum(9, 8, 11));

//zadanie4
function arraySummary(arr)
{
  var summary = 0;
  for (var i=0; i<arr.length; i++)
  summary += arr[i];

  return summary;
}

//zadanie5
var zmienna = function anonimowa(n) {
  for (var i=0; i<n; i++) {
    console.log("Gdy pisze kod zawsze i wszedzie uzywam funkcji oraz nie tworze zmiennych globalnych");
  }
}

zmienna(6);

console.log(arraySummary([1, 2, 3]));

//zadanie 6
function rentCost(days) {
    var koszt = 0;

    if (days == 1) {
        koszt = 200;
    } else
    if (days == 2 || days == 3) {
        koszt = 180 * days;
    } else
    if (days >= 4 && days < 7) {
        koszt = 160 * days
    } else
    if (days == 7) {
        var numbersOfWeeks = Math.floor(days / 7);
        koszt = 160 * days - (50 * numbersOfWeeks);
    } else
    if (days >= 8) {
        var numbersOfWeeks = Math.floor(days / 7);
        koszt = 150 * days - (50 * numbersOfWeeks);
    }
    return koszt;
}
console.log(rentCost(8));

//zadanie7
function rockPaperScissors(player1, player2) {
    if (player1 == player2) {
        console.log("Remis");
    } else {
        if (player1 == "papier" && player2 == "kamien" ||
            player1 == "kamien" && player2 == "nozyce" ||
            player1 == "nozyce" && player2 == "papier") {
            console.log("Gracz 1 wygral");
        } else {
            if (player1 == "papier" && player2 == "nozyce" ||
                player1 == "kamien" && player2 == "papier" ||
                player1 == "nozyce" && player2 == "kamien") {
                console.log("Gracz 2 wygral");
            } else {
                console.log("Bledne informacje");
            }

        }
    }
}

rockPaperScissors("nozyce", "nozyce");
rockPaperScissors("nozyce", "kamien");
rockPaperScissors("papier", "kamien");
rockPaperScissors("noz", "kamien");

// zadanie 8
function calculateTip(amount, raiting)
{
  var napiwek ="";
  switch (raiting) {
    case "Bardzo dobra obsluga":
    napiwek = amount * 25/100;
    break;

    case "Dobra obsluga":
    napiwek = amount * 20/100;
    break;

    case "Srednia obsluga":
    napiwek = amount * 15/100;
    break;

    case "Zla obsluga":
    napiwek = 0;
    break;

    default:
    napiwek = "Opis nieczytelny";
  }
return napiwek;
}

console.log( calculateTip ( 100, "Bardzo dobra obsluga"));

//zadanie z wykladowca

function FooBar(n)
{
  for (var i=1; i<=n; i++){

    if( (i% 3 === 0) && (i % 5 === 0) )
    {
      console.log("FOOBAR");
    } else if (i % 5 === 0) {
      console.log("Bar");
    }else if (i % 3 === 0) {
      console.log("Foo");
    }else {
      console.log(i);
    }
  }
}

FooBar(15);

//zadanie z wykladowca
function Potegowanie(podstawa, wykladnik)
{
  var result=1;
  for(var i=1; i<=wykladnik; i++)
  {
    result *= podstawa;
  }
  return result;
}

console.log(Potegowanie(3,4));
