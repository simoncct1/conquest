//affichage date
function cc(){
    console.log("cc");
}
cc();
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
document.getElementById('clock').innerHTML =
    date +"</br>" + time;
console.log(dateTime)
//passwords
import * as SoloAlert from "soloalert";
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
    "miska.html"
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
                SoloAlert.prompt({
                    // dialog title
                    title: "Félicitations",
                    // dialog content
                    body: "Veuillez encoder votre addresse mail",
                    // input type
                    type: "email",
        
                    theme: "dark",
                    // additional HTML content
                    html: "",
                    useTransparency: true
                }).then(value => {
                 
                      
                      
                    //   function createCookie(name, value, days) {
                    //     var expires;
                    //     if (days) {
                    //       var date = new Date();
                    //       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    //       expires = "; expires=" + date.toGMTString();
                    //     }
                    //     else {
                    //       expires = "";
                    //     }
                    //     document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";      
                   window.location.replace(
                    "mail.php"
                  )      
                  
              
                })}
})}
//redirect to index
document.getElementById('logo').addEventListener("click", openParams);
var click = false;
function openParams(){
    console.log(click);
    click = !click
    if(click==true){
        document.getElementById('params').classList.add("params");
    }else{
        document.getElementById('params').classList.remove("params"); 
        document.getElementById('qual').classList.remove("ok")
        document.getElementById('screen').classList.remove("ok"); 
        document.getElementById('profil').classList.remove("ok"); 
    }
   
}
//open profile
document.getElementById('profile').addEventListener("click", openProfile);
var click2 = false;
function openProfile(){
    click2 = !click2
    if(click2==true){
        document.getElementById('profil').classList.add("ok");
        document.getElementById('qual').classList.remove("ok")
        document.getElementById('screen').classList.remove("ok"); 
    }else{
        document.getElementById('profil').classList.remove("ok"); 
      ; 
    }
   
}
//set div profile height
var hauteur = document.getElementById('params').style.height
document.getElementById('profil').style.height = hauteur;

//open paramsQual
document.getElementById('param').addEventListener("click", openQual);
var click3 = false;

function openQual(){
   
    click3 = !click3
    if(click3==true){
        document.getElementById('qual').classList.add("ok");
        document.getElementById('profil').classList.remove("ok"); 
        document.getElementById('screen').classList.remove("ok"); 
    }else{
        document.getElementById('qual').classList.remove("ok"); 
        
    }
   
}

document.getElementById('ps').addEventListener("click", openScreen);
var click4 = false;

function openScreen(){
   
    click4 = !click4
    if(click4==true){
        document.getElementById('screen').classList.add("ok");
        document.getElementById('profil').classList.remove("ok"); 
        document.getElementById('qual').classList.remove("ok")
    }else{
        document.getElementById('screen').classList.remove("ok"); 
        
    }
   
}
//backgrounds
const bkg = document.getElementById("screen")
const bg= e => { 
  
    const result =  e.target.getAttribute('src');
    document.body.style.backgroundImage = ("url(" + result + ")");
   
  }

  bkg.addEventListener("click", bg)

  //snow
document.getElementById("snow").addEventListener('mouseover', snow);
document.getElementById("snow").addEventListener('mouseout', unsnow);
import Snowflakes from 'magic-snowflakes';
const snowflakes = new Snowflakes({
    color: '#ffffff',
    count: 200,
    speed: 3,
    minSize: 10,
    maxSize: 20,
    minOpacity: 0.3,
    maxOpacity: 0.8,
});
snowflakes.hide();
 function snow() {
    snowflakes.show();
   snowflakes.start();
}
function unsnow(){
    console.log("cc")
    snowflakes.hide();
    snowflakes.stop();
}

