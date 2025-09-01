import React from 'react'
import UserProductCardView from '../shopping-view/Product-Card';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { FetchAllLaptops} from '../../store/laptop-slice/index';
import { Loader2 } from "lucide-react";



const BrandNewLap = () => {
  const dispatch = useDispatch();
  const { LaptopsList } = useSelector((state) => state.adminLaptops);
  const [brandNewLaptops, setBrandNewLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    dispatch(FetchAllLaptops())
      .unwrap()
      .catch((err) => console.error("Failed to fetch:", err))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  // Filter laptops whenever LaptopsList changes
  useEffect(() => {
    if (LaptopsList && LaptopsList.length > 0) {
      const filtered = LaptopsList.filter(
        (laptop) => laptop.condition === "brand_new"
      );
      setBrandNewLaptops(filtered);
    } else {
      setBrandNewLaptops([]);
    }
  }, [LaptopsList]);

  return (
    <div className="flex gap-1">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-purple-600 w-[20%] font-bold mb-4 my-5 pl-5 text-center">
        Brand New <br /> Laptops
      </h1>

      {isLoading ? (
        <div className="flex items-center justify-center w-[80%] p-5 bg-gray-100 rounded-lg shadow-lg">
          <Loader2 className="w-6 h-6 animate-spin text-yellow-400" />
          <p className="ml-2 text-lg text-gray-600">Loading...</p>
        </div>
      ) : brandNewLaptops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-gray-100 rounded-lg shadow-lg w-[80%]">
          {brandNewLaptops.map((laptop) => (
            <UserProductCardView key={laptop._id} laptop={laptop} />
          ))}
        </div>
      ) : (
        <p className="w-[80%] text-center text-2xl p-5 bg-gray-100 rounded-lg shadow-lg">
          No brand new laptops available at the moment.
        </p>
      )}
    </div>
  );
};

export default BrandNewLap;

