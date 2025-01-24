// Create an array of Avengers
let avengers = [
    "Thor",
    "Wasp",
    "Captain America",
    "Iron Man",
    "Hulk",
    "Vision",
    "Hank Pym",
    "Black Panther",
    "Quicksilver",
    "Mantis",
    "Spiderman"
];

// Remove the last item using pop
avengers.pop(); 

// Add 'Black Widow' to the list using push
avengers.push("Black Widow");

// Use splice to insert 'Nebula' and 'Moondragon' at position 2, removing 6 items
avengers.splice(2, 6, "Nebula", "Moondragon");

// Create a new array of Justice League members
let justiceLeague = [
    "Batman",
    "Superman",
    "Wonder Woman",
    "Flash",
    "Green Lantern",
    "Aquaman"
];

// Combine both arrays using concat
let allTheKids = avengers.concat(justiceLeague);

// Sort the combined array alphabetically, then reverse the order
allTheKids = allTheKids.sort().reverse(); 

// Output the new array to the HTML with line breaks after each name
let outputDiv = document.getElementById("output");
allTheKids.forEach(name => {
    outputDiv.innerHTML += name + "<br>";
});
