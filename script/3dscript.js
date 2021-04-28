var div = document.getElementById("div");
const string = 'ABCDEF0123456789';

function run() {
    var x = document.getElementById('effect').value;
    if (x == 'circle') {
        let body = '';
        var value = document.getElementById('input').value;
        for (let count = 0; count < value; count++) {
            color1 = '#';
            color2 = '#';
            color3 = '#';
            for (let i = 0; i < 6; i++) {
                color1 += string.charAt(Math.floor(Math.random() * string.length));
                color2 += string.charAt(Math.floor(Math.random() * string.length));
                color3 += string.charAt(Math.floor(Math.random() * string.length));
            }
            body += `<div class="column" style="background-image:radial-gradient(${x}, ${color1}, ${color2}, ${color3});
            height: 100px;"></div>`
            div.innerHTML = body;
            document.getElementById('input').value = '';
        }
    } else {

        let body = '';
        var value = document.getElementById('input').value;
        for (let count = 0; count < value; count++) {
            color1 = '#';
            color2 = '#';
            color3 = '#';
            for (let i = 0; i < 6; i++) {
                color1 += string.charAt(Math.floor(Math.random() * string.length));
                color2 += string.charAt(Math.floor(Math.random() * string.length));
                color3 += string.charAt(Math.floor(Math.random() * string.length));
            }
            body += `<div class="column" style="background-image:linear-gradient(to ${x}, ${color1}, ${color2}, ${color3});
            height: 100px;"></div>`
            div.innerHTML = body;
            document.getElementById('input').value = '';
        }
    }
}