import React, { useEffect, useState } from 'react'

const ProductGallery = ({product,id,setCurrentPhotoId,currentPhotoId}) => {


    useEffect(()=>{
        setCurrentPhotoId(product.images[0].url)

    },[product,id])

    console.log(currentPhotoId)
  return (
    <div className='flex w-full flex-col gap-2'>
      <div>
        {currentPhotoId &&         <img alt='producto' width={900} height={700} className='w-full h-full object-cover' src={currentPhotoId}/>
}
      </div>
      

        
    </div>
  )
}

export default ProductGallery