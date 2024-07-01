function validateForm() {
    let id = document.forms["myForm"]["id"].value;
    let v_id = document.forms["myForm"]["v_id"].value;
    let stock = document.forms["myForm"]["stock"].value;
    let price = document.forms["myForm"]["price"].value;
    let doc_date = document.forms["myForm"]["doc_date"].value;
    let vdate = document.forms["myForm"]["vdate"].value;
    if (id == "") {
        console.log("id must be filled out");
        return false;
    }
    if (v_id == "") {
        alert("vendor_id must be filled out");
        return false;
    }
    if (stock == "") {
        alert("stock must be filled out");
        return false;
    }
    if (price == "") {
        alert("phone number must be filled out");
        return false;
    }
    if (doc_date == "") {
        alert("document date must be filled out");
        return false;
    }
    if (vdate == "") {
        alert(" validity date must be filled out");
        return false;
    }
}


function hideElement() {
    var hide = document.getElementById('div1');
    if (hide.style.display === 'none') {
        hide.style.display = 'block';
    } else {
        hide.style.display = 'none';
    }
}