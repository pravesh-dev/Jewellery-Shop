import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

// Global variables
const currency = 'usd'
const stdDeliveryCharge = '100'
const fastDeliveryCharge = '150'

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place order using cash on delivery method
const placeOrder = async (req, res) => {
    
    try {
        
        const { userId, items, amount, deliveryMethod, address } = req.body;

        // Fast Delivery
        let totalAmount;
        if(deliveryMethod === 'Fast Delivery') {
            totalAmount = Number(amount) + Number(fastDeliveryCharge);
        } 
        // Standard Delivery
        else {
            totalAmount = Number(amount) + Number(stdDeliveryCharge);
        }
        const orderData = {
            userId,
            items,
            address,
            amount: totalAmount ,
            paymentMethod : 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}});

        res.json({success: true, message: 'Order Placed'});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}


// Place order using Stripe method
const placeOrderStripe = async (req, res) => {
    
    try {
        
        const { userId, items, amount, deliveryMethod, address } = req.body;
        const { origin } = req.headers;

        let totalAmount;
        if(deliveryMethod === 'Fast Delivery') {
            totalAmount = Number(amount) + Number(fastDeliveryCharge);
        } 
        // Standard Delivery
        else {
            totalAmount = Number(amount) + Number(stdDeliveryCharge);
        }

        const orderData = {
            userId,
            items,
            address,
            amount: totalAmount,
            paymentMethod : 'Stripe',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        const line_items = items.map((item)=> ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: amount * 100
            },
            quantity: item.quantity
        }))

        let deliveryCharge;

        if(deliveryMethod === 'Fast Delivery') {
            deliveryCharge = fastDeliveryCharge;
        } 
        // Standard Delivery
        else {
            deliveryCharge = stdDeliveryCharge;
        }

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })

        res.json({success: true, session_url:session.url})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}

// Verify Stripe

const verifyStripe = async (req, res) => {

    const { orderId, success, userId } = req.body;

    try {
        
        if(success === 'true') {
            await orderModel.findByIdAndUpdate(orderId, {payment: true})
            await userModel.findByIdAndUpdate(userId, {cartData: {}})
            res.json({success: true})
        }else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({success: false})
        }

        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}

// Place order using Razorpay method
const placeOrderRazorpay = async (req, res) => {
    
}


// All orders data for admin panel
const allOrders = async (req, res) => {
    
    try {

        const orders = await orderModel.find({});
        res.json({success: true, orders});
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}


// User order data for frontend
const userOrders = async (req, res) => {
  
    try {
        
        const { userId } = req.body;

        const orders = await orderModel.find({userId});

        res.json({success: true, orders})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
    
}


// Update order status from admin panel
const updateStatus = async (req, res) => {
    
    try {
        
        const { orderId, status } = req.body;

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status updated"});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}


export { placeOrder, placeOrderStripe, verifyStripe ,placeOrderRazorpay, allOrders, userOrders, updateStatus }