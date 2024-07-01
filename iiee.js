function getReceiptById(receiptId) {
    return receiptDatas.find(receipt => receipt.receiptID === receiptId);
}
 
function viewLineItem(view) {
    const over = document.getElementById("list-overlay");
    const popDialog = document.getElementById("list-popupDialog");
    over.style.display = "block";
    popDialog.style.display = "block";
    popDialog.style.opacity = popDialog.style.opacity === "1" ? "0" : "1";
 
    const parentRow = view.parentNode.parentNode;
    const invoiceIdToFind = parentRow.querySelectorAll('td')[1].innerText;
 
    document.getElementById('popup-receiptId').innerHTML = parentRow.querySelectorAll('td')[1].innerText;
    document.getElementById('popup-receiptDate').innerHTML = parentRow.querySelectorAll('td')[2].innerText;
    document.getElementById('popup-vendor').innerHTML = parentRow.querySelectorAll('td')[3].innerText;
 
    const viewTable = document.getElementById('viewTableBody');
    viewTable.innerHTML = "";
    const receipt = getReceiptById(invoiceIdToFind);
    if (receipt) {
        receipt.products.forEach(product => {
            let row = `<tr>
            <td>${product.id}</td>
            <td>${product.productName}</td>
            <td>${product.expiryDate}</td>
            <td>${product.quantity + " " + product.uom}</td>
        </tr>`;
            viewTable.innerHTML += row;
        });
    }
}
function getReceiptById(receiptId) {
    return receiptDatas.find(receipt => receipt.receiptID === receiptId);
}
 
let receiptDatas = []; 

let receiptDatas = [];
        const newReceipt = {          
            receiptID: receiptId,
            receiptDate: receiptDate,
            selectedVendor: selectedVendor,
            products: []
        };
        for (let i = 0; i < rows.length; i+... by Vasanthavasan Gangatharan

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].cells;
            const productData = {
                id: cells[0].textContent.trim(),
                productName: cells[1].textContent.trim(),
                expiryDate: cells[2].textContent.trim(),
                quantity: cells[3].textContent.trim(),
                uom: cells[4].textContent.trim()
            };
            newReceipt.products.push(productData);
        }
 
        // Push the new receipt data to the global v-ariable
        receiptDatas.push(newReceipt);
