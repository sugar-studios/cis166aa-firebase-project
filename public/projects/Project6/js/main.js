// The following project requires the use of the following DOM APIs:
// querySelector(), getElementsByTagName(), querySelectorAll(), and getElementById().
// In order to complete this project successfully, at one point or another, you will have used each of them.

// 1. Using a DOM api, store the header's text in a variable
let headerText = document.querySelector(".header").innerText;

// 2. Using a DOM api, get the number of paragraphs in the page
let paragraphCount = document.getElementsByTagName("p").length;

// 3. Using a DOM api, get the number of heading tags used in the document
//    (Counting h1, h2, h3, h4, h5, h6)
let headingCount = document.querySelectorAll("h1, h2, h3, h4, h5, h6").length;

// 4. Using a DOM api, get the number of list items being used in the unordered list
let listItemsCount = document.querySelectorAll("ul li").length;

// 5. Use the correct DOM api to count the number of links being used in the page
let linkCount = document.getElementsByTagName("a").length;

// 6. Set a variable to show the maximum number of links allowed on the page is 3
let maxLinks = 3;

// 7. Create an if/else statement that checks if the total number of links on the page
//    is greater than the maximum number of links allowed. If it is, print a warning message.
//    Otherwise, print a message saying it's within the limit.
let outputDiv = document.getElementById("output");

// Build a readable summary
outputDiv.innerHTML = `
  The article title is <strong>${headerText}</strong>.<br>
  This page has <strong>${paragraphCount}</strong> paragraphs and a total of 
  <strong>${listItemsCount}</strong> list items.<br>
  There are a total of <strong>${headingCount}</strong> heading tags and 
  <strong>${linkCount}</strong> links used on the page.<br>
`;

// Check link limit
if (linkCount > maxLinks) {
  outputDiv.innerHTML += `
    <span style="color: red;">This is too many links. The limit is ${maxLinks}.</span>
  `;
} else {
  outputDiv.innerHTML += `
    <span style="color: green;">Number of links is within the limit.</span>
  `;
}
