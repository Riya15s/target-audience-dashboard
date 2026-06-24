import React from 'react'

const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className=' text-shadow-2xs text-xl leading-normal text-white mb-35'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid officia architecto dolores earum sit omnis!</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-med px-8 py-2 rounded -full '>{props.tag}</button>
                <button className=' text-white font-med px-4 py-3 rounded -full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      
    </div>
  )
}

export default RightCardContent
