function dosNumeros(){
    var1=parseInt(prompt("introduzca un numero"));
    var2=parseInt(prompt("introduzca un segundo numero"));
    resultado=(Math.pow(var1,var2));
    alert("el resultado de elevar el primero por el segundo es " + resultado);

}
function autentificacion(){
    var usuario=prompt("Introduzca el nombre de usuario");
    var password=prompt("Introduzca la contraseña");
    while(true){
        var repetPass=prompt("Repita la contraseña");
        if((repetPass=="abcd")){
            alert("El usuario es " + usuario + "y la contraseña es " + password) ;
            break;
        }else{
            continue;
        }
    }  
}
function solicitudNumLet(){
   var filas=parseInt(prompt("Introduce un numero"));
   var columnas=parseInt(prompt("Introduce otro numero"));
   var caracter=prompt("introduce una letra");
    var resultado = "";
    while(filas > 0 ) {
        let numeroColumnas = columnas;
        while (numeroColumnas > 0) {
            resultado = resultado + caracter;
            numeroColumnas--;
        }
        resultado = resultado + "\n";
        filas--;
    }
    alert(resultado);
}