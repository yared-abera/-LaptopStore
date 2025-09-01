import React from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

 function CommonForm({formControls,formData,setFormData,onSubmit,buttonText,isLoading}) {

    const [ selectedBrand, setSelectedBrand] = useState('');

   function renderInputByComponentType(getControlItem)
   {

      
     let element=null;
     const value= formData[getControlItem.name];
     switch(getControlItem.componentType){
      case "input":
         element= (
            <Input className="bg-gray-300 p-2 rounded-md"
             name={getControlItem.name}
             placeholder={getControlItem.placeholder}
             id={getControlItem.name}
             type={getControlItem.type}
             value={value}
             onChange={event=>setFormData({
               ...formData,
               [getControlItem.name]:event.target.value
            })}
             />   
          );
          break;
          case "select":
         element= (
              <Select value={value} onValueChange={(value)=>{
              setFormData({
               ...formData,
               [getControlItem.name]:value
               });
                {getControlItem.name==="brand"?setSelectedBrand(value):null} ;
            }
               } 
               >
            <SelectTrigger className="w-full">
            <SelectValue placeholder={getControlItem.placeholder}/>
             
            </SelectTrigger>
            <SelectContent>
               {
                getControlItem.options &&
                getControlItem.options.length>0 ?
                getControlItem.options.map((optionItem)=>{
                if(getControlItem.name==="category" && selectedBrand!=="")  
                    return optionItem.brand===selectedBrand ? <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem> :null
                  else return <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem> 
                }):null
                               }
            </SelectContent>

              </Select> 
          );
          break;
          case "textarea":
         element= (
            <Input 
             name={getControlItem.name}
             placeholder={getControlItem.placeholder}
             id={getControlItem.name}
             value={value}
             onChange={event=>setFormData({
               ...formData,
               [getControlItem.name]:event.target.value
            })}
             />   
          );
          break;
         default :
         element= (
            <Input
             name={getControlItem.name}
             placeholder={getControlItem.placeholder}
             id={getControlItem.name}
             type={getControlItem.type}
             value={value}
             onChange={event=>setFormData({
               ...formData,
               [getControlItem.name]:event.target.value
            })}
             />);

     }

     return element

   }







  return (
     <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3'>
         { formControls.map(controlItem=> <div className='grid  w-full gap-1.5 '>
           <Label className="mb-1">{controlItem.label}</Label>
            {
            
            renderInputByComponentType(controlItem)
           }
         </div>)}
        </div> 
        <Button type="submit" className="mt-4 w-full">{isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> :buttonText || "Submit" }</Button> 
     </form>
  )
}

export default CommonForm