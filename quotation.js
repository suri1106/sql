

// function hideElement() {
//     var hide = document.getElementById('div1');
//     if (hide.style.display === 'none') {
//         hide.style.display = 'block';
//     } else {
//         hide.style.display = 'none';
//     }
// }
function onsubmitHandler() {
    validateForm();
    addrecord();
    return false;
}
function validateForm() {
    let id = document.getElementById('id').value;
    let v_id = document.getElementById('v_id').value;
    let stock = document.getElementById('stock').value;
    let price = document.getElementById('price').value;
    let date = document.getElementById('date').value;
    let vdate = document.getElementById('date').value;

    if (id == "") {
        alert("id  is required");
        return false;
    }
    else if (v_id == "") {
        alert("vendor_id  is required");
        return false;
    }
    else if (stock == "") {
        alert(" stock is required");
        return false;
    }
    else if (price == "") {
        alert("price is required");
        return false;
    }
    else if (date == "") {
        alert("date  is required");
        return false;
    }
    else if (vdate == "") {
        alert("validity date  is required");
        return false;
    }
    else {
        alert(' data  saved successfully');
    }
}


function addrecord() {
    let id = document.getElementById('id').value;
    let v_id = document.getElementById('v_id').value;
    let stock = document.getElementById('stock').value;
    let price = document.getElementById('price').value;
    let date = document.getElementById('date').value;
    let vdate = document.getElementById('date').value;


    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    if (id == "" || v_id == "" || stock == ""
        || price == "" || date == "" || vdate == "") {
        return false;

    }
    else {
        td1.innerHTML = id;
        td2.innerHTML = v_id;
        td3.innerHTML = stock;
        td4.innerHTML = price;
        td5.innerHTML = date;
        td6.innerHTML = vdate;
        td7.innerHTML =
            `
<button onclick="adelete(this)"> delete</button>`;
        document.getElementById('tb1').appendChild(tr);
        document.getElementById('myForm').reset();
    }

}

function adelete(stud) {
    let s = stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}







