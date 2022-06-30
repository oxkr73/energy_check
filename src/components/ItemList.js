import React from 'react';
import ItemKWH from './ItemKWH';

export const ItemList = ({ props }) => {
    return (
        <>
            {props?.attributes.values.map((val, idx) => <ItemKWH values={val} key={idx} />)}
        </>
    )
}
