import React from 'react';
import Cards from './Cards';

export default function Bags() {
    return (
        <>
            <div>
                <h2>Bags . Backpacks</h2>
                <div className='flex flex-wrap p-10 justify-center items-center'>
                    <Cards />
                </div>
            </div>
            <div className='m-20'>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vel laudantium aut, aliquid ducimus assumenda illo culpa, voluptates dolores eum voluptate autem quos porro, corrupti quo libero incidunt optio! Beatae!</h1>
            </div>
        </>

    )
}
