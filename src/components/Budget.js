import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch, budget} = useContext(AppContext);
    let storeNewBudg
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const budgetSetter = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: storeNewBudg,
        })
    }

    const ahaha = (val) => {
        if(isNaN(val.target.innerHTML)){
            window.alert("Not a number")
            storeNewBudg = budget
            val.target.innerHTML = budget
        } else if (val.target.innerHTML < totalExpenses){
            window.alert("No")
            storeNewBudg = budget
            val.target.innerHTML = budget
        } 
        
        else {
            storeNewBudg = val.target.innerHTML
            budgetSetter()
        }
    }

    return (
        <div className='alert alert-secondary' >
            <span id="interText">Budget: £ <span contentEditable onKeyUp={(e) => {ahaha(e)}}>{budget}</span></span>
        </div>
    );
};
export default Budget;