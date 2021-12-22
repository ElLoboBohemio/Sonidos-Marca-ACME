"use strict";

alert('Haz click en el logo de \"ACME\"'); //Definir audios

var audio0 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-truck-horn-720.mp3");
var audio1 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-cartoon-toy-whistle-616.mp3");
var audio2 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-cartoon-clown-fun-nose-sound-528.mp3");
var audio3 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-cartoon-failure-piano-473.mp3");
var audio4 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-trombone-disappoint-744.mp3");
var audio5 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-soft-quick-punch-2151.mp3");
var audio6 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-spinning-whistle-toy-2647.mp3");
var audio7 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sounds-2886.mp3"); //Audios en Arr

var audioArr = [audio0, audio1, audio2, audio3, audio4, audio5, audio6, audio7]; //Llamar btn y caja

var boton = document.getElementById("btn-marca-acme");
var caja = document.querySelector(".caja_verticales"); //EventListener con fx Math.random, reproducir audio y animación

boton.addEventListener('click', function () {
  //Audio
  var randomNumAudio = Math.floor(Math.random() * 8);
  audioArr[randomNumAudio].play(); //Animacion

  var randomNumAnimacion = Math.floor(Math.random() * 2);

  if (randomNumAnimacion === 1) {
    caja.classList.add('animacion1');
    setTimeout(function () {
      return caja.classList.remove('animacion1');
    }, 250);
  } else {
    caja.classList.add('animacion2');
    setTimeout(function () {
      return caja.classList.remove('animacion2');
    }, 250);
  }
});