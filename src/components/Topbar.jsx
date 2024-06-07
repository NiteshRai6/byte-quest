import React from 'react';

export default function Topbar() {
    return (
        <div>
            <div className='mx-10 my-5 flex justify-between'>
                <h1 className='text-xl tracking-[0.8rem]'>TANN TRIM</h1>
                <div className='flex gap-5 justify-center items-center'>
                    <img src="/svg/search.svg" alt="search" />
                    <img src="/svg/user.svg" alt="user" />
                    <img src="/svg/save.svg" alt="save" />
                    <img src="/svg/cart.svg" alt="cart" />
                </div>
            </div>

            <div className='flex justify-center items-center gap-10 mx-10 my-5'>
                <nav>Bags</nav>
                <nav>Travel</nav>
                <nav>Accesories</nav>
                <nav>Gifting</nav>
                <nav>Jewelery</nav>
            </div>

            <div className='flex justify-center items-center gap-10'>
                <img src="/svg/all-bags.svg" alt="bag" />
                <img src="/svg/vanity-pouch.svg" alt="bag" />
                <img src="/svg/tote-bag.svg" alt="bag" />
                <img src="/svg/duffle-bag.svg" alt="bag" />
                <img src="/svg/laptop-sleeve.svg" alt="bag" />
                <img src="/svg/messenger-bags.svg" alt="bag" />
                <img src="/svg/slings-bags.svg" alt="bag" />
                <img src="/svg/handbags.svg" alt="bag" />
            </div>
        </div>

    )
}
