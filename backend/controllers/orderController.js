import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {

    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: "Order Created Successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// GET ALL ORDERS
export const getOrders = async (req, res) => {
  try {

    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// GET SINGLE ORDER
export const getOrderById = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id);

    if (!order) {

      return res.status(404).json({
        success: false,
        message: "Order not found",
      });

    }

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// UPDATE STATUS

export const updateOrderStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {

      return res.status(404).json({
        success: false,
        message: "Order not found",
      });

    }

    order.status = status;

    order.statusHistory.push({
      status,
      time: new Date(),
    });

    if (status === "Delivered") {

      order.deliveredAt = new Date();

    }

    await order.save();

    res.status(200).json({

      success: true,

      message: "Order Status Updated Successfully",

      order,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// DELETE ORDER
export const deleteOrder = async (req, res) => {
  try {

    const order = await Order.findByIdAndDelete(
      req.params.id
    );

    if (!order) {

      return res.status(404).json({
        success: false,
        message: "Order not found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Order Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
