function nombreDeportes(){
    
   var deporte=prompt("dime un nombre de un depor");
   var deporte1=prompt("dime otro deporte");
   var deporte2=prompt("dime un deporte mas");

   try{
       unionDeportes(deporte,deporte1,deporte2);
   }catch(error){
    console.error(error.message);
   }finally{
       alert("El programa ha terminado");
   }
}
function unionDeportes(){
    var resultado="";
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]==""){
            throw new Mierror(" no has introducido el valor " +(i));
        }
        if(arguments[i]=="fútbol"){
            throw new Error;
        }
        if(resultado == ""){
            resultado =arguments[i];
        }else{
            resultado = resultado + ", " + arguments[i];
        }
    }
    alert(resultado);
}
function Mierror(mensaje){
    this.message = "Ha habido un problema " + mensaje;
}
Mierror.prototype = Object.create(Error.prototype);
Mierror.prototype.name = "Mierror";