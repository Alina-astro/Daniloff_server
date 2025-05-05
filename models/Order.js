import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    trackingCode: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    zip: { type: String, required: true }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;