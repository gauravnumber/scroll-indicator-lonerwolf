// ==UserScript==
// @name        Lonerwolf
// @namespace   Violentmonkey Scripts
// @match       https://lonerwolf.com/*
// @grant       none
// @version     1.0
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @author      -
// @description 3/18/2021, 12:39:30 PM
// ==/UserScript==

let height = 10;
$('body').prepend(
  `<div style="position: fixed; top: 0; left: 0; height: ${height}px; width: 100%; background-color: grey; z-index: 2000;"><div id="progressbar" style="height: ${height}px; position: inherit; background-color: blue;"></div></div>`);

$(".swp_social_panel").hide();

window.onscroll = function() {myFunction()};

function myFunction() {
  // var el = document.getElementsByClassName("post");
  // var el = document.querySelector("article");
  var el = document.documentElement;

  var winScroll = el.scrollTop;
  // var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = el.scrollHeight - el.clientHeight;
  // var height = document.documentElement.scrollHeight - el.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressbar").style.width = scrolled + "%";
}
