import { Dropdown } from 'bootstrap';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Select from "react-select"

const SelectCurr = () => {

    const {dispatch, budget} = useContext(AppContext);

    const customStyles = {

        
        placeholder: (defaultStyles) => ({
            ...defaultStyles,
            color: "white"
        }),
                
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            backgroundColor: "#90EE90",
            color: state.isSelected ? "white" : "black",
            "&:hover": {
                backgroundColor: "white",
                color: "black"
            }
        }),

        menu: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#90EE90"
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#90EE90",
            color: "white"
        }),

        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    }

    const changeCurr = (newCurr) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurr,
        })
    }

    const data = [
        {value: "$", label: "$ (USD)" },
        {value: "£", label: "£ (POUND)" },
        {value: "€", label: "€ (EURO)" },
        {value: "₹", label: "₹ (RUPPEE)" },
        

    ]

    const updater = (e) => {

        changeCurr(e.value)

    }


    return(
        <div>

            <Select placeholder="Currency" options={data} styles={customStyles} onChange={updater}/>
            
            {/* <select className="btn btn-success dropdown-toggle selectBox" onChange={(e) => {chngCurr(e.target.value)}}>
                
                <option selected hidden > Currency (£ Pound) </option>
                <option value="$"> $ (USD)</option>
                <option value="£"> £ </option>
                <option value="€"> € </option>
                <option value="₹"> ₹ </option>
                
            </select> */}
        </div>
    )

}

export default SelectCurr