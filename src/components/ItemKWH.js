import React from 'react'
import moment from "moment";

export const ItemKWH = ({ values, averagePrice, setAveragePrice }) => {
    console.log(values, moment(values.datetime).hour())
    const price = (values.value * 0.001).toFixed(5);
    if (moment(values.datetime).hour() === 23) {
        // setAveragePrice([...averagePrice, price]);
    }
    return (
        <>
            <div>
                {moment(values.datetime).format("DD MM YYYY | HH")} : {price} €/kWh
            </div>
        </>
    )
}

export default ItemKWH;