/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  console.log("El DOM ha cargado correctamente");
  document.querySelector("#butt").addEventListener("click", function() {
    document.querySelector("#excusa").innerHTML = geneexcusa();
  });
  function geneexcusa() {
    let sujeto = [
      "Jose",
      "Mi mamá",
      "Mi gato",
      "El tráfico",
      "El internet",
      "El perro"
    ];
    let accion = [
      "se comió",
      "perdió",
      "desapareció",
      "llegó",
      "tocó",
      "limpió",
      "encontró"
    ];
    let donde = [
      "el carro",
      "mi tarea",
      "las llaves",
      "el portátil",
      "la carne"
    ];

    let sujetoin = sujeto[Math.floor(Math.random() * sujeto.length)];
    let accionin = accion[Math.floor(Math.random() * accion.length)];
    let dondein = donde[Math.floor(Math.random() * donde.length)];

    return sujetoin + " " + accionin + " " + dondein + ".";
  }
};
