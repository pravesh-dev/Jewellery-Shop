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
    <form className='flex flex-col w-full items-start gap-3 pl-3 sm:pl-10 '>
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

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e)=> setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border border-gray-300' type="text" placeholder='Type here' />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product title</p>
        <input onChange={(e)=> setTitle(e.target.value)} value={title} className='w-full max-w-[500px] px-3 py-2 border border-gray-300' type="text" placeholder='Type here' />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border border-gray-300' placeholder='Write description here'></textarea>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Product category</p>
          <select onChange={(e)=> setCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-300'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub category</p>
          <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-300'>
            <option value="Necklace">Necklace</option>
            <option value="Ring">Ring</option>
            <option value="Chain">Chain</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Earring">Earring</option>
            <option value="Statue">Statue</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=> setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] border border-gray-300' type="number" placeholder='25' />
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setOnSale(prev => !prev)} checked={onSale} type="checkbox" id='onsale' />
        <label className='cursor-pointer' htmlFor="onsale">OnSale</label>
      </div>

        <div>
          <p className='mb-2'>Product discount</p>
          <input onChange={(e)=> setDiscount(e.target.value)} value={discount} className='w-full px-3 py-2 sm:w-[120px] border border-gray-300' type="number" placeholder='0' />
        </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button className='w-full sm:w-44 py-2 mt-4 bg-black text-white' type='submit'>ADD</button>
    </form>
  )
}

// Exporting the Add component as the default export
export default Add
