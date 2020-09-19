alert("¡Hola Mundo 2 !");
function mostrarVariables(){
    alert("Variable1:" + variable1);
    variable2=null;
    alert(variable2);
    var variable1=34;
    variable3=15.9;
    alert(variable1 * variable3);
    variable3="ahora soy un texto";
    alert(variable3);
    alert(variable3 * 35);
}
function comprobarOperadores(){
    var1="Hola";
    var2="Adios";
    alert(var1==var2);
    alert(var1!=var2) ;
    alert(var1<var2) ;
    alert(var1>var2); 
    alert(var1<=var2); 
    alert(var1>=var2);
    var3=56;;
    var4="35";
    alert(var3==var4,var3===var4);
    var5=5;
    var6=8;
    var7=2;
    alert(var5<var6);
    alert(var6<var7);
    alert(var5<=var6);
    alert(var6>var7);
    var7=!true;
    alert(var7);
}