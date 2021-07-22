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

  static async getAllOrders(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${value.quantity}`
    );

    const order = await Order.insert(value);

    return order;
  }

  // updateOrder
  // static async createOrder(value) {
  //   await sendSms(
  //     process.env.ORDER_HANDLER_NUMBER,
  //     `New Order received for ${value.quantity}`
  //   );

  //   const order = await Order.insert(value);

  //   return order;
  // }
  // deleteOrder
  // static async createOrder(value) {
  //   await sendSms(
  //     process.env.ORDER_HANDLER_NUMBER,
  //     `New Order received for ${value.quantity}`
  //   );

  //   const order = await Order.insert(value);

  //   return order;
  // }

  // getOrderById
  // static async createOrder(value) {
  //   await sendSms(
  //     process.env.ORDER_HANDLER_NUMBER,
  //     `New Order received for ${value.quantity}`
  //   );

  //   const order = await Order.insert(value);

  //   return order;
  // }


};