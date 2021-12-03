
//desafio 2 //
let numero1 = parseInt(prompt("ingrese un numero distinto de 0"))
let numero2 = parseInt(prompt("ingrese un numero distinto de 0"))

function suma(num1,num2){
    const suma = num1 + num2;
    return suma;
}
document.write("el resultado de la suma es : "+ suma(numero1,numero2)+ "<br>")

function resta(num1,num2){
    const resta = num1 - num2;
    return resta;
}
document.write("el resultado de la resta es : "+ resta(numero1,numero2)+ "<br>")

function multi(num1,num2){
    const multi = num1 * num2;
    return multi;
}
document.write("el resultado de la multiplicacion es : "+ multi(numero1,numero2)+ "<br>")

function divi(num1,num2){
    const divi = num1 / num2;
    return divi;
}
document.write("el resultado de la divicion es : "+ divi(numero1,numero2)+ "<br>")

function modu(num1,num2){
    const modu = num1 % num2;
    return modu;
}
document.write("el modulo es : "+ modu(numero1,numero2)+ "<br>")

// desafio 3 //

let celsius = parseInt(prompt("ingrese grados celsius"))
const kelvin = 273.15;
const fahrenheit = 32;

function kel(cels){
    const grados = cels + kelvin
    return grados ;
}
function fahr(cels){
    const grados = cels * 9/5 + fahrenheit
    return grados ;
}
document.write("grados kelvin : " + kel(celsius) +"<br>")
document.write("grados fahrenheit : " + fahr(celsius) +"<br>")

// desafio 5 //

let number1 = parseInt(prompt("ingrese un numero "))
let number2 = parseInt(prompt("ingrese un numero "))
let number3 = parseInt(prompt("ingrese un numero "))
let number4 = parseInt(prompt("ingrese un numero "))
let number5 = parseInt(prompt("ingrese un numero "))

function sumar(num1,num2,num3,num4,num5){
    var resultado = num1+num2+num3+num4+num5
    return resultado ;
}
function promedio(num1,num2,num3,num4,num5){
    var result = num1+num2+num3+num4+num5/5
    return result ;
}
document.write("la suma es : " + sumar(number1,number2,number3,number4,number5)+ "<br>")
document.write("el promedio es : " + promedio(number1,number2,number3,number4,number5)+ "<br>")