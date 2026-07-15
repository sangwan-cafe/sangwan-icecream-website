import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExportExcel({ orders }) {

  const exportFile = () => {

    const data = orders.map((order) => ({

      "Order ID": order.orderId,

      "Customer": order.customer.name,

      "Phone": order.customer.phone,

      "Address": order.customer.address,

      "Payment": order.paymentMethod,

      "Status": order.status,

      "Total": order.total,

      "Date": new Date(order.createdAt).toLocaleString(),

      "Items": order.items
        .map(
          (item) =>
            `${item.name} x${item.qty}`
        )
        .join(", "),

    }));
        const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Orders"
    );

    const excelBuffer = XLSX.write(
      workbook,
      {
        bookType: "xlsx",
        type: "array",
      }
    );

    const file = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

    saveAs(
      file,
      `SangwanCafe_Orders_${
        new Date()
          .toISOString()
          .slice(0, 10)
      }.xlsx`
    );

  };

  return (

    <button
      className="export-btn"
      onClick={exportFile}
    >

      📥 Export Orders to Excel

    </button>

  );

}

export default ExportExcel;