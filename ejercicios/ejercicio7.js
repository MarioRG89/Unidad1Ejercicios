function ejercicio7(var1){
var soyDeLaFuncion= "z";
    if(var1==1){
        let soyDelIf="soyDeLaFuncion";
        console.log(soyDelIf);
        //Si intento mostrar el mostrar la variable let fuera del bloque no lo permite porque se sale del bloque y esta deja de ser "visible"
    }else{
        const soyConstante="c";
        console.log(soyConstante);
    }
    soyConstante="constante";
console.log(var1 + " "  + soyConstante + " " +   soyDeLaFuncion);

}