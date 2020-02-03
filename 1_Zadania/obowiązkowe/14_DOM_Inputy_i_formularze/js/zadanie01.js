document.addEventListener('DOMContentLoaded', () => {
    const invoiceCheck = document.getElementById('invoice');
    const invoiceSection = document.getElementById('invoiceData');

    function setInvoiceSectionVisibility() {
        if (invoiceCheck.checked) {
            invoiceSection.style.visibility = 'visible';
        }
        else {
            invoiceSection.style.visibility = 'hidden';
        }
    }
    setInvoiceSectionVisibility();
    invoiceCheck.addEventListener('click', setInvoiceSectionVisibility);
})