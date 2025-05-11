import Order from '../models/Order.js';

export const getOrders = async (req, res) => {
  try {
    const { from, to, status, payment } = req.query;

    const query = {};

    if (from || to) {
      query.createdAt = {};
      if (from) query.createdAt.$gte = new Date(from);
      if (to) {
        const toDate = new Date(to);
        toDate.setHours(23, 59, 59, 999); // включаем весь день до конца
        query.createdAt.$lte = toDate;
      }

    }

    if (status) {
      query.status = status;
    }

    if (payment) {
      query.payment = payment;
    }

    const orders = await Order.find(query).sort({ createdAt: -1 });

    res.status(200).json({ orders });
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};