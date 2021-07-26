//llamar datos de html
var a1 = document.getElementById("A");
var b2 = document.getElementById("B");
var c3 = document.getElementById("C");
var d4 = document.getElementById("D");
var e5 = document.getElementById("E");
var f6 = document.getElementById("F");
var boton1 = document.getElementById("boton");

var txt = document.querySelector('inputx');
var txt2 = document.querySelector('inputy');

boton1.addEventListener("click", click );

function click()
{
var a = parseFloat(a1.value);
var b = parseFloat(b2.value);
var c = parseFloat(c3.value);
var d = parseFloat(d4.value);
var e = parseFloat(e5.value);
var f = parseFloat(f6.value);
g=a*e-b*d;
if(g==0){
    var L = (" No hay solución");
    txt.textContent = L;
    txt2.textContent = L;
}
else{
x=(c*e-b*f)/g;
y=(a*f-c*d)/g;

    txt.textContent = x;
    txt2.textContent = y;
    console.log(x);
    console.log(y);
}
}