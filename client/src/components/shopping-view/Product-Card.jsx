import React from 'react'
import { Card, CardContent,
         CardDescription, CardFooter,
         CardHeader, CardTitle 
        } from '../ui/card'
import { Button } from '../ui/button'
 

const UserProductCardView = ({laptop}) => {
  return (
    <Card className='hover:shadow-lg transition-shadow duration-300 ease-in-out '>
        
        <CardContent className=' w-full '>  
        <div className=' items-center justify-center align-center rounded-md w-full border-2 border-gray-200 '>  
        <div className='flex flex-col  w-full'>
        <img className=' pt-2 h-40 w-40 transition-transform 
        duration-300 hover:scale-105' 
        src={ laptop.imageUrl} alt={`Image of ${laptop.model}`} 
         />
        <div className=' '>
        <h1> <span className='font-bold text-lg '> {laptop.model} </span></h1>
        <h1> <span className='text-red-600 hover:text-yellow-700 hover:underline'> {laptop.price} ETB </span></h1>
        <h1> <span className='text-gray-600 '> {laptop.condition} </span></h1>
        <div className='flex  justify-between  '>
        <Button className='mt-4  bg-yellow-700' >Add to Cart</Button> 
        </div>
        </div>
        </div>
      </div>
      </CardContent> 

    </Card> 

   )
}

export default UserProductCardView
