window.onload = function() {
    document.getElementById("subscribe-form").addEventListener('submit', subscribeAlert);
}

function subscribeAlert(){
    var email = document.getElementById("subscribe-form").elements[0].value;
    alert("subscriber added: " + email);
}