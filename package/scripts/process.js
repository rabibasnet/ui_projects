"use strict";
   //alert("Hello World");
function processForm(){
  //alert (firstName);
    event.preventDefault();
    
    var flag= false;
    var firstName, lastName, address,password,xResults,dhokro="firstName required", hokro="lastname required", okro="address required", kro="password required";
    
    
    firstName=document.getElementById('firstName').value;
    lastName=document.getElementById('lastName').value;
    address=  document.getElementById('address').value;
    password=document.getElementById('password').value;
    //def="enter you FName";
    
   // console.log('firstName-->' +firstName);
    //console.log('lastName-->' +lastName);
    //console.log('address-->' +address);
//    console.log('password-->' + password);
    
    
    
xResults='firstName-->' +firstName;
xResults +='<br>lastName-->' +lastName;
xResults +='<br>address-->' +address;   
xResults +='<br>password-->' +password;  
//xResults +='<br>cars-->' +cars;
    console.log(firstName.length);
    
    if (firstName.length==0){
        flag=true;
        khali(dhokro);
    }
     if (lastName.length==0){
        flag=true;
         khal(hokro);
         alert("ghanta jasto");
     }
          if (address.length==0){
        flag=true;
              kha(okro);
          }
    if (password.length==0){
        flag=true;
              kh(kro);
          }
    if (flag){
        alert('error');
    
    }
    else{
        alert('form submit');
        results(xResults);
    }

}
function results(paramResults){
    document.getElementById("results").innerHTML= paramResults;}
   
  function khali(abc){
    document.getElementById("khali").innerHTML= abc;}
          
   function khal(abcd){
    document.getElementById("khal").innerHTML= abcd;}      
         
   function kha(ab){
    document.getElementById("kha").innerHTML= ab;}      
 function kh(abb){
    document.getElementById("kh").innerHTML= abb;}      

