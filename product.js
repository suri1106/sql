function onsubmitHandler() {
    validateForm();
    addrecord();
    return false;
}

function validateForm() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let uom = document.getElementById('uom').value;
    let stock = document.getElementById('stock').value;
    let des = document.getElementById('des').value;
    let price = document.getElementById('price').value;
    if (id == "") {
        alert("product id is required");
        return false;
    }
    else if (name == "") {
        alert(" product name  is required");
        return false;
    }
    else if (uom == "") {
        alert("uom  is required");
        return false;
    }
    else if (stock == "") {
        alert("stock  is required");
        return false;
    }
    else if (des == "") {
        alert("Description  is required");
        return false;
    }
    else if (price == "") {
        alert("price  is required");
        return false;
    }
    else {
        alert('product data  saved successfully');

    }
}

function addrecord() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let uom = document.getElementById('uom').value;
    let stock = document.getElementById('stock').value;
    let des = document.getElementById('des').value;
    let price = document.getElementById('price').value;
    let total = stock * price


    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));
    if (id == "" || name == "" || uom == ""
        || stock == "" || des == "" || price == "") {
        return false;

    }
    else {
        td1.innerHTML = id;
        td2.innerHTML = name;
        td3.innerHTML = uom;
        td4.innerHTML = stock;
        td5.innerHTML = des;
        td6.innerHTML = price;
        td7.innerHTML = total;
        td8.innerHTML =
            `<button onclick="adelete(this)"> delete</button>`;
        document.getElementById('tb1').appendChild(tr);
        document.getElementById('myForm').reset();

    }
}
function adelete(stud) {
    let s = stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}
