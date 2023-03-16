var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
document.getElementById('clock').innerHTML =
    date +"</br>" + time;
console.log(dateTime)
