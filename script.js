
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var text3 = document.getElementById("text3").value;
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";


    var my_text = `Murojaatchi ismi : ${text1} %0A  Nomeri: ${text2} %0A Savoli : ${text3} `;
    var token = "7408025837:AAHCDxr29GtCxodoyn8RQ7dNGnWCyPX4Ynw"
    var chat_id = -1002217417354
    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&perse_mode=html/`        

    let api = new XMLHttpRequest();
    api.open("GET", url ,true);
    api.send();
    console.log("Message successfully sended!")
})
