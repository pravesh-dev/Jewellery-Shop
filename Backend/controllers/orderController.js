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
        
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
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
        
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
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
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: stdDeliveryCharge * 100
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


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }