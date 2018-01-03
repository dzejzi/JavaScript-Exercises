var button = document.querySelector(".button");
var menu = document.querySelector(".menu");

button.addEventListener("click", function() {
    var newLi = document.createElement("li");
    menu.appendChild(newLi);
    newLi.innerHTML = "list element " + (menu.children.length - 1).toString();

});

var button = document.getElementById("addBtn");
var ordersTable = document.getElementById("orders");
var rowToClone = ordersTable.children[0].lastElementChild;
console.log(rowToClone);

button.addEventListener("click", function() {
    // get values of input fields
    var orderId = document.getElementById("orderId");
    var item = document.getElementById("item");
    var quantity = document.getElementById("quantity");

    // clone row from existing html table
    var newOrder = rowToClone.cloneNode(true);
    // append new element to existing table as last child
    ordersTable.lastElementChild.appendChild(newOrder);
    var orderRow = ordersTable.lastElementChild.lastElementChild.firstElementChild;

    orderRow.innerHTML = orderId.value;
    orderRow.nextElementSibling.innerHTML = item.value;
    orderRow.nextElementSibling.nextElementSibling.innerHTML = quantity.value;

});

var removeButton = document.getElementById('remove');
removeButton.addEventListener("click", function() {
    this.parentNode.removeChild(this);

});

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".button");
    button.addEventListener("click", function() {

        var parentDelete = this.previousElementSibling;
        var toDelete = this.previousElementSibling.children;
        //console.log(parentDelete);
        //  console.log(toDelete);
        i = 0;
        while (toDelete.length > 0) {
            parentDelete.removeChild(toDelete[i]);
        }

    });

});

var deleteButton = document.getElementsByClassName("deleteBtn");
console.log(deleteButton);

for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function() {
        //  console.log(this);
        var toErease = this.parentElement.parentElement;
        toErease.parentNode.removeChild(toErease);
    });
}
