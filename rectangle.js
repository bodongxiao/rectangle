/* global Rectangle: true */
var wid = document.getElementById('width');
var hei = document.getElementById('height');
var btn = document.getElementById('calculate');
var per = document.getElementById('perimeter');
var are = document.getElementById('area');

function doit(){
    per.value = 2*wid.value + 2*hei.value;
    are.value = wid.value * hei.value;

}
