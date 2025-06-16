import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../../../Admin/src/App";
import { toast } from "react-toastify";

const Verify = () => {

    const { token, setCartItems } = useContext(ShopContext);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const VerifyPaymeny = async () => {

        try {
            
            if(!token) {
                return null
            }

            const response = await axios.post(backendUrl + 'api/order/verifyStripe', {success, orderId}, {headers: {token}});

            if(response.data.success) {
                setCartItems({})
                navigate('/orders')
            }else {
                navigate('/user-cart')
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        VerifyPaymeny();
    },[token])

  return (
    <div>
      
    </div>
  )
}

export default Verify
