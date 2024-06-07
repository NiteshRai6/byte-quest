import React from 'react';

export default function Topbar() {
    return (
        <div>
            <div className='mx-10 my-5 flex flex-wrap lg:justify-between justify-center gap-x-5 gap-y-2'>
                <h1 className='text-xl tracking-[0.8rem]'>TANN TRIM</h1>
                <div className='flex gap-x-5 gap-y-2 justify-center items-center'>
                    <img src="/svg/search.svg" alt="search" />
                    <img src="/svg/user.svg" alt="user" />
                    <img src="/svg/save.svg" alt="save" />
                    <img src="/svg/cart.svg" alt="cart" />
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-x-10 gap-y-2 mx-10 my-5'>
                <nav>Bags</nav>
                <nav>Travel</nav>
                <nav>Accesories</nav>
                <nav>Gifting</nav>
                <nav>Jewelery</nav>
            </div>

            <div className='flex flex-wrap justify-center items-center text-center gap-x-10 gap-y-2 mx-10'>
                <div>
                    <img src="/svg/all-bags.svg" alt="bag" />
                    <h5 className='mt-3'>All Bags</h5>
                </div>

                <div>
                    <img src="/svg/vanity-pouch.svg" alt="bag" />
                    <h5 className='mt-3'>Vanity Pouch</h5>
                </div>

                <div>
                    <img src="/svg/tote-bag.svg" alt="bag" />
                    <h5 className='mt-3'>Tote Bag</h5>
                </div>

                <div>
                    <img src="/svg/duffle-bag.svg" alt="bag" />
                    <h5 className='mt-2'>Duffle Bag</h5>
                </div>

                <div>
                    <img src="/svg/laptop-sleeve.svg" alt="bag" />
                    <h5 className='mt-3'>Laptop Sleeve</h5>
                </div>

                <div>
                    <img src="/svg/messenger-bags.svg" alt="bag" />
                    <h5 className='mt-2'>Messenger Bags</h5>
                </div>

                <div>
                    <img src="/svg/slings-bags.svg" alt="bag" />
                    <h5 className='mt-4'>Slings Bags</h5>
                </div>

                <div>
                    <img src="/svg/handbags.svg" alt="bag" />
                    <h5 className='mt-3'>Handbags</h5>
                </div>
            </div>
        </div>

    )
}
