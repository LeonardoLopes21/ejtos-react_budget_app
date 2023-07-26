import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import EditableBudget from './EditableBudget'
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
            setTimeout(() => {
                if(val.target.innerHTML < totalExpenses){
                    window.alert("Value of budget inferior to total expense!")
                    storeNewBudg = budget
                    val.target.innerHTML = budget
                } else {

                }
            }, 3000)
        } 
        
        else {
            storeNewBudg = val.target.innerHTML
            budgetSetter()
        }
    }

    return (
        <div className='alert alert-secondary' >
            <span id="interText">Budget: £ <span contentEditable onKeyUp={(e) => {ahaha(e)}}>{budget}</span></span>

            <EditableBudget/>
        </div>
    );
};
export default Budget;