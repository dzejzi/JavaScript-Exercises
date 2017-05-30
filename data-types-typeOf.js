//zadanie1
var Numberr = 3; //number
var Stringg = "abc"; //string
var Booleann = true; //logiczne
var Specjalne = null; //specjalne

var Obiekt = { // obiekty
  imie: "Mruczek",
  wiek: 3
  }

var tab = [0, 1, 2, 3, 4]; //tablice

var wynik = Numberr + Stringg + Booleann + Specjalne;
var Numberr_String =  Numberr + Stringg;
var Boolean_Specjalne = Booleann + Specjalne;
var Stringg_Specjalne = Stringg + Specjalne;
var Obiekt_tab = Obiekt + tab;
var Specjalne_tab = Specjalne + tab;

console.log(typeof wynik); //string
console.log(typeof Numberr_String); //string
console.log(typeof Boolean_Specjalne); //number
console.log(typeof Stringg_Specjalne); //string
console.log(typeof Obiekt_tab); //string
console.log(typeof Specjalne_tab); //string

//zadanie 2
var a = 12354;
var b = 52;
console.log(a/b);
var result = a/b;
console.log(Math.ceil(result));
console.log(Math.floor(result));

//zadanie 3
console.log(Math.ceil(Math.random() * (100-5) + 5));

//zadanie 4
var widthBox = "23px";
var widthPanel = "2px";
var result = parseInt(widthBox,10) + parseInt(widthPanel,10);
console.log(result);

//zadanie 5
var mail = "justynaaaa@op.pl";
var ifExist = mail.indexOf('@');
if (ifExist != -1)
  console.log("Znak @ wystepuje na pozycji:" + ifExist);
  else {
    console.log("Znak @ nie wystepuje");
  }
