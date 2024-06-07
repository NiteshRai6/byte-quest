'use client';

import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';

export default function Bags() {
    const [cardData, setCardData] = useState();

    async function getCardData() {
        const { data: data } = await axios.get('https://fakestoreapi.com/products');
        // console.log(data);
        setCardData(data);
    }

    useEffect(() => {
        getCardData();
    }, []);

    // console.log(cardData);

    return (
        <div className='m-5'>
            <div className='mb-10 flex gap-2'>
                <span>Bags</span>
                <img src="/svg/dot.svg" alt="dot" />
                <span>Backpacks</span>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-x-10'>
                {cardData?.map(card => (
                    <Cards
                        key={card?.id}
                        card={card}
                    />
                ))}

            </div>
        </div>
    )
}
