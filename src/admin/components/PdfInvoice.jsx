import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import logo from "../../assets/logo.png";

function PdfInvoice({ order }) {

  const downloadInvoice = () => {

    const doc = new jsPDF();

    // ===== LOGO =====
    // Logo next step me add karenge

    doc.setFontSize(22);

    doc.setTextColor(255,77,109);

    doc.text("SANGWAN CAFE",105,20,{align:"center"});

    doc.setFontSize(12);

    doc.setTextColor(80);

    doc.text(
      "Ice Cream • Shakes • Coffee",
      105,
      28,
      {align:"center"}
    );

    doc.text(
      "Shop No.15, Shree Mahasati Kripa Complex",
      105,
      35,
      {align:"center"}
    );

    doc.text(
      "Arga | +91 9991312301",
      105,
      42,
      {align:"center"}
    );

    doc.line(15,48,195,48);

    doc.setFontSize(12);

    doc.text(
      `Invoice : ${order.orderId}`,
      15,
      58
    );

    doc.text(
      `Date : ${new Date(
        order.createdAt
      ).toLocaleString()}`,
      15,
      66
    );

    doc.text(
      `Customer : ${order.customer.name}`,
      15,
      74
    );

    doc.text(
      `Phone : ${order.customer.phone}`,
      15,
      82
    );

    doc.text(
      `Address : ${order.customer.address}`,
      15,
      90
    );
        // ===== ITEMS TABLE =====

    autoTable(doc,{

      startY:100,

      head:[["Item","Qty","Rate","Total"]],

      body:order.items.map(item=>([

        item.name,

        item.qty,

        `₹${item.price}`,

        `₹${item.price * item.qty}`

      ])),

      headStyles:{

        fillColor:[255,77,109]

      },

      styles:{

        halign:"center"

      }

    });

    // ===== TOTAL =====

    let finalY = doc.lastAutoTable.finalY + 15;

    doc.setFontSize(16);

    doc.setTextColor(0);

    doc.text(

      `Grand Total : ₹${order.total}`,

      140,

      finalY

    );

    finalY += 12;

    doc.setFontSize(12);

    doc.text(

      `Payment : ${order.paymentMethod.toUpperCase()}`,

      15,

      finalY

    );

    if(order.paymentMethod==="prepaid"){

      finalY += 8;

      doc.text(

        `UTR : ${order.utr}`,

        15,

        finalY

      );

    }

    if(order.customer.note){

      finalY += 8;

      doc.text(

        `Note : ${order.customer.note}`,

        15,

        finalY

      );

    }

    finalY += 20;

    doc.setDrawColor(180);

    doc.line(15,finalY,195,finalY);

    finalY += 12;

    doc.setFontSize(18);

    doc.setTextColor(255,77,109);

    doc.text(

      "❤️ Thank You ❤️",

      105,

      finalY,

      {align:"center"}

    );

    finalY += 10;

    doc.setFontSize(12);

    doc.setTextColor(80);

    doc.text(

      "Visit Again",

      105,

      finalY,

      {align:"center"}

    );

    finalY += 8;

    doc.text(

      "Sangwan Cafe",

      105,

      finalY,

      {align:"center"}

    );

    doc.save(

      `Invoice-${order.orderId}.pdf`

    );

  };

  return(

    <button

      className="print-btn"

      onClick={downloadInvoice}

    >

      📄 Download Invoice PDF

    </button>

  );

}

export default PdfInvoice;