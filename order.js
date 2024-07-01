function onsubmitHandler() {
    validateForm();

    addrecord();

    return false;
}

function validateForm() {
    let id = document.getElementById('id').value;
    let p_id = document.getElementById('p_id').value;
    let q_id = document.getElementById('q_id').value;
    let v_id = document.getElementById('v_id').value;
    let stock = document.getElementById('stock').value;
    let doc_date = document.getElementById('date').value;

    if (id == "") {
        alert("order id  is required");
        return false;
    }
    else if (p_id == "") {
        alert(" product id  is required");
        return false;
    }
    else if (q_id == "") {
        alert("quotation id is required");
        return false;
    }
    else if (v_id == "") {
        alert("vendor id is required");
        return false;
    }
    else if (stock == "") {
        alert("stock   is required");
        return false;
    }
    else if (doc_date == "") {
        alert("document date  is required");
        return false;
    }
    else {
        alert('  purchase order send  successfully');
    }
}

function addrecord() {
    let id = document.getElementById('id').value;
    let p_id = document.getElementById('p_id').value;
    let q_id = document.getElementById('q_id').value;
    let v_id = document.getElementById('v_id').value;
    let stock = document.getElementById('stock').value;
    let doc_date = document.getElementById('date').value;


    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    if (id == "" || p_id == "" || q_id == ""
        || v_id == "" || stock == "" || doc_date == "") {
        return false;

    }
    else {
        td1.innerHTML = id;
        td2.innerHTML = p_id;
        td3.innerHTML = q_id;
        td4.innerHTML = v_id;
        td5.innerHTML = stock;
        td6.innerHTML = doc_date;
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









