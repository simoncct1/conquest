//affichage date
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
document.getElementById('clock').innerHTML =
    date +"</br>" + time;
console.log(dateTime)
//passwords
import * as SoloAlert from "soloalert"
document.getElementById('MS').addEventListener("click", validatePassMS);
function validatePassMS(){
    
SoloAlert.prompt({
    // dialog title
    title: "Entrez le mot de passe",
    // dialog content
    body: "",
    // input type
    type: "password",
    // max number of characters
    textLimit: 15,
    // or "light", "dark"
    theme: "dark",
    // additional HTML content
    html: "",
    useTransparency: true
}).then(value => {
       var password= 1234;
            if (value == password) {
   window.location.replace(
    "index.html"
  )      
    }
    else 
    {
        SoloAlert.alert({
            title:"Mauvais mot de passe",
            body:"Veuillez ré-essayer",
            useTransparency: true,
          })
    
    }
})}
  
document.getElementById('DB').addEventListener("click", validatePassDB);
function validatePassDB(){
    
SoloAlert.prompt({
    // dialog title
    title: "Entrez le mot de passe",
    // dialog content
    body: "",
    // input type
    type: "password",
    // max number of characters
    textLimit: 15,
    // or "light", "dark"
    theme: "dark",
    // additional HTML content
    html: "",
    useTransparency: true
}).then(value => {
       var password= 1234;
            if (value == password) {
   window.location.replace(
    "index.html"
  )      
    }
    else 
    {
        SoloAlert.alert({
            title:"Mauvais mot de passe",
            body:"Veuillez ré-essayer",
            useTransparency: true,
          })
    
    }
})}
//redirect to index
document.getElementById('logo').addEventListener("click", openParams);
var click = false;
function openParams(){
    click = !click
    if(click==true){
        document.getElementById('params').classList.add("params");
    }else{
        document.getElementById('params').classList.remove("params"); 
    }
   
}

