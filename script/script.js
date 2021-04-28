var div = document.getElementById("div");
const string = 'ABCDEF0123456789';

function run() {
    let body = '';
    var value = document.getElementById('input').value;
    for (let count = 0; count < value; count++) {
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += string.charAt(Math.floor(Math.random() * string.length));
        }
        body += `<div class="column" style="background-color:${color};
        height: 100px;">${color}</div>`
    }
    div.innerHTML = body;
    document.getElementById('input').value = '';

};