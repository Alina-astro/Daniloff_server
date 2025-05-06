import Order from "../models/Order.js";

export const insertOrder = async (req, res) => {
    
    const data = req.body;
    console.log('Received data:', data);

    try {
        const newOrder = new Order({
            trackingCode: data.TrackingCode, // регистр изменила с мал на бол
            name: data.Name,
            email: data.Email,
            phone: data.Phone,
            zip: data.Zipcode,
            plumbingType: data.PlumbingType,
            material: data.Material,
            defects: data.Defects,
            comment: data.Comment

        });

        await newOrder.save();
        return res.status(201).json({ message: 'Order saved successfully', order: newOrder });
    }

    catch (err) {
        console.error('Error adding request:', err);
        return res.status(500).json({ message: 'Error saving order', error: err });
    }
};