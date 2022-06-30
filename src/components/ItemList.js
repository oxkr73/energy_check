import React, { useEffect, useState } from 'react';
import ItemKWH from './ItemKWH';

export const ItemList = ({ props }) => {
    const [averagePrice, setAveragePrice] = useState([]);
    useEffect(() => {
        console.log(averagePrice);
    }, [averagePrice])

    return (
        <>
            {props?.attributes.values.map((val, idx) => <ItemKWH values={val} key={idx} averagePrice={averagePrice} setAveragePrice={setAveragePrice} />)}
        </>
    )
}
