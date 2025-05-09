import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    trackingCode: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    zip: { type: String, required: true },
    plumbingType: { type: String, required: true },
    material: { type: String, required: false },
    defects: { type: Array, required: false },
    comment: { type: String, required: false },
    status: { type: String, default: 'not_processed' },   // новое поле
    payment: { type: String, default: 'unpaid' },          // новое поле
});

const Order = mongoose.model('Order', orderSchema);

export default Order;