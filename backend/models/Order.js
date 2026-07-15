import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    customer: {
      name: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      address: {
        type: String,
        required: true,
      },

      note: {
        type: String,
        default: "",
      },
    },

    items: [
      {
        name: String,
        price: Number,
        qty: Number,
      },
    ],

    paymentMethod: {
      type: String,
      enum: ["cod", "prepaid"],
      default: "cod",
    },

    utr: {
      type: String,
      default: "",
    },

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Preparing",
        "Ready",
        "Out For Delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Pending",
    },

    statusHistory: [
      {
        status: String,
        time: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    deliveredAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);