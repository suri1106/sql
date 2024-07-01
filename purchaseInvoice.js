
function onsubmitHandler() {
    lineValidateForm();
    lineItemRecord();
}
function clearValidate() {
    resetErrorMessages();
    updateUnitOfMeasure()
}
function resetErrorMessages() {
    let product = document.getElementById('Product');

    document.getElementById('prerror').textContent = '';
    document.getElementById('productAlreadyInside').textContent = '';
    product.style.borderColor = 'black';
}
function resetForms() {
    document.getElementById('myForm1').reset();
    document.getElementById('myForm').reset();
}
function lineValidateForm() {
    let product = document.getElementById('Product');
    let quantity = document.getElementById('quantity');
    let price = document.getElementById('price');
    if (product.value == '') {
        document.getElementById('prerror').textContent = "Product is required *";
        Product.style.borderColor = 'red';
    } else {
        product.style.borderColor = 'black';

    }

    if (quantity.value == '') {
        quantity.style.borderColor = 'red';
        document.getElementById('quantity').setAttribute("placeholder", "Quantity  is required  *");
    } else {
        document.getElementById('quantity').removeAttribute("placeholder");
        quantity.style.borderColor = 'black';
    }
    if (price.value == '') {
        price.style.borderColor = 'red';
        document.getElementById('price').setAttribute("placeholder", "Price  is required  *");

    } else {
        price.style.borderColor = 'black';
        document.getElementById('price').removeAttribute("placeholder");

    }

}

const productMapping = {
    'Apple': 'KG',
    'Sugar': 'KG',
    'Milk': 'Liter',
    'Oil': 'Liter',
    'Orange': 'KG',
};
function updateUnitOfMeasure() {
    const product = document.getElementById('Product').value;
    const uom = document.getElementById('uom');
    uom.value = productMapping[product];
}

function lineItemRecord() {
    let product = document.getElementById('Product').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let uom = document.getElementById('uom').value;
    let amount = quantity * price;
    if (product === "" || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
        return false;
    }

    let table = document.getElementById('Table');
    let tbody = table.getElementsByTagName('tbody')[0];
    let rows = table.rows;
    let existingProductRow = null;
    for (let i = 1; i < rows.length; i++) {
        if (rows[i].cells[2].innerHTML === product) {
            existingProductRow = rows[i];
            break;
        }
    }
    document.getElementById('productAlreadyInside').textContent = '';
    if (existingProductRow) {
        document.getElementById('Product').value = '';
        //  error msg
        document.getElementById('productAlreadyInside').textContent = "Product already inside!";

        document.getElementById('Product').style.borderColor = 'red';
        return false;
    } else {
        let tr = document.createElement('tr');
        let td1 = tr.appendChild(document.createElement('td'));
        let td2 = tr.appendChild(document.createElement('td'));
        let td3 = tr.appendChild(document.createElement('td'));
        let td4 = tr.appendChild(document.createElement('td'));
        let td5 = tr.appendChild(document.createElement('td'));
        let td6 = tr.appendChild(document.createElement('td'));
        let td7 = tr.appendChild(document.createElement('td'));
        let td8 = tr.appendChild(document.createElement('td'));
        td1.innerHTML = '<input type="checkbox" name="lineselect-row" class="lineselect-row" style="width: 15px; ">';
        td2.innerHTML = rows.length;
        td3.innerHTML = product;
        td4.innerHTML = quantity;
        td5.innerHTML = uom;
        td6.innerHTML = price;
        td7.innerHTML = amount;
        td8.innerHTML =
            `<img src="edit.png" class="edit" onclick=" editRow(this.parentNode.parentNode)" title="edit" alt="edit">&nbsp;
             <img src="icon1.png" class="trash" title="delete" onclick="removeProduct(this)" alt="trash">`;

        tbody.appendChild(tr);

        document.getElementById('myForm1').reset();
    }
}

var index = null;
let currentIndex;
var table = document.getElementById('table');
function editRow(row) {
    index = row;
    currentIndex = row.rowIndex;
    var updateElement = document.getElementById('update');
    var addElement = document.getElementById('button');
    var cancelElement = document.getElementById('Cancel');
    updateElement.style.display = 'block';
    addElement.style.display = 'none';

    updateElement.style.position = "relative";
    updateElement.style.top = "8px";
    updateElement.style.left = '250px';
    cancelElement.style.position = "relative";
    cancelElement.style.bottom = "20px";
    cancelElement.style.left = "40px";
    cancelElement.innerText = 'Cancel';

    const cells = row.getElementsByTagName('td');


    document.getElementById('Product').value = cells[2].innerText;
    document.getElementById('quantity').value = cells[3].innerText;
    document.getElementById('uom').value = cells[4].innerText;
    document.getElementById('price').value = cells[5].innerText;


}
// modify update this function name
function Mupdate() {
    if (index) {
        const cells = index.getElementsByTagName('td');
        lineValidateForm();
        let product = document.getElementById('Product').value;
        let quantity = document.getElementById('quantity').value;
        let price = document.getElementById('price').value;
        let uom = document.getElementById('uom').value;

        if (product === "" || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
            return false;
        } else {
            let table = document.getElementById('Table');
            document.getElementById('productAlreadyInside').textContent = '';
            for (var i = 1; i < table.rows.length; i++) {
                if (i === currentIndex) { continue };
                if (table.rows[i].cells[2].innerHTML === product) {
                    let product = document.getElementById('Product').value = '';
                    document.getElementById('productAlreadyInside').textContent = "Product already inside!";
                    return false;
                }
            }
            cells[2].innerHTML = product;
            cells[3].innerHTML = quantity;
            cells[4].innerHTML = uom;
            cells[5].innerHTML = price;
            cells[6].innerHTML = price * quantity;
            var updateElement = document.getElementById('update');
            var addElement = document.getElementById('button');
            var cancelElement = document.getElementById('Cancel');
            updateElement.style.display = 'none';
            addElement.style.display = 'block';
            cancelElement.innerText = 'Clear';
            addElement.style.position = "relative";
            addElement.style.top = "9px";
            addElement.style.left = "240px";
            index = null;
            document.getElementById('myForm1').reset();
        }
    }
}
function updateModeClose() {
    var updateElement = document.getElementById('update');
    var addElement = document.getElementById('button');
    var cancelElement = document.getElementById('Cancel');

    if (updateElement.style.display == 'block') {
        updateElement.style.display = 'none';
        addElement.style.display = 'block';
        addElement.style.position = "relative";
        addElement.style.top = "8px";
        addElement.style.left = "240px";
        cancelElement.innerText = 'Clear';
    }
}

let lineCurrentRow;

function removeProduct(img) {
    let id = img.parentNode.parentNode.cells[2].innerText;
    document.getElementById("linealertText").innerText = `Are you sure to remove the Product - ${id}?`;
    document.getElementById("alertLineBox").style.display = "block";
    lineCurrentRow = img.parentNode.parentNode;
}

document.getElementById("confirmlineBtn").onclick = function () {
    lineCurrentRow.parentNode.removeChild(lineCurrentRow);
   updatelineSerialNumbers();
    document.getElementById("alertLineBox").style.display = "none";
}

document.getElementById("cancellineBtn").onclick = function cancelBtn() {
    document.getElementById("alertLineBox").style.display = "none";
}
// 
// document.getElementById("cancelLinePopBtn").onclick = function () {
//     document.getElementById("alertLineBox").style.display = "none";
// }

document.getElementById("cancelPopBtn").onclick = function () {
    let viewTable = document.getElementById('viewTable');
    let tbody = viewTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    document.getElementById("list-overlay").style.display = "none";
}
//line-item stores//
let invoiceheader = [];

function storeLineItem() {
    let invoiceId = document.getElementById('id').value;
    let vendor = document.getElementById('vendor').value;
    let docno = document.getElementById('docno').value;
    let date = document.getElementById('date').value;
    let address = document.getElementById('address').value;
    let table = document.getElementById('Table');
    let rows = table.rows;

    const newReceipt = {
        invoiceid: invoiceId,
        vendors: vendor,
        documentno: docno,
        invoicedate: date,
        billingaddress: address,
        invoicelines: []
    };

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].cells;
        const il = {
            id: cells[1].textContent.trim(),
            product: cells[2].textContent.trim(),
            quantity: cells[3].textContent.trim(),
            uom: cells[4].textContent.trim(),
            price: cells[5].textContent.trim(),
            amount: cells[6].textContent.trim()
        };
        newReceipt.invoicelines.push(il);
    }

    invoiceheader.push(newReceipt);
    console.log(invoiceheader);
}
// line delete all
function lineSelectAll() {
    let selectAllCheckbox = document.getElementById('lineselectAllchk');
    let check = document.getElementsByClassName('lineselect-row');
    for (let i = 0; i < check.length; i++) {
        check[i].checked = selectAllCheckbox.checked;
    }
}
function lineDeleteAll() {
    let tableBody = document.getElementById('Table').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for (let i = rows.length - 1; i >= 0; i--) {
        let checkbox = rows[i].getElementsByTagName('input')[0];
        if (checkbox && checkbox.checked) {
            tableBody.removeChild(rows[i]);
        }
    }
    updatelineSerialNumbers();
}
document.getElementById("lineDeleteAlls").onclick = function () {
    document.getElementById("linedeleteBox").style.display = "block";
}

document.getElementById("deleteAllconfimBtn").onclick = function () {
    lineDeleteAll();
    document.getElementById("linedeleteBox").style.display = "none";
}

document.getElementById("deleteAllcancelBtn").onclick = function () {
    document.getElementById("linedeleteBox").style.display = "none";
}

function updatelineSerialNumbers() {
    let tableBody = document.getElementById("linetbl");
    let rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].getElementsByTagName('td')[1].innerText = i + 1;
    }
}


// // head working-----------------------------------------------------------------------------------------------------------------
function onHeaderSumbit() {
    validateFormData();
    headerNewRecord();
    let table = document.getElementById('Table');
    let tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    
}

function validateFormData() {


    let invoiceId = document.getElementById('id');
    let vendor = document.getElementById('vendor');
    let docno = document.getElementById('docno');
    let date = document.getElementById('date');
    let address = document.getElementById('address');
    if (invoiceId.value == '') {
        document.getElementById('id').setAttribute("placeholder", "Invoice Id  is required *");
        invoiceId.style.borderColor = 'red';


    } else {
        invoiceId.style.borderColor = 'black';
        document.getElementById('id').removeAttribute("placeholder");


    }

    if (vendor.value == '') {
        vendor.style.borderColor = 'red';
        document.getElementById('verror').textContent = "Vendor is  required *";



    } else {
        vendor.style.borderColor = 'black';

    }
    if (docno.value == '') {
        docno.style.borderColor = 'red';
        document.getElementById('docno').setAttribute("placeholder", "Document No is  required *");


    } else {
        docno.style.borderColor = 'black';
        document.getElementById('docno').removeAttribute("placeholder");
    }
    if (date.value == '') {
        date.style.borderColor = 'red';
        document.getElementById('date').setAttribute("placeholder", "Invoice date is  required *");


    } else {
        date.style.borderColor = 'black';
        document.getElementById('date').removeAttribute("placeholder");

    }
    if (address.value == '') {

        document.getElementById('address').setAttribute("placeholder", "Address  is required *");
        address.style.borderColor = 'red';


    } else {
        document.getElementById('address').removeAttribute("placeholder");
        address.style.borderColor = 'black';

    }
}
function headerNewRecord() {
    let invoiceId = document.getElementById('id').value;
    let vendor = document.getElementById('vendor').value;
    let docno = document.getElementById('docno').value;
    let date = document.getElementById('date').value;
    let address = document.getElementById('address').value;
    if (invoiceId === "" || vendor === '' || docno === '' || date === '' || address === '') {
        return false;
    }
    let headerTable = document.getElementById('table1');
    let tbody = headerTable.getElementsByTagName('tbody')[0];
    let rows = headerTable.rows;
    let existingInvoiceId = null;
    for (let i = 1; i < rows.length; i++) {
        if (rows[i].cells[2].innerHTML === invoiceId) {
            existingInvoiceId = rows[i];
            break;
        }
    }
    if (existingInvoiceId) {
        let invoiceId = document.getElementById('id').value = '';
        // invoiceId.style.borderColor = 'red';
        //  error msg
        document.getElementById('invoiceerror').textContent = "Invoice ID already inside!";
        // alert('Product already inside!');

        return false;
    }
    else {

        let tr = document.createElement('tr');
        let td1 = tr.appendChild(document.createElement('td'));
        let td2 = tr.appendChild(document.createElement('td'));
        let td3 = tr.appendChild(document.createElement('td'));
        let td4 = tr.appendChild(document.createElement('td'));
        let td5 = tr.appendChild(document.createElement('td'));
        let td6 = tr.appendChild(document.createElement('td'));
        // let td7 = tr.appendChild(document.createElement('td'));
        let td8 = tr.appendChild(document.createElement('td'));
        let td9 = tr.appendChild(document.createElement('td'));
        td1.innerHTML = ' <input type="checkbox" name="" class="select-row" style="width: 15px; ">';
        td2.innerHTML = rows.length;
        td3.innerHTML = invoiceId;
        td4.innerHTML = vendor;
        td5.innerHTML = docno;
        td6.innerHTML = date;
        // td7.innerHTML = '   <button">View</button>';
        td8.innerHTML = address;
        td9.innerHTML =
            `   <img src="img.png" class="viewicon" onclick="viewLineItem(this)"  alt="" >
             <img src="edit.png" class="edit" onclick=" headupdate(this.parentNode.parentNode);" title="edit" alt="edit">&nbsp;
             <img src="icon1.png" class="trash" title="delete" onclick="headdelete(this) " alt="trash">
          `;

        tbody.appendChild(tr);
        storeLineItem();
        // if (!TABLE()) {
        //     return false;
        // }
        off();
        resetForms();
        allErrorClear();
    }
}

var headIndex = null;
let currentIndexs;
var headerTable = document.getElementById('table1');
function headupdate(rowe) {


    hideblock();
    headIndex = rowe;
    currentIndexs = rowe.rowIndex;
    var headerUpdateElement = document.getElementById('updates');
    var headerSumbitElement = document.getElementById('submit');
    var headerCancelElement = document.getElementById('btn2');
    headerUpdateElement.style.display = 'block';
    headerSumbitElement.style.display = 'none';
    headerUpdateElement.style.position = "relative";
    headerUpdateElement.style.top = "35px";
    headerUpdateElement.style.left = '355px';
    // can.style.position = "relative";
    // can.style.bottom = "0px";
    headerCancelElement.style.left = "400px";
    headerCancelElement.innerHTML = 'Cancel';
    const cells = rowe.getElementsByTagName('td');
    document.getElementById('id').value = cells[2].innerText;
    document.getElementById('vendor').value = cells[3].innerText;
    document.getElementById('docno').value = cells[4].innerText;
    document.getElementById('date').value = cells[5].innerText;
    document.getElementById('address').value = cells[6].innerText;

    let table = document.getElementById('Table');
    let tbody = table.getElementsByTagName('tbody')[0];
    let rows = tbody.rows;
    for (let i = 0; i < invoiceheader[0].invoicelines.length; i++) {

        let row = tbody.insertRow();
        let cell1 = row.insertCell(0);
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'lineselect-row';
        checkbox.className = 'lineselect-row';
        checkbox.style.width = '15px';
        cell1.appendChild(checkbox);
        let cell2 = row.insertCell(1);
        cell2.textContent = invoiceheader[0].invoicelines[i].id;
        let cell3 = row.insertCell(2);
        cell3.textContent = invoiceheader[0].invoicelines[i].product;
        let cell4 = row.insertCell(3);
        cell4.textContent = invoiceheader[0].invoicelines[i].quantity;
        let cell5 = row.insertCell(4);
        cell5.textContent = invoiceheader[0].invoicelines[i].uom;
        let cell6 = row.insertCell(5);
        cell6.textContent = invoiceheader[0].invoicelines[i].price;
        let cell7 = row.insertCell(6);
        cell7.textContent = invoiceheader[0].invoicelines[i].amount;

        let cell8 = row.insertCell(7);
        cell8.innerHTML =
            `<img src="edit.png" class="edit" onclick=" editRow(this.parentNode.parentNode)" title="edit" alt="edit">&nbsp;
             <img src="icon1.png" class="trash" title="delete" onclick="removeProduct(this)" alt="trash">`;

        //       let table = document.getElementById('Table');
        // let tbody = table.getElementsByTagName('tbody')[0];
        // tbody.innerHTML = '';
    }

}





function updaterow(event) {
    if (headIndex) {
        validateFormData();
        const cells = headIndex.getElementsByTagName('td');
        let invoiceId = document.getElementById('id').value;
        let vendor = document.getElementById('vendor').value;
        let docno = document.getElementById('docno').value;
        let date = document.getElementById('date').value;
        let address = document.getElementById('address').value;
        if (invoiceId === '' || vendor === '' || docno === '' || date === '' || address == '') {
            return false;
        } else {
            let headerTable = document.getElementById('table1');
            // document.getElementById('error').textContent = '';
            for (var i = 1; i < headerTable.rows.length; i++) {
                if (i === currentIndexs) { continue };
                if (headerTable.rows[i].cells[2].innerHTML === invoiceId) {
                    // alert('invoice id already inside!');
                    invoiceId = document.getElementById('id').value = '';

                    document.getElementById('invoiceerror').innerText = "Invoice ID already inside!";
                    return false;
                }
            }

            cells[2].innerHTML = invoiceId;
            cells[3].innerHTML = vendor;
            cells[4].innerHTML = docno;
            cells[5].innerHTML = date;
            cells[6].innerHTML = address;
            var up = document.getElementById('updates');
            var add = document.getElementById('submit');
            var can = document.getElementById('Cancel');
            up.style.display = 'none';
            add.style.display = 'block';
            can.innerText = 'Clear';
            add.style.position = "relative";
            add.style.top = "41px";
            add.style.left = "330px";
            //  index = null;
           
        }
   

        var inId = document.getElementById('id').value
        let tablew = document.getElementById('Table');
        let rows = tablew.rows;
        const invoice = invoiceheader.find(inv => inv.invoiceid === inId);

        if (invoice) {
            // Clear existing invoice lines
            invoice.invoicelines = [];

            // Start from index 1 to skip the header row
            for (let i = 1; i < rows.length; i++) {
                let cells = rows[i].cells;

                let id = cells[1].textContent;
                let product = cells[2].textContent;
                let quantity = cells[3].textContent;
                let uom = cells[4].textContent;
                let price = cells[5].textContent;
                let amount = cells[6].textContent;

                let il = {
                    id: id,
                    product: product,
                    quantity: quantity,
                    uom: uom,
                    price: price,
                    amount: amount
                };

                // Update the invoice with new values
                invoice.invoicelines.push(il);
            }
        }
    }
    off();
}

function hideblock() {
    var elements = document.getElementById('hideblock');
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().slice(0, 10);
    let date = document.getElementById('date').max = formattedDate;
    elements.style.display = "block";
    document.getElementById('myForm').reset();
    let table = document.getElementById('Table');
    let tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';


}

function off() {
    var elements = document.getElementById('hideblock');
    elements.style.display = "none";
    resetForms();


}

let headcurrentRow;
function headdelete(img) {
    let id = img.parentNode.parentNode.cells[1].innerText;
    document.getElementById("headeralertText").innerText = `Are you sure to remove the invoice id - ${id}?`;
    document.getElementById("alertBox").style.display = "block";
    headcurrentRow = img.parentNode.parentNode;
}
document.getElementById("confirmBtn").onclick = function () {
    headcurrentRow.parentNode.removeChild(headcurrentRow);
    document.getElementById("alertBox").style.display = "none";
    updateHanderSerialNumbers();
}

function updateHanderSerialNumbers() {
    let tableBody = document.getElementById("TableBody");
    let rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].getElementsByTagName('td')[1].innerText = i + 1;
    }
}

document.getElementById("cancelBtn").onclick = function cancelBtn() {
    document.getElementById("alertBox").style.display = "none";
}


//view//
function getLineItem(id) {
    return invoiceheader.find(invoice => invoice.invoiceid === id);
}

