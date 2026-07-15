import "./Hero.css";
import logoImage from "../assets/logo.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg-circle hero-bg-circle-1"></div>
      <div className="hero-bg-circle hero-bg-circle-2"></div>

      <div className="overlay">

        <div className="top-badges">

          <span className="rating-badge">
            ⭐ 4.9 Google Rating
          </span>

          <span className="open-badge">
            🟢 Open 11 AM – 11 PM
          </span>

        </div>

        <img
          src={logoImage}
          alt="Sangwan Cafe Logo"
          className="hero-img"
        />

        <h1>SANGWAN'S</h1>

        <h2>CAFE</h2>

        <p>
          Premium Ice Cream • Shakes • Sundaes • Coffee
        </p>
                <div className="hero-info">

          <span>📍 Near Bus Stand, Arga</span>

          <span>🍨 48+ Delicious Items</span>

        </div>

        <div className="hero-buttons">

          <a
            href="https://wa.me/919991312301"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            🍦 Order Now
          </a>

          <a
            href="#menu"
            className="secondary-btn"
          >
            📖 View Menu
          </a>

        </div>

        <div className="offer-box">

          🎁 <strong>Today's Special</strong>

          <br />

          Belgian Cone @ ₹60

        </div>

      </div>

    </section>
  );
}

export default Hero;