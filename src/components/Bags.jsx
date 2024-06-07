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

    console.log(cardData);

    return (
        <div>
            <h2 className='m-10'>Bags . Backpacks</h2>
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
