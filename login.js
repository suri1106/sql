function validateForm() {

    let name = document.getElementById('name').value;
    let password = document.getElementById('pass').value;


    if (name === password) {
        window.location.href = "supermarket.html";
    }
}
