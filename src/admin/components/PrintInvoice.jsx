import Invoice from "./Invoice";

function PrintInvoice({ order }) {

  const handlePrint = () => {

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice ${order.orderId}</title>
        </head>
        <body>
          <h1>Sangwan Cafe</h1>

          <p>Order ID : ${order.orderId}</p>

          <p>Customer : ${order.customer.name}</p>

          <p>Phone : ${order.customer.phone}</p>

          <p>Total : ₹${order.total}</p>

          <script>
            window.onload=function(){
              window.print();
              window.close();
            }
          </script>

        </body>
      </html>
    `);

    printWindow.document.close();

  };

  return (
    <button
      className="print-btn"
      onClick={handlePrint}
    >
      🖨 Print Invoice
    </button>
  );

}

export default PrintInvoice;