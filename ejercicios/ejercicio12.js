function calcularPrecioFinal(precio,iva){
    var precioTotal;
    switch(iva){
        case "G":
        precioTotal= precio * 0.21;
         alert("el precio final del articulo es " + precioTotal );
        case "R":
        precioTotal= precio * 0.1;
        alert("el precio final del articulo es " + precioTotal );
        case "S":   
        precioTotal= precio * 0.04;
        alert("el precio final del articulo es " + precioTotal );
    }
}
function pagar(){
    var iva=prompt("Que tipo de IVA tiene  el articulo escriba G para general, R para reducido y S para supereducido " )
    var precio=parseInt(prompt("¿Que precio tiene el articulo?"));
    calcularPrecioFinal(precio,iva);
}