const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

setInterval ( () => {a = new Date();
let date = a.toLocaleDateString(undefined, options);
let time = a.getHours() + ':' + (a.getMinutes()<10?'0':'') + a.getMinutes() + ':' + (a.getSeconds()<10?'0':'') + a.getSeconds();

document.getElementById('date').innerHTML = date + "<br>"
document.getElementById('time').innerHTML = time;

 }, 1000)