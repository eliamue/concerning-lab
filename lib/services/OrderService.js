const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  static async createOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${value.quantity}`
    );
    const order = await Order.insert(value);
    return order;
  }

  static async updateOrder(value, quantity) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order updated to have quantity of ${value.quantity}`
    );
    const order = await Order.update(value, quantity);
    return order;
  }

  static async deleteOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order of ${value.quantity} deleted`
    );
    const order = await Order.delete(value);
    return order;
  }
  
};
