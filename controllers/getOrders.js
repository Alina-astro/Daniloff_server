import Order from '../models/Order.js';

export const getOrders = async (req, res) => {
    try {
        const { from, to, status, payment } = req.query;

        const filter = {};
        if (status) filter.status = status;
        if (payment) filter.payment = payment;
        if (from || to) {
            filter.createdAt = {};
            if (from) filter.createdAt.$gte = new Date(from);
            if (to) filter.createdAt.$lte = new Date(to);
        }

        const orders = await Order.find(filter).sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
};