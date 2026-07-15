function TopProducts({ orders }) {

  const products = {};

  orders.forEach((order) => {

    if (order.status !== "Delivered") return;

    order.items.forEach((item) => {

      if (!products[item.name]) {
        products[item.name] = 0;
      }

      products[item.name] += item.qty;

    });

  });

  const topProducts = Object.entries(products)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (

    <div className="chart-card">

      <h2>🏆 Top Selling Products</h2>

      <table className="top-products-table">

        <thead>

          <tr>

            <th>Rank</th>

            <th>Product</th>

            <th>Sold</th>

          </tr>

        </thead>

        <tbody>
                      {topProducts.length === 0 ? (

            <tr>

              <td colSpan="3" style={{ textAlign: "center" }}>
                No delivered orders yet.
              </td>

            </tr>

          ) : (

            topProducts.map((product, index) => (

              <tr key={product[0]}>

                <td>#{index + 1}</td>

                <td>{product[0]}</td>

                <td>{product[1]}</td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default TopProducts;