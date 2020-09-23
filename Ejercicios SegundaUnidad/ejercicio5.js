function pedirFecha(){
    var dia= prompt("Introduzca el día");
    var mes=prompt("Que mes es: ");
    var anno=prompt("Que año es")
    alert("Hoy es " + dia + " de " + mes + " de " + anno);
 }
 function combinacionNumeros(){
   var1= parseInt(prompt("introduzca un numero"));
   var2= parseInt(prompt("introduzca otro numero"));      
   alert(var1 * var2);
   alert(var1 / var2);
   alert(var1 - var2);
   alert(var1^2 - var2^2);
   if(var1>0){
       alert(var1);
   }else if(var2>0){
       alert(var2);
   }
 }