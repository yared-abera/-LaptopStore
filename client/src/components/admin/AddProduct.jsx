 
import React, { useEffect } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import {laptopFormControls} from '@/config'
import CommonForm from '../common/form' 
import { useState } from 'react'
import ProductImageUpload from './imageUpload'
 


import { useDispatch } from 'react-redux'
import {AddNewLaptop,FetchAllLaptops } from '@/store/laptop-slice/index'

const initialLaptopFormData = {
  model: '',
  quantity: '',
  processor: '',
  price:'',
  screen: '',
  storage: '',
  ram: '',
  graphics: '',
  batteryLife: '',
  useCase: '',
  features: '',
  condition: '',
  externalWebcam: '',
  brand: '',
  category: '',
  color: '',
  type: '',
  imageUrl:''
};



const AddProduct = ({open,setOpen,}) => {


  const [formData, setFormData] =useState(initialLaptopFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch= useDispatch();


 function onSubmit(event) {
  event.preventDefault();
  setIsLoading(true);
  console.log("Form submitted with data to add laptop:", formData);
      const  response= dispatch(AddNewLaptop(formData)); 
       console.log("response from AddNewLaptop action:", response);
      if(response.payload.success) {
        setIsLoading(false);
        dispatch(FetchAllLaptops());}
  console.log(response);
  
}


 
 


  return (
       
      <Sheet open={open} onOpenChange={ () => {
        setOpen(false);
      }} 
    >
        
        <SheetContent className='overflow-auto'>
          <SheetHeader>
           <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          
        <ProductImageUpload 
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        />

          <div className="p-4">
            <CommonForm
             formControls={laptopFormControls}
             formData={{...formData,imageUrl:uploadedImageUrl}}
             setFormData={setFormData}
             onSubmit={onSubmit}
             buttonText="Add Laptop" 
             isLoading={isLoading}   
            />
          </div>
        </SheetContent>
      </Sheet>  
  )
}

export default AddProduct
