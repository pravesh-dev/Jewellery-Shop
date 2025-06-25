import { useContext, useEffect } from "react"
import { ShopContext } from "../Context/ShopContext";
import { IoMdSearch } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";



const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();

    useEffect(()=>{

      console.log(location)

    }, [location])

  return showSearch ? (
    <div className="pt-28 border-t border-b bg-accent text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2">
      <input className="flex-1 outline-none bg-inherit text-sm" value={search} onChange={(e)=> {setSearch(e.target.value)}} type="text" placeholder="Search" />
    <IoMdSearch className="xl:text-xl" />
      </div>
      <RiCloseFill onClick={()=>{setShowSearch(false)}} className="inline xl:text-lg cursor-pointer" />
    </div>
  ) : null
}

export default SearchBar
