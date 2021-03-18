// ==UserScript==
// @name        New script - lonerwolf.com
// @namespace   Violentmonkey Scripts
// @match       https://lonerwolf.com/*
// @grant       none
// @version     1.0
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @author      -
// @description 3/18/2021, 12:39:30 PM
// ==/UserScript==

// let myBarContainer = document.createElement("div");
// let myBar = document.createElement("div");
// let site-inner = document.querySelectorAll(".site-inner")[0];

// myBar.innerHTML = "<strong>Hi Insertion is working!</strong>";



// myBarContainer.css({
//   "position": "fixed",
//   "height": "100px", 
//   "width": "100%",
//   "background-color": "grey"
// })

// myBarContainer.innerHTML = "insertion is working";

// $("#genesis-content").prepend(myBarContainer)
// myBar.setAttribute("style", "position: fixed; height: 10px; width: 100%; background-color: blue;")

// myBarContainer.appendChild(myBar);
// document.body.append(myBarContainer);

let height = 10;
$('body').prepend(
  `<div style="position: fixed; top: 0; left: 0; height: ${height}px; width: 100%; background-color: grey; z-index: 2000;"><div id="progressbar" style="height: ${height}px; position: inherit; background-color: blue;"></div></div>`);

window.onscroll = function() {myFunction()};

function myFunction() {
  // var winScroll = $(".entry-content").scrollTop;
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressbar").style.width = scrolled + "%";
}
