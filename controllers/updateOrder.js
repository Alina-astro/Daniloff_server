import Order from '../models/Order.js';

export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment, status, payment } = req.body;

        const updated = await Order.findByIdAndUpdate(
            id,
            { comment, status, payment },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order updated', order: updated });
    } catch (err) {
        console.error('Error updating order:', err);
        res.status(500).json({ message: 'Failed to update order' });
    }
};