


document.getElementById("qron").addEventListener('click', getQR);


function getQR() {
    var oro = document.getElementById('model').value;
    var boro = document.getElementById('sn').value;
    var output = document.getElementById('output');
    let qrcode = new QRCode(output, {
        text: "https://hosuqa.github.io/praktyki2/form.html",
        width: 277,
        height: 277,
        colorDark: "#5a8dee",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
