/*
function odliczanie() {

    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if(godzina<10) godzina = "0" + godzina;

    var minuta = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();
    if(sekunda<10) sekunda = "0" + sekunda;

    document.getElementById("zegar").innerHTML =
        dzien + '/' + miesiac + '/' + rok + '|' + godzina + '.' + minuta + '.' + sekunda

    setTimeout('odliczanie()', 1000);
}
*/

function posortujAlfabetycznie(ddd){
    var arr = ddd.split(' '); //podzielilo na liter
    console.log(arr);
    console.log(arr.pop());
    console.log(arr.length -1);
    var arr1 = arr.sort(); // posortowało alfabetycznie
    console.log(arr1);
    var arr2 = arr.join(''); //zlacztylo posortowane
    console.log(arr2);
    console.log('dlugosc ' + arr.length);
}

posortujAlfabetycznie('pojedziemy na marsa w 2034');

function koniecStringa(ddd){

    console.log(ddd.endsWith('dupa'));//zwroci true
}

koniecStringa('no to dupa');


function reverseString(ddd){
    var arr = ddd.split(' '); //podzielilo na liter
    console.log(arr);
    var arr1 = arr.reverse(); // posortowało alfabetycznie
    console.log(arr1);
    var arr2 = arr.join(' '); //zlacztylo posortowane
    console.log(arr2);
    console.log('dlugosc ' + arr.length);
}

reverseString('patryk kosznik');











