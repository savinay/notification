function sendmsg(e) {
    // body...
    e.preventDefault();
    if (document.forms["msgform"]["msg"].value != '') {
        var message = document.forms["msgform"]["msg"].value;
        console.log(message);
        document.getElementById("msgsent")
            .style.display = "block";
        document.forms["msgform"]["msg"].value = '';
    }
}

function hideNotification(e) {
    e.preventDefault();
    document.getElementById("notification")
        .style.display = "none";
}