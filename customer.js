

// function hideElement() {
//     var hide = document.getElementById('div1');
//     if (hide.style.display === 'none') {
//         hide.style.display = 'block';
//     } else {
//         hide.style.display = 'none';
//     }
// }
setTimeout(function () { myFunction("I love You !!!"); }, 3000);

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let id = document.getElementById('id').value.trim();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let add = document.getElementById('address').value.trim();
    let date = document.getElementById('date').value

    document.getElementById('iderror').textContent = '';
    document.getElementById('nameerror').textContent = '';
    document.getElementById('emailerror').textContent = '';
    document.getElementById('phone_noerror').textContent = '';
    document.getElementById('dateerror').textContent = '';
    document.getElementById('address').textContent = '';

    if (id == '') {
        document.getElementById('iderror').textContent = 'customer id is required';
        return false;
    }
    else if (name == '') {
        document.getElementById('nameerror').textContent = 'Name is required';
        return false;
    }

    else if (email == '') {
        document.getElementById('emailerror').textContent = 'Email is required';
        return false;
    }
    else if (phone == '') {
        document.getElementById('phone_noerror').textContent = 'phone number is required';
        return false;
    }

    else if (date == '') {
        document.getElementById('dateerror').textContent = 'date is required';
        return false;
    }
    else if (add == '') {
        document.getElementById('addresserror').textContent = 'address is required';
        return false;
    }
    else {
        alert('customer data  saved successfully');
        document.getElementById('myForm').reset();
    }

});
function addrecord() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let add = document.getElementById('address').value;
    let date = document.getElementById('date').value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    if (id == "" || name == "" || email == ""
        || phone == "" || add == "" || date == "") {
        return false;

    }
    else {

        td1.innerHTML = id;
        td2.innerHTML = name;
        td3.innerHTML = email;
        td4.innerHTML = phone;
        td5.innerHTML = date;
        td6.innerHTML = add;
        td7.innerHTML =
            `
            <button onclick="adelete(this)"> delete</button>`;
        document.getElementById('tb1').appendChild(tr);

    }

}
function adelete(stud) {
    let s = stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}

// function update(stud) {
//     let id = document.getElementById('id').value;
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let phone = document.getElementById('phone').value;
//     let add = document.getElementById('address').value;
//     let date = document.getElementById('date').value;
//     let s = stud.parentNode.parentNode;

//     var tr = document.createElement('tr');

//     var td1 = tr.appendChild(document.createElement('td'));
//     var td2 = tr.appendChild(document.createElement('td'));
//     var td3 = tr.appendChild(document.createElement('td'));
//     var td4 = tr.appendChild(document.createElement('td'));
//     var td5 = tr.appendChild(document.createElement('td'));
//     var td6 = tr.appendChild(document.createElement('td'));
//     var td7 = tr.appendChild(document.createElement('td'));

//     td1.innerHTML = '<input type="text" name="id" id="id">';
//     td2.innerHTML = '<input type="text" name="name" id="name">';
//     td3.innerHTML = '<input type="email" name="email" id="email">';
//     td4.innerHTML = '<input type="number" name="phone" id="phone">';
//     td5.innerHTML = '<input type="date" name="date" id="date">';
//     td6.innerHTML = ' <textarea name="address1" id="address" rows="5" placeholder="Enter the address"></textarea>';

//     td7.innerHTML = `<button onclick="adupdate(this)">ready</button>
//     <button onclick="adelete"> delete</button `;

//     document.getElementById('tb1').replaceChild(tr, s);
// }

// function adupdate(stud) {
//     let id1 = document.getElementById('id').value;
//     let name1 = document.getElementById('name').value;
//     let email1 = document.getElementById('email').value;
//     let phone1 = document.getElementById('phone').value;
//     let add1 = document.getElementById('address').value;
//     let date1 = document.getElementById('date').value;
//     let s = stud.parentNode.parentNode;

//     var tr = document.createElement('tr');

//     var td1 = tr.appendChild(document.createElement('td'));
//     var td2 = tr.appendChild(document.createElement('td'));
//     var td3 = tr.appendChild(document.createElement('td'));
//     var td4 = tr.appendChild(document.createElement('td'));
//     var td5 = tr.appendChild(document.createElement('td'));
//     var td6 = tr.appendChild(document.createElement('td'));
//     var td7 = tr.appendChild(document.createElement('td'));
//     td1.innerHTML = id1;
//     td2.innerHTML = name1;
//     td3.innerHTML = email1;
//     td4.innerHTML = phone1;
//     td5.innerHTML = date1;
//     td6.innerHTML = add1;
//     td7.innerHTML =
//         `<button onclick="adupdate(this)">add</button>
//         <button onclick="adelete(this)"> delete</button>`;


//     document.getElementById('tb1').appendChild(tr);

// }

















