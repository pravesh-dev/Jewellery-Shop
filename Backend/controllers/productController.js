
// Function to add product
const addProduct = async (req, res) => {
    try {
        const {name, title, description, price, onSale, discount, image, category, subCategory, bestSeller} = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];


    const images = [image1, image2, image3, image4].filter((item)=> {item !== undefined})

    console.log(name, title, description, price, onSale, discount, category, subCategory, bestSeller);
    console.log(images)

    res.json({})
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(error);
    }
}

// Function to list product
const listProducts = async (req, res) => {

}

// Function for removing product
const removeProduct = async (req, res) => {

}

// Function for single product info
const singleProduct = async (req, res) => {

}

export { addProduct,listProducts, removeProduct, singleProduct }