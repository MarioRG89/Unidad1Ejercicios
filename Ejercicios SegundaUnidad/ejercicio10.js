function calculoVariables(){
     while(true){
        var1=parseInt(prompt("introduce un numero"));
        var2=parseInt(prompt("introduce otro numero"));
        console.log(var1 + var2);
        resultado=var1 + var2;
        var3=parseInt(prompt("introduce otro numero"));
        console.log(resultado + var3);
        if( isNaN(var1) || isNaN(var2)|| isNaN(var3)){
            throw new exceptionNoNumero;
        }  
     }  
}
function exceptionNoNumero(){
    this.message="Error:" + "No has introducido numeros"
}
