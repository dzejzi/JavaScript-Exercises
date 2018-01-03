// zadanie 1
var a = 10;
var b = 23;
if (a>b)
  {
    console.log("Wieksza: " + a);
  } else
      {
        console.log("Wieksza: " + b);
      }

// zadanie 2
var c = 100;
var d = 253;
var e = 25;
if (c >= d && c >= e)
  {
      console.log("Najwieksza sposrod: "+c+" "+d+" "+e+" jest: " +c);
  } else if (d >= c && d >= e)
      {
        console.log("Najwieksza sposrod: "+c+" "+d+" "+e+" jest: " +d);
      } else
          {
            console.log("Najwieksza sposrod: "+c+" "+d+" "+e+" jest: "+e);
          }

// zadanie 3
for(var i=0; i<10; i++)
  {
    console.log("Lubie JavaScript");
  }

// zadanie 4
var result = 0;
for(var i=1; i<=10; i++)
  {
    result += i;
  }
  console.log(result);

// zadanie 5
var n = 13;
for(var i=0; i<=n; i++)
  {
    if ( (i%2) == 0)
    console.log(i+" - parzysta");
    else
    console.log(i+" - nieparzysta");
  }

// zadanie 6
for(var i=0; i<5; i++)
{
  for(var j=0; j<5; j++)
  {
  console.log("i=" + i + ", j=" + j);
  }
}

// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

// zadanie 8
var star = "";
for(var w=1; w<=5; w++)
{
  star = "";
  for(var k=1; k<=w; k++)
  {
    star += "*";
  }
//  console.log("\n"); // albo settings-->console-->Show timestamps
  console.log(star);
}

//zadanie 9
var gi = "";
var lic = "";
for(var i=1; i<=5; i++)
{
    var gi = "";
    var lic = "";
    for(var j=1; j<=5; j++)
  {
    if(i>=j)
    gi += " * ";
    else
    lic += (" "+j+" ");
  }
  console.log(gi + lic);
}

var gw = "";
var licz = "";
for(var i=1; i<=5; i++)
{
    var gw = "";
    var licz = "";
    for(var j=1; j<=5; j++)
  {
    if((i+j)<=(5+1))
    gw += " * ";
    else
    licz += (" "+j+" ");
  }
  console.log(gw + licz);
}

// zadanie 10
var n=5;
var napis="";
for(var i=1; i<=n; i++)
{
  napis="";
  for (var j=1; j<=n; j++)
  {
    napis += (" "+i+" x "+j+" = "+(i*j)+" |");
  }
  console.log(napis);
}
