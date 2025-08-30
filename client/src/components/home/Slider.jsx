import React, { useEffect, useState } from "react"
import { useSelector ,useDispatch } from "react-redux"
import { Card, CardContent } from "@/components/ui/card"
import { FetchAllLaptops } from "@/store/laptop-slice"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"

export default function Slider() {
  const {LaptopsList}= useSelector((state) => state.adminLaptops);
  const [api, setApi] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const [filteredLaptops, setFilteredLaptops] = useState([]) ;
  const dispatch= useDispatch();
  console.log("LaptopsList from slider",LaptopsList);

 useEffect(() => {
   dispatch(FetchAllLaptops())
  },[dispatch]);
  
  useEffect(() => {
    if (!api || isHovered) return
   const interval = setInterval(() => {
   const count = api.scrollSnapList().length
   const current = api.selectedScrollSnap()
   const nextIndex = (current + 1) % count
          api.scrollTo(nextIndex)
        }, 3000)

    return () => clearInterval(interval)
  }, [api, isHovered]);


 useEffect(() => {
  if (LaptopsList.length > 0) {
    const filteredLaptops = LaptopsList.filter((laptop) => {
      return (
        laptop.condition === "brand_new" &&
        laptop.imageUrl &&
        laptop.imageUrl.trim() !== ""
      );
    });
    setFilteredLaptops(filteredLaptops);}
     
}, [LaptopsList]);



  return (
    <div
      className="flex items-center justify-center lg:h-[250px]  rounded-lg     "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
       style={{ backgroundImage: "url('https://res.cloudinary.com/dc1av8eef/image/upload/v1756321761/laptop-bg_baxggm.jpg')" }}
    >
     <Carousel
  setApi={setApi}
  opts={{ loop: true 
  }}
  className="w-full max-w-6xl lg:h-[250px] z-10 bg-transparent"
>
  <CarouselContent className="w-full lg:h-[250px] items-center bg-transparent">
    {Array.from({ length: filteredLaptops.length }).map((_, index) => (
      <CarouselItem key={index} className="w-full lg:h-[250px]  bg-transparent">
        <div className="p-1 bg-transparent">
          <Card className="w-full lg:h-[250px] bg-transparent border-none"> 
            <CardContent className="flex w-full h-[250px]  items-center bg-transparent  ">
              {filteredLaptops[index] && filteredLaptops[index].imageUrl ? (  
             <>
             <div div className="  h-auto w-1/2  p-2  flex items-end  bg-transparent   flex-col  ">
                
                 <div className="text-center w-1/2 bg-transparent"> <div className="text-center  "> 
                  <h2 className="text-4xl    font-bold ">
                  {filteredLaptops[index].model}
                </h2></div>
                <div className="text-center" > <p className="text-xl  bg-transparent ">
                  Category: {filteredLaptops[index].category}
                </p></div>
                <div className="text-center bg-transparent"> <p className="text-xl    ">
                  Brand: {filteredLaptops[index].brand} 
                  </p> </div>
                 <div></div>
                <Button className="mt-4 bg-yellow-700  w-full
                 text-lg hover:bg-yellow-500
                 hover:text-black
                 transition duration-300
                 shadow-lg
                 transform hover:scale-105
                 ">Buy Now</Button> 
                 </div>
                </div>
               <img
             src={filteredLaptops[index].imageUrl}
          alt={`Laptop ${index + 1}`}
           className=" bg-none  rounded-md  max-h-[200px] object-contain transition-transform duration-300 hover:scale-90"
            />
              </>
              ) : (
                <div className="h-[250px] w-full flex items-center justify-center bg-gray-200 text-gray-500">
                  No Image
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}
