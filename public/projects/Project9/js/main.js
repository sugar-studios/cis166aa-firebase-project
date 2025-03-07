//create a global variable called result
let result;

//create a function called getLocation
function getLocation() {
  //create a variable that sets the value of true if the browser is Chrome
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  //create an if statement with the following condition: 
  // if geolocation and the browser is Chrome, are both true, then show current position.
  // Additionally, display a message that says "You're using Chrome, so you're cool!"
  if (navigator.geolocation && isChrome) {
    navigator.geolocation.getCurrentPosition(showPosition);
    document.getElementById('msg').innerHTML = "You're using Chrome, so you're cool!";
  
  //otherwise if the browser is not Chrome, then display a message that says 
  //"You're not on the cool list. Then display a link that will send the user to Chrome's download page."
  } else if (navigator.geolocation && !isChrome) {
    document.getElementById('msg').innerHTML = 
      `You're not on the cool list. 
       <a href="https://www.google.com/chrome/" target="_blank">Download Chrome</a>`;
    
  //if the above conditions are not met, then display a message that says 
  //"Geolocation is not supported by this browser."
  } else {
    document.getElementById('msg').innerHTML = "Geolocation is not supported by this browser.";
  }
}

//create a function that will output the position to HTML. 
//Use this html format and add a second css file: "<!DOCTYPE html> ... (see instructions)"
function showPosition(position) {
  // Store coordinates in the global variable 'result' if needed
  result = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };

  // Output position to #result in the format requested
  document.getElementById('result').innerHTML = `
    Latitude: ${position.coords.latitude} <br/>
    Longitude: ${position.coords.longitude} <br/><br/>`;
}
