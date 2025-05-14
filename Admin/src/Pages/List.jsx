import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const List = () => {

  const [list, setList] = useState([])

  const fetchList = async () => {

    try{ 

      const response = await axios.get(backendUrl + 'api/product/list')
      
      if(response.data.success){
        setList(response.data.products)
        console.log(response.data.products[0].name)
      }else {
        toast.error(response.data.message)
      }

    }catch(error){
      console.log(error)
      toast.error(response.data.message)
    }

  }

  useEffect(() => {
    fetchList()
  }, [])
  

  return (
    <div>
      {list.map((product, index) => (
        <div key={index}>{product.name}</div>
      ))}
    </div>
  )
}

export default List
