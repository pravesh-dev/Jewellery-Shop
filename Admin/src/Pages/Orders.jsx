import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {

    if(!token){
      return null
    }

    try {
      
      const response = await axios.post(backendUrl + 'api/order/list', {}, {headers: {token}});

      if(response.data.success) {
        setOrders(response.data.orders);
      } else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }

  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return <div>orders page</div>;
};

export default Orders;
