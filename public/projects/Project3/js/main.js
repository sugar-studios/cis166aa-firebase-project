// Example:
function getChoc() {
    var boxChoc = 6;
    return boxChoc * 500;
}
document.getElementById("example").textContent = "There are a total of " + getChoc() + " pieces of chocolate.";

/*
1. The Ferris wheel in Paradise Park has 14 seats. 
Each seat can hold 6 people. How many people can 
ride the Ferris wheel at the same time?
*/
function ferrisWheelCapacity() {
    var seats = 14;
    var peoplePerSeat = 6;
    return seats * peoplePerSeat;
}
document.getElementById("prob1").textContent = "The Ferris wheel can hold " + ferrisWheelCapacity() + " people at the same time.";

/*
2. A garden has 52 rows and 15 columns of bean plants. 
How many plants are there in all?
*/
function totalPlants() {
    var rows = 52;
    var columns = 15;
    return rows * columns;
}
document.getElementById("prob2").textContent = "There are " + totalPlants() + " bean plants in the garden.";

/*
3. Julian is writing a comic book. His story has 143 frames 
in all. If he wants to put exactly 11 frames on each page, 
how many pages would he have?
*/
function comicBookPages() {
    var totalFrames = 143;
    var framesPerPage = 11;
    return Math.ceil(totalFrames / framesPerPage);
}
document.getElementById("prob3").textContent = "Julian will need " + comicBookPages() + " pages for his comic book.";

/*
4. It takes 4 feet of cotton to make a tee-shirt. 
How many tee-shirts can be made with 60 feet of material?
*/
function tShirtsMade() {
    var totalCotton = 60;
    var cottonPerShirt = 4;
    return Math.floor(totalCotton / cottonPerShirt);
}
document.getElementById("prob4").textContent = "With 60 feet of material, " + tShirtsMade() + " tee-shirts can be made.";

/*
5. The Razorback T-shirt Shop makes $9 dollars off each
t-shirt sold. During the Arkansas and Texas Tech game
they sold 200 t-shirts. How much money did they make
from selling the t-shirts?
*/
function totalEarnings() {
    var pricePerShirt = 9;
    var shirtsSold = 200;
    return pricePerShirt * shirtsSold;
}
document.getElementById("prob5").textContent = "The Razorback T-shirt Shop made $" + totalEarnings() + " from selling the t-shirts.";

/*
6. Warren has 248 guests coming to his party.
Each table will hold 4 guests. How many tables
will he need? If each table has 2 candles,
how many candles will he need?
*/
function tablesAndCandles() {
    var guests = 248;
    var guestsPerTable = 4;
    var tablesNeeded = Math.ceil(guests / guestsPerTable);
    var candlesPerTable = 2;
    var totalCandles = tablesNeeded * candlesPerTable;
    return { tables: tablesNeeded, candles: totalCandles };
}
var result6 = tablesAndCandles();
document.getElementById("prob6").textContent = "Warren will need " + result6.tables + " tables and " + result6.candles + " candles.";

/*
7. Beth has 4 packs of Crayons. Each pack has 10 
crayons in it. She also has 6 extra Crayons.
How many Crayons does Beth have altogether?
*/
function totalCrayons() {
    var packs = 4;
    var crayonsPerPack = 10;
    var extraCrayons = 6;
    return (packs * crayonsPerPack) + extraCrayons;
}
document.getElementById("prob7").textContent = "Beth has a total of " + totalCrayons() + " crayons.";
