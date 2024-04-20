let selectedSlab = 0;

function selectSlab(slab) {
    selectedSlab = slab;
}

function calculateGST() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && selectedSlab !== 0) {
        const gstAmount = (amount * selectedSlab) / 100;
        const cgstAmount = gstAmount / 2;
        const sgstAmount = gstAmount / 2;
        const totalAmount = amount + gstAmount;
        document.querySelector('.result').innerHTML = `
            <p>Total Amount (without tax): ${amount.toFixed(2)}</p>
            <p>CGST (${selectedSlab/2}%): ${cgstAmount.toFixed(2)}</p>
            <p>SGST (${selectedSlab/2}%): ${sgstAmount.toFixed(2)}</p>
            <p>Total GST: ${gstAmount.toFixed(2)}</p>
            <p>Total Amount (with tax): ${totalAmount.toFixed(2)}</p>
        `;
    } else {
        document.querySelector('.result').innerHTML = '<p>Please enter valid amount and select tax slab.</p>';
    }
}

function clearInputs() {
    document.getElementById('amount').value = '';
    selectedSlab = 0;
    document.querySelector('.result').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    selectSlab(0);
});
