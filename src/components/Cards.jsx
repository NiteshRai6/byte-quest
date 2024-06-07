import React from 'react'

export default function Cards({ card }) {
    return (
        <div className='w-[280px] h-[483px] shadow-xl rounded-xl relative'>
            <img
                src="/svg/bookmark.svg"
                alt="bookmark"
                className='absolute top-3 right-5'
            />
            <img
                src={card?.image}
                alt="card-bag"
                className='w-[280px] h-80'
            />
            <div className='flex flex-col justify-center bg-[#141414] p-5 gap-2'>
                <h2 className='text-xl text-center font-medium'>
                    {card?.title.substring(0, 20)}
                </h2>
                <div className='flex justify-between'>
                    <div className='flex gap-1 justify-center items-center'>
                        <span className='text-xl'>&#8377;{card?.price}</span>
                        <span className='text-xs mt-2'>8999</span>
                        <span className='text-xs text-green-500 mt-2'>&#40;50%off&#41;</span>
                    </div>
                    <img src="/svg/add-cart.svg" alt="add-cart" />
                </div>
            </div>
        </div>
    )
}
