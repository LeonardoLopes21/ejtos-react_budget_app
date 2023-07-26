import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const SelectCurr = () => {

    const {dispatch, budget} = useContext(AppContext);

    const chngCurr = (newCurr) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurr,
        })

    }


    return(
        <div>
            <select onChange={(e) => {chngCurr(e.target.value)}}>
                <option selected hidden > Currency (£ Pound) </option>
                <option value="$"> $ </option>
                <option value="£"> £ </option>
                <option value="€"> € </option>
                <option value="₹"> ₹ </option>
            </select>
        </div>
    )

}

export default SelectCurr