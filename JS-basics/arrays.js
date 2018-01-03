// zadanie 1
var array=[205, 28, 30];
for(var i=0; i<array.length; i++)
{
  console.log( array[i] );
}

// zadanie 2
var owoce=["gruszka", "jablko", "pomarancz", "arbuz", "winogrono"]
console.log(owoce[(owoce.length)-1]);

for(var i=0; i<owoce.length; i++)
{
  console.log( owoce[i] );
}

// zadanie 3
var tablica=[12, " Krzys ", "urodzil ", "sie ", 13, " marca ", 1990, " roku."]
var sum = 0;
for(var i=0; i<tablica.length; i++)
{
  sum += ( tablica[i] );
}
console.log(sum);

// zadanie 4
var tab=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var suma=0;
for(var i=0; i<tab.length; i++)
{
  if(tab[i]%2 == 0)
  suma += tab[i];
}
console.log(suma);

// zadanie 5
var arr=[10, 9, 87, 7, 6, 50, 4, 34, 201, 11];
var max =0;
for(var i=0; i<arr.length; i++)
{
  if(arr[i]>max)
  max =arr[i];
}
console.log(max);

//zadanie 6
var tabl=[10, 6, 81, 7, 9, 50, 81, 6, 201, 6];
firstIndex=-1;
for (var i=0; i<tabl.length; i++)
{
    if (firstIndex== -1)
    {
        for (var j=i+1; j<tabl.length; j++)
        {
            if (tabl[i]===tabl[j])
            {
                firstIndex = i;
                console.log(firstIndex);
                break;
            }
        }
    }
    else
    {
        break;
    }
}

// zadanie 7
var arra=[10, 9, 87, 7, 6, 50, 87, 6, 201, 11];
for(var i=(arra.length-1); i>=0; i--)
{
  console.log(arra[i]);
}
