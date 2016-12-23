"use strict";

function calculator(){
 var x;
var y;
    this.setx=function(valx){
        x=valx;
    }
     this.sety=function(valy){
        y=valy;
    }
    this.getx=function(){
        return x;
    }
     this.gety=function(){
        return y;
    }
    this.add=function(){
        return x+y;
    }
    this.substract=function(){
        return x-y;
    }
    this.multiply= function(){
        return x*y;
    }
    this.divide=function(){
        return x/y;
    }
    this.testingOutput=function(){
        var result=this.add()+"<br>";
        result+= this.substract()+"<br>";
        result+= this.multiply()+"<br>";
        result+= this.divide()+"<br>";
       // console.log(this.add());
        //console.log(this.substract);
        //console.log(this.multiply);
        //console.log(this.divide);
        return result;
    }
      
}

function process(){
     //alert("hello");
    var result;
var calcuatorObj=new calculator();
calcuatorObj.setx(10);
calcuatorObj.sety(50);
result=calcuatorObj.getx()+"<br>";
result+=calcuatorObj.gety()+"<br>";
result+=calcuatorObj.testingOutput();
  document.getElementById("ooo").innerHTML=result;  
   
}