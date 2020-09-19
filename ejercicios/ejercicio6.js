function ejercicio6() {
    var meses = ["Enero", "Febreor", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre"
        , "Octubre", "Noviembre", "Diciembre"]
    for (i in meses) {
        alert(meses[i]);
    }
    var numero = parseInt(prompt("introduce un numero"));
    resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    alert(resultado);
    while (true) {
        var edad = parseInt(prompt("introduce la edad"));
        if (edad < 7) {
            alert("patrulla canina");
        } else if (edad >= 7 && edad <= 13) {
            alert(" Alexa y Katie.");
        } else if (edad >= 14 && edad < 18) {
            alert(" Anne with an E")
        } else if (edad >= 19 && edad < 35) {
            alert("Stranger Things ");
        } else  {
            alert("Sherlock");
        } 
        if (edad >= 45 && edad <= 72) {
            break;
        }
    }
}