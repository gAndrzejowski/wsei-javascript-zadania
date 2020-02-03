document.addEventListener('DOMContentLoaded', () => {
    
    function addProduct() {
        const id = document.getElementById('orderId').value;
        const item = document.getElementById('item').value;
        const ile = document.getElementById('quantity').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${id}</td><td>${item}</td><td>${ile}</td>`;

        document.getElementById('orders').appendChild(newRow);

    }

    document.getElementById('addBtn').addEventListener('click', addProduct);
})