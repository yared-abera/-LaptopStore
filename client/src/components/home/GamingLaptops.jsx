import React from 'react'
import UserProductCardView from '../shopping-view/Product-Card';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { FetchAllLaptops} from '../../store/laptop-slice/index';
import { Loader2 } from "lucide-react";

const GamingLaptops = () => {
const dispatch=useDispatch();
const {LaptopsList} = useSelector((state) => state.adminLaptops);
const [GamingLaptops,setGamingLaptops] = useState([]);
const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
   setIsLoading(true);
   const response= dispatch(FetchAllLaptops()).unwrap()
   .catch((err) => console.error("Failed to fetch:", err))
   .finally(() => setIsLoading(false));
    console.log("response you",response);    
},[dispatch]);


useEffect(()=>{
  if(LaptopsList && LaptopsList.length>0){
    const filtered= LaptopsList.filter((laptop)=> laptop.type==="Gaming");
    setGamingLaptops(filtered);
   }   
   else{
      setGamingLaptops([]);
    }
},[LaptopsList]);

  return (
     <>
     <div className='flex gap-1 '>
      <h1 className='lg:text-3xl md:text-2xl text-xl text-purple-600 w-[20%] font-bold 
      mb-4 my-5 pl-5 text-center '>Gaming <br/>Laptops</h1>   
      { 
      isLoading ? (
      <div className="flex items-center justify-center w-[80%] p-5 bg-gray-100 rounded-lg shadow-lg">
        <Loader2 className="w-6 h-6 animate-spin text-center text-yellow-400" />
        <p className="ml-2 text-lg text-gray-600">Loading...</p></div>)
        : GamingLaptops&& GamingLaptops.length > 0 ?
        (<div className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 gap-4 p-5 bg-gray-100 rounded-lg shadow-lg  
         w-[80%]'  >  
       { GamingLaptops.map((laptop) =>{ 
        return <UserProductCardView key={laptop._id} laptop={laptop} /> 
})}
      </div>
    ):
      <p className='w-[80%] text-center text-2xl p-5 bg-gray-100 rounded-lg shadow-lg'>
          No Gaming laptops available at the moment.
      </p>
     
     } 
   
     </div>

    </>
  )
}

export default  GamingLaptops
