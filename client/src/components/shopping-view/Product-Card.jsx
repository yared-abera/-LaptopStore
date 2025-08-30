import React from 'react'
import { Card, CardContent,
         CardDescription, CardFooter,
         CardHeader, CardTitle 
        } from '../ui/card'
import { Button } from '../ui/button'
 

const UserProductCardView = ({laptop}) => {
  return (
    <Card className='hover:shadow-lg transition-shadow duration-300 ease-in-out'>
       <CardHeader>  
        <CardDescription className='sr-only'>Product short description</CardDescription>
        </CardHeader>
        <CardContent className=' w-full '>  
        <div className=' items-center justify-center align-center rounded-md w-full '>  
        <div className='flex flex-col'>
        <img className='h-40 w-40 transition-transform 
        duration-300 hover:scale-105' 
        src={ laptop.imageUrl} alt="laptop image"
         />
        <h1> <span className='font-bold text-lg '> {laptop.model} </span></h1>
        <h1> Price : <span className='text-red-600 hover:text-yellow-700 hover:underline'>Price ETB </span></h1>
        </div>  
        <div className='flex  justify-between  '>
        <Button className='mt-4  bg-yellow-700' >Add to Cart</Button> 
        </div>
      </div>
      </CardContent> 

    </Card> 

   )
}

export default UserProductCardView
