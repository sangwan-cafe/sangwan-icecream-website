function ProductCard({ product, addToCart }) {

  return (

    <div className="menu-card">

      {/* Product Image */}

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <span className="best-badge">
          {product.badge}
        </span>

        <button className="fav-btn">
          ❤
        </button>

      </div>

      {/* Product Details */}

      <div className="card-body">

        <h3>{product.name}</h3>

        <div className="rating">

          ⭐ {product.rating}

        </div>
                <p>
          {product.description}
        </p>

        <div className="card-bottom">

          <span className="price">
            ₹{product.price}
          </span>

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            Add +
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductCard;
