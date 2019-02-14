// ==UserScript==
// @name         graphColour
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

// target element : day
// attribute to change: fill

var elem = document.getElementsByClassName("day");
var legend = document.getElementsByClassName("legend")[0];

var LEVEL4 = '#db11c7';
var LEVEL3 = '#db43cc';
var LEVEL2 = '#e08bd7';
var LEVEL1 = '#d8bcd5';
var LEVEL0 = '#e5e3e5';

legend.getElementsByTagName('li')[4].style.background = LEVEL4;
legend.getElementsByTagName('li')[3].style.background = LEVEL3;
legend.getElementsByTagName('li')[2].style.background = LEVEL2;
legend.getElementsByTagName('li')[1].style.background = LEVEL1;
legend.getElementsByTagName('li')[0].style.background = LEVEL0;

(function() {
    'use strict';

    // Your code here...
    for(var i=0; i<elem.length; i++){
        var currElem = elem[i];
        var count = parseInt(currElem.getAttribute("data-count"));

        if (count>=18){
                currElem.style.fill = LEVEL4;
            }else if (count>=11){
                currElem.style.fill = LEVEL3;
            }else if (count>=5){
                currElem.style.fill = LEVEL2;
            }else if (count>=1){
                currElem.style.fill = LEVEL1;
            }else{
                currElem.style.fill = LEVEL0;
            }
        }
})();
