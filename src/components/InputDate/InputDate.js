import React, { useState } from 'react';
import moment from "moment";

export const InputDate = (props) => {
    const { id, dates, setDates } = props;
    const [error, setError] = useState('')
    const handleDates = (ev) => {
        const date = ev.currentTarget.value;
        if (id === 'startDate' && moment(date).isAfter(dates.startDate)) {
            setError('Start date must be before end date')
            setDates({ startDate: null, endDate: null, updated: false })
            return false;
        } else {
            setError('');
        }
        if (id === 'endDate' && moment(date).isBefore(dates.startDate)) {
            setError('End date must be after start date')
            setDates({ ...dates, endDate: null })
            return false;
        } else {
            setError('');
        }
        setDates({ ...dates, [id]: date, updated: true })

    }
    return (
        <div>
            <label htmlFor={id}>
                {id}
                <input type="date" id={id} onChange={(ev) => handleDates(ev)} />
            </label>
            {error}
        </div>
    )
}
