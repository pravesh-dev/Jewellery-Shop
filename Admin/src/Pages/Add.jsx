import React, { useState } from 'react'
import uploadIcon from '../assets/upload.png';

// Defining the Add component
const Add = () => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  console.log('image1 = ', image1);
  console.log('image2 = ', image2);
  console.log('image3 = ', image3);
  console.log('image4 = ', image4);
  
  
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
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img src={!image1 ? uploadIcon : URL.createObjectURL(image1)} className='w-20 cursor-pointer border border-gray-300' alt="product image" />
            <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img src={!image2 ? uploadIcon : URL.createObjectURL(image2)} className='w-20 cursor-pointer border border-gray-300' alt="product image" />
            <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img src={!image3 ? uploadIcon : URL.createObjectURL(image3)} className='w-20 cursor-pointer border border-gray-300' alt="product image" />
            <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img src={!image4 ? uploadIcon : URL.createObjectURL(image4)} className='w-20 cursor-pointer border border-gray-300' alt="product image" />
            <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>
    </form>
  )
}

// Exporting the Add component as the default export
export default Add
