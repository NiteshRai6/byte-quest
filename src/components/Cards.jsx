import React from 'react'

export default function Cards() {
    return (
        <div className='w-[280px] h-[483px] shadow-xl rounded-xl'>
            <img src="/card-bag.png" alt="card-bag" />
            <div className='flex flex-col justify-center bg-[#141414] p-5 gap-2'>
                <h2 className='text-xl text-center font-medium'>The Metro Movers Black</h2>
                <div className='flex justify-between'>
                    <div className='flex gap-1 justify-center items-center'>
                        <span className='text-xl'>&#8377;4899</span>
                        <span className='text-xs mt-2'>8999</span>
                        <span className='text-xs text-green-500 mt-2'>&#40;50%off&#41;</span>
                    </div>
                    <img src="/svg/add-cart.svg" alt="add-cart" />
                </div>
            </div>
        </div>
    )
}
