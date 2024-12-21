 // Generate Invoice Preview
 function generateInvoice() {
    // Get Form Data
    const name = document.getElementById('customer-name').value;
    const vehicle = document.getElementById('vehicle-number').value;
    const quantity = document.getElementById('quantity').value;
    const amount = parseFloat(document.getElementById('total-amount').value) || 0;
    const tax = parseFloat(document.getElementById('tax').value) || 0;
    const paymentMethod = document.getElementById('payment-method').value;

    // Calculate Totals
    const taxAmount = (amount * tax) / 100;
    const total = amount + taxAmount;

    // Generate Invoice Preview
    const preview = `
      <h2>Shop name:</h2>
      <p><strong>Customer Name:</strong> ${name}</p>
      <p><strong>Item Name:</strong> ${vehicle}</p>
      <p><strong>Quantity :</strong> ${quantity}</p>
      <p><strong>Amount:</strong> ₹${amount.toFixed(2)}</p>
      <p><strong>Tax:</strong> ₹${taxAmount.toFixed(2)} (${tax}%)</p>
      <p><strong>Total:</strong> ₹${total.toFixed(2)}</p>
      <p><strong>Payment Method:</strong> ${paymentMethod}</p>
      <p style="text-align:center;">Thank you for your business!</p>
    `;

    document.getElementById('invoice-preview').innerHTML = preview;
  }

  // Print Invoice
  function printInvoice() {
    const preview = document.getElementById('invoice-preview');
    if (preview.innerHTML.trim() === "") {
      alert("No invoice data to print!");
      return;
    }
    window.print(); // Opens the print dialog
  }