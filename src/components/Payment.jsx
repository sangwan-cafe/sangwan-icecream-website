import qrImage from "../assets/qr.png";

function Payment() {
  return (
    <section className="payment">

      <h2>Pay Online</h2>

      <p>
        Scan QR Code & Pay Securely
      </p>

      <div className="qr-box">

        <img
          src={qrImage}
          alt="Sangwan's Cafe UPI QR"
          className="qr-image"
        />

        <h3>Sangwan's Cafe</h3>

        <p>
          UPI Payment Available
        </p>

      </div>

    </section>
  );
}

export default Payment;