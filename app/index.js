let {numberToTextMap} = require('./data');
let {format24} = require('./app.config');

setInterval(() => {
    let time = new Date();
    document.getElementById('hr').innerText = convertNumberToText(time.getHours(),'hr');
    document.getElementById('min').innerText = convertNumberToText(time.getMinutes(),'min');
    document.getElementById('sec').innerText = convertNumberToText(time.getSeconds(),'sec');  
    if(!format24)
        document.getElementById('format').innerText = time.getHours() >= 12 ? 'PM' : 'AM';
    else
        document.getElementById('format').innerText = "";

}, 1000);

function convertNumberToText(num,type){
    if (type === 'hr' && !format24)
        return numberToTextMap[(num % 12).toString()];
    return numberToTextMap[num.toString()]
}

function changeTimeFormat(){
    format24 = !format24;
}
