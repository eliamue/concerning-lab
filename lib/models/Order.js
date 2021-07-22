const pool = require("../utils/pool")

// static method: Order.insert, Number.parseInt, Math.random
// instance method: .map, .toString(), .toUpperCase()
module.exports = class Order {
  id;
  quantity;

  constructor(row) {
    this.id = row.id;
    this.quantity = row.quantity;
  }

  static async insert(value) {
    const { rows } = await pool.query(
      'INSERT INTO orders (quantity) VALUES ($1) RETURNING *',
      [value.quantity]
    )
    return new Order(rows[0]);
  }

  static async getAllOrders() {
    const { rows } = await pool.query(
      'SELECT * FROM orders',
    )
    return rows.map(row => new Order(row));
  }

  static async getById(id) {
    
  }

  // static async update(id) {
  //   const existingOrder = await Order.getById(id);
  //   const newQuantity = 

  //   const { rows } = await pool.query(
  //     'UPDATE orders SET quantity=$1, value=$2 WHERE id=$3 RETURNING *',
  //     [newQuantity, ]
  //   )
  // }
  // static async delete(id) {
  //   const { rows } = await pool.query(
  //     'DELETE rows FROM orders',
  //   )
  //   return rows.map(row => new Order(row));
  // }
};

