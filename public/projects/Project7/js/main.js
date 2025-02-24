/*
  1) LOAD EVENT
*/
window.addEventListener("load", function() {
    const loadMessage = document.getElementById("loadMessage");
    loadMessage.textContent = "Page has fully loaded (load event).";
  });
  
  /*
    2) KEYDOWN EVENT
    3) KEYUP EVENT
*/
  const textInput = document.getElementById("textInput");
  const typingInfo = document.getElementById("typingInfo");
  
  textInput.addEventListener("keydown", function() {
    typingInfo.textContent = "You are pressing a key... (keydown)";
  });
  
  textInput.addEventListener("keyup", function() {
    typingInfo.textContent = "You released the key! (keyup)";
  });
  
  /*
    4) MOUSEENTER EVENT
    5) MOUSELEAVE EVENT
*/
  const hoverBox = document.getElementById("hoverBox");
  
  hoverBox.addEventListener("mouseenter", function() {
    hoverBox.textContent = "Mouse entered the box! (mouseenter)";
  });
  
  hoverBox.addEventListener("mouseleave", function() {
    hoverBox.textContent = "Hover over me!";
  });
  
  /*
    6) CLICK EVENT
*/
  const clickBtn = document.getElementById("clickBtn");
  const clickMessage = document.getElementById("clickMessage");
  
  clickBtn.addEventListener("click", function() {
    clickMessage.textContent = "Button clicked! (click)";
  });
  
  /*
    7) DBLCLICK EVENT
*/
  const dblClickBox = document.getElementById("dblClickBox");
  const dblClickMessage = document.getElementById("dblClickMessage");
  
  dblClickBox.addEventListener("dblclick", function() {
    dblClickMessage.textContent = "Box was double-clicked! (dblclick)";
  });
  
  /*
    8) FOCUS EVENT
*/
  const focusInput = document.getElementById("focusInput");
  
  focusInput.addEventListener("focus", function() {
    focusMessage.textContent = "Input is in focus. (focus)";
  });
  
  /*
      9) BLUR EVENT
*/
  const focusMessage = document.getElementById("focusMessage"); 

  focusInput.addEventListener("blur", function() {
    focusMessage.textContent = "Input has lost focus. (blur)";
  });
  
  /*
    10) CHANGE EVENT
*/
  const colorSelect = document.getElementById("colorSelect");
  const selectedColor = document.getElementById("selectedColor");
  
  colorSelect.addEventListener("change", function() {
    selectedColor.textContent = "You selected: " + colorSelect.value + " (change)";
  });
  