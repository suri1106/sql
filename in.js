function addrecord() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('p_name').value;
    let qty = document.getElementById('quantity').value;
    let uom = document.getElementById('uom').value;
    let price = document.getElementById('price').value;
    let amount = qty * price;
    console.log(id);

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    if (id == "" || name == "" || qty == ""
        || uom == "" || price == "") {
        return false;

    }
    else {

        td1.innerHTML = id;
        td2.innerHTML = name;
        td3.innerHTML = qty;
        td4.innerHTML = uom;
        td5.innerHTML = price;
        td6.innerHTML = amount;
        td7.innerHTML =
            `
    <button onclick="adelete(this)"> delete</button>`;
        document.getElementById('table').appendChild(tr);
        document.getElementById('myForm1').reset();
    }

}
function adelete(stud) {
    let s = stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}