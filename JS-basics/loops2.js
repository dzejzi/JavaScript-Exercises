var x = 5;
var silnia = 1;

for ( var i=1; i<=x; i++){
    silnia *= i;
}
console.log(silnia);


//zadanie z wykladowca
var n = 5;
z = "";
for (var i=0; i<n; i++){
  z= "";
  for (var j=0; j<n; j++){

    if(i===0 || i === n-1){
        z = z + "*";

    } else{
      if (j === 0 || j === n-1){
        z = z + "*";
      } else {
        z = z + " ";
      }

    }
  }
    console.log(z);
}


//wersja z while
/*
var i=0;
var j=0;
var n = 5;
var z="";
while (i < n)
{
  while (j < n)
  {
    if(i===0 || i === n-1)
    {
        z = z + "*";
    }
    else
      {
        if (j === 0 || j === n-1)
        {
          z = z + "*";
        } else
            {
              z = z +" ";
            }
      }
      j++;
  }
  i++;
  console.log(z);
}*/

// zadanie 1
var n = 13;
for(var i=0; i<=n; i++)
  {
    if ( (i%2) == 0)
    console.log(i+" - parzysta");
    else
    console.log(i+" - nieparzysta");
  }

// zadanie 2
var x = 5;
var y = 10;
var suma = 0;
  for(var i = x;  i <= y; i++){
    suma += i;
  }
console.log(suma);

// zadanie 3
var en = 5;
var z = "";

for(var i=0; i < en; i++)
{
  z="";
  for (var j=0; j<en; j++)
  {
    if ( (i+j)%2 !== 0)
       z = z + "*";
    else
      z = z +  " ";
  }
  console.log(z);
}
