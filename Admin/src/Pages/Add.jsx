import React, { useState } from 'react'

// Defining the Add component
const Add = () => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [onSale, setOnSale] = useState(false);
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Ring');
  const [bestseller, setBestseller] = useState(false);

  // Returning the JSX for the Add component
  return (
    <div>
      
    </div>
  )
}

// Exporting the Add component as the default export
export default Add
