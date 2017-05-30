//zadanie 0
var randomNumber = Math.random()*100;
  if (randomNumber > 50){
    console.log("Hura");
    }else{
      console.log("Liczba mniejsza niz 50");
    }

//zadanie1
var a = 5;
var b = 2;
if (a === b){
    console.log("a jest rowna b");
    } else if (a>b){
      console.log("a jest wieksza od b");
      }else{
        console.log("a jest mniejsza od b");
      }

//zadanie2
function myEval(a, b, operation)
{
    var result = 0;
    switch(operation)
    {
        case'+': result = a + b; break;
        case'-': result = a - b; break;
        case'/': result = a / b; break;
        case'*': result = a * b; break;
        case'%': result = a % b; break;
        case'^': result = Math.pow(a, b); break;
        }
    return result;
}

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));

//zadanie3
var menAge = 8;
var pet = "pies";

if ( pet == "pies")
{
  console.log("Uzytkowinik wybral zwierze: pies");
  console.log("Wiek psa to: " + Math.floor(menAge*7) + " lat")
} else {
  console.log("Uzytkownik wybral inne zwierze");
}
