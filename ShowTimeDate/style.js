
let a;
let time;
let date;
let option ={weekday:'long', year:'numeric', month:'long', day:'numeric'};
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() + ':' + a.getMilliseconds();
    date = a.toLocaleDateString(undefined,option);
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}, 1);