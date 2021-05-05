var currentUrl = window.location.href;
// https://hosuqa.github.io/praktyki2/form.html#zmienna&zmienna
var modelsn = currentUrl.split("#").pop();
// modelsn = zmienna&zmienna
var [model, sn] = modelsn.split('&');

document.getElementById("modelow").innerHTML = "(SN: "+sn+")"+", "+model;




