function calculoVariables(){
    try{
        do{
        var1=parseInt(prompt("introduce un numero"));
        var2=parseInt(prompt("introduce  numero 2"));
        var3=parseInt(prompt("introduce  numero 3"));
        if(var2==3 || var3==3){
            continue;
            } 
        resultado=var1 + var2 +var3;
        if(isNaN(var1) || isNaN(var2)|| isNaN(var3) ){
            throw 'error';
        }
        console.log(resultado);
    } while(true); 
    }catch(error){
        if(error=='error'){
            console.error("No es un numero");
        }
    }
}
