// zadanie z wykladowca
function checkArray(givenArray) {
    var resultsArray = [];

    for (var i = 0; i < givenArray.length; i++) {

        var defaultValue = true;

        for (var j = 0; j < givenArray[i].length; j++) {
            if (givenArray[i][j] % 2 !== 0) {
                defaultValue = false;
            }
        }
        resultsArray.push(defaultValue);
    }
    return resultsArray;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

/*output
var arrayCheck = [
    false, // bo 11
    true,
    true,
    true,
    false, // bo 1
];*/
console.log(checkArray(arr));

console.log("*********zadanie1*********");
//zadanie1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

console.log("*******zadanie2***********");
//zadanie2

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(task2Array);

for (var i = 0; i < task2Array[0].length; i++) {
    console.log(task2Array[0][i]);
}

console.log("------------");

for (var i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}

console.log("------------");

for (var i = 0; i < task2Array.length; i++) {
    for (var j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

console.log("*******zadanie3***********");
//zadanie3

function print2DArray(arrayThree) {
    for (var i = 0; i < arrayThree.length; i++) {
        for (var j = 0; j < arrayThree[i].length; j++) {
            console.log("i: ", i, "j: ", j, "val: ", arrayThree[i][j]);
        }
    }
}

var task3Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
print2DArray(task3Array);

console.log("*******zadanie4***********");
//zadanie4 //
var arrayFourResult = [];
var rowsFour = 8;
var colsFour = 3;

for (var i = 1; i <= rowsFour; i++) {
    var arrayFourRows = [];
    for (var j = 1; j <= colsFour; j++) {
        arrayFourRows.push(j);
    }
    arrayFourResult.push(arrayFourRows);
}
//wypisanie w konsoli za pomoca funkcji z zadania 3
print2DArray(arrayFourResult);


console.log("*******zadanie5***********");
//zadanie5
function create2DArray(row, col) {
    var result2DArray = [];
    var result = 0;

    for (var i = 0; i < row; i++) {
        var rowArray = [];
        for (var j = 0; j < col; j++) {
            result += 1;
            rowArray.push(result);
        }
        result2DArray.push(rowArray);
    }

    return result2DArray;
}

create2DArray(8, 3);

console.log(create2DArray(0, 0));
console.log(create2DArray(1, 1));
console.log(create2DArray(4, 4));
console.log(create2DArray(2, 16));
