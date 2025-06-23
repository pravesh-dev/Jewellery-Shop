import contactModel from "../models/contactModel.js";

const userContact = async (req, res) => {
    const { name, email, phone, country, message } = req.body;

    if (!name || !email || !phone || !country || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

    try {
        
        const newMessaage = new contactModel({ name, email, phone, country, message });
        await newMessaage.save();

        res.json({success: true, message: 'Thanks for reaching out!'})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message});
    }

}

export default userContact;