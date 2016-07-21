var taxPercentage = 6;
var tipPercentage = 8;
var numberOfDiners = 3;


var Diner = function(id, dishes) {
    this.id = id;
    this.dishes = dishes;
    this.totalMeal = dishes.reduce(function(total, num){ return total + num }, 0);
    this.tax = undefined;
    this.tip = undefined;
    this.grandTotal = undefined;
};

var diner1 = new Diner('Diner 1', [4.00, 15.00, 2.00]);
var diner2 = new Diner('Diner 2', [3.00, 16.00, 5.00]);
var diner3 = new Diner('Diner 3', [2.00, 17.00, 4.00]);

var subtotal = diner1.totalMeal + diner2.totalMeal + diner3.totalMeal;
var totalTax = subtotal * (taxPercentage / 100);
var totalTip = subtotal * (tipPercentage / 100);
var grandTotal = subtotal + totalTax + totalTip;

Diner.prototype.calculateTip = function(tipPercentage) {
    this.tip = this.totalMeal * (tipPercentage /100);
};

Diner.prototype.calculateTax = function(totalTax, numberOfDiners) {
    this.tax = totalTax / numberOfDiners;
};

Diner.prototype.calculateGrandTotal = function() {
    this.grandTotal = this.totalMeal + this.tax + this.tip;
}

var diners = [diner1, diner2, diner3];

console.log('Total Bill:');
console.log('Subtotal - $' + subtotal);
console.log('Tax - $' + totalTax);
console.log('Tip - $' + totalTip);
console.log('Grand Total - $' + grandTotal);
console.log('Breakdown:');

for (var i = 0; i < diners.length; i++) {
    diners[i].calculateTip(tipPercentage);
    diners[i].calculateTax(totalTax, numberOfDiners);
    diners[i].calculateGrandTotal();
    console.log(diners[i].id + ' owes $' + diners[i].grandTotal);
}











// var sampleMeal = {
//     check: {
//         seat1: {
//             soda: 2.00,
//             appetizer: 5.00,
//             main: 15.00
//         },
//         seat2: {
//             beer: 5.00,
//             main: 17.00
//         },
//         seat3: {
//             wine: 7.00,
//             salad: 12.00
//         }
//     },
//     taxPercentage: 6,
//     tipPercentage: 20
// };

// var sampleOutput = {
//     diners: [
//         {
//             subtotal: 24,
//             tax: 2,
//             tip: 5,
//             total: 31
//         },
//         {
//             subtotal: 30,
//             tax: 3,
//             tip: 6,
//             total: 39
//         }
//     ],
//     totalBill: 70
// };

// var output = {};

// var Diner = function(dishes, taxPercentage) {
//     this.dishes = dishes;
//     this.calculsubtotal = subtotal;
//     this.taxPercentage = taxPercentage;
//     this.tax = subtotal * (taxPercentage / 100);
//     this.tip = null;
//     this.outputInfo = function() {
//         return {
//             subtotal: this.subtotal,
//             tax: this.tax,
//             tip: this.tip,
//             total: this.subtotal + this.tax + this.tip
//         };
//     };
// };

// function totalItems(items) {
//     var subtotal = 0;
//     for (var item in items) {
//         subtotal += items[item];
//     }
//     return subtotal;
// }

// function populateDiners(meal) {
//     var diners = [];
//     for (var seat in meal.check) {
//         var subtotal = totalItems(meal.check[seat]);
//         console.log(subtotal);
//     }
//     //push individual info to output.diners
// }

// function printOutput() {
//     console.log('Total Bill: $' + sampleOutput.totalBill);
//     console.log('Owed by diner:');
//     for (var i = 1; i <= sampleOutput.diners.length; i++) {
//         var diner = sampleOutput.diners[i-1];
//         console.log('Diner ' + i + ' owes: $' + diner.subtotal + ' for their food, plus $' + diner.tax + ' in tax and $' + diner.tip + ' in tip, for a total of $' + diner.total);
//     }
// }

// function printBill(meal) {
//     populateDiners(meal);
//     printOutput();
// }

// printBill(sampleMeal);


