import React, { useEffect, useState } from 'react'

const ProductGallery = ({product,id}) => {


    useEffect(()=>{
        setCurrentPhotoId(product.images[0].url)

    },[product,id])

    const[currentPhotoId,setCurrentPhotoId]=useState(null)
    console.log(currentPhotoId)
  return (
    <div className='flex w-full flex-col gap-2'>
      <div>
        {currentPhotoId &&         <img alt='producto' width={900} height={700} className='w-full h-full object-cover' src={currentPhotoId}/>
}
      </div>
      <div className='flex justify-end gap-4 items-center'>
        {product.images.map((img)=>(
            <button key={img.id} onClick={()=>setCurrentPhotoId(img.url)}>
                            <img alt='producto' width={300} height={300} className='w-20 h-20 object-cover' key={img.id} src={img.url}/>

            </button>
        ))}
         
      </div>

        
    </div>
  )
}

export default ProductGallery