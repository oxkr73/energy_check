import React from 'react'
import moment from "moment";

export const ItemKWH = ({ values }) => {
    console.log(values)
    return (
        <>
            <div>{moment(values.datetime).format("DD MM YYYY | HH")} : {(values.value * 0.001).toFixed(5)} €/kWh</div>
        </>
    )
}

export default ItemKWH;