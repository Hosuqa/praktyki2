


document.getElementById("qron").addEventListener('click', getQR);


function getQR() {
    var oro = document.getElementById('model').value;
    var boro = document.getElementById('sn').value;
    var output = document.getElementById('output');
    var str1 = String(oro);
    var str2 = String(boro);
    var str3 = "https://hosuqa.github.io/praktyki2/form.html";
    var url = str3 + "#" + str1 + "&" + str2;
    let qrcode = new QRCode(output, {
        text: url,
        width: 277,
        height: 277,
        colorDark: "#5a8dee",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

}