function viewLineItem(view) {
    const over = document.getElementById("list-overlay");
    const popDialog = document.getElementById("list-popupDialog");
    over.style.display = "block";
    popDialog.style.display = "block";
    const parentRow = view.parentNode.parentNode;
    const invoiceIdToFind = parentRow.querySelectorAll('td')[2].innerText;
    document.getElementById('p-invoiceId').innerHTML = invoiceIdToFind;
    document.getElementById('p-vendor').innerHTML = parentRow.querySelectorAll('td')[3].innerText;
    document.getElementById('p-doc').innerHTML = parentRow.querySelectorAll('td')[4].innerText;
    document.getElementById('Date').innerHTML = parentRow.querySelectorAll('td')[5].innerText;
    document.getElementById('billingaddress').innerHTML = parentRow.querySelectorAll('td')[6].innerText;
    const viewTable = document.getElementById('viewTable');
    const tbody = viewTable.getElementsByTagName('tbody')[0];
    // viewTable.innerHTML = "";
    const invoiceLine = getLineItem(invoiceIdToFind);
    if (invoiceLine) {
        invoiceLine.invoicelines.forEach(invoicelines => {
            let row = `<tr>
            <td>${invoicelines.id}</td>
            <td>${invoicelines.product}</td>
            <td>${invoicelines.quantity}</td>
            <td>${invoicelines.uom}</td>
            <td>${invoicelines.price}</td>
            <td>${invoicelines.amount}</td>
        </tr>`;
            tbody.innerHTML += row;
        });
    }
}


// function TABLE() {

//     let table = document.getElementById('Table');
//     let rows = table.rows;
//     if (rows.length === 1) {
//         validateForm();
//         return false;
//     }
//     return true;
// }
// function table() {
//     let table = document.getElementById('table');

//     // Check if the table element exists
//     if (!table) {
//         console.error("Table element not found");
//         return false;
//     }
function allErrorClear() {
    document.getElementById('invoiceerror').textContent = '';

    let invoiceId = document.getElementById('id');
    invoiceId.style.borderColor = '';
    // invoice clear
    //    vendor clear
    document.getElementById('verror').textContent = '';
    let vendor = document.getElementById('vendor');
    vendor.style.borderColor = 'black';
    // 
    // 
    let docno = document.getElementById('docno');
    docno.style.borderColor = 'black';
    let date = document.getElementById('date');
    date.style.borderColor = 'black';
    let address = document.getElementById('address');
    address.style.borderColor = 'black';
    // header clear
    // line 
    resetErrorMessages();
    let quantity = document.getElementById('quantity');
    quantity.style.borderColor = 'black';
    let price = document.getElementById('price');
    price.style.borderColor = 'black';
}
// header deleate all
function headerSelectAll() {
    let selectAllCheckbox = document.getElementById('selectAllchk');
    let checkboxes = document.getElementsByClassName('select-row');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAllCheckbox.checked;
    }
}

function deleteSelectedRows() {
    let tableBody = document.getElementById('TableBody');
    let rows = tableBody.getElementsByTagName('tr');
    for (let i = rows.length - 1; i >= 0; i--) {
        let checkbox = rows[i].getElementsByTagName('input')[0];
        if (checkbox && checkbox.checked) {
            tableBody.removeChild(rows[i]);
        }
    }
}
document.getElementById("headerDeleteAlls").onclick = function () {
    document.getElementById("headerdeleteBox").style.display = "block";
}

document.getElementById("headerAllconfimBtn").onclick = function () {
    deleteSelectedRows();
    document.getElementById("headerdeleteBox").style.display = "none";
}

document.getElementById("deleteAllcancelBtn").onclick = function () {
    document.getElementById("headerdeleteBox").style.display = "none";
}
// line
// document.getElementById("lineDeleteAlls").onclick = function () {
//     document.getElementById("linedeleteBox").style.display = "block";
// }

// document.getElementById("deleteAllconfimBtn").onclick = function () {
//     lineDeleteAll();
//     document.getElementById("linedeleteBox").style.display = "none";
// }

// document.getElementById("deleteAllcancelBtn").onclick = function () {
//     document.getElementById("linedeleteBox").style.display = "none";
// }

