import React, { Fragment, useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import EditableBudget from './EditableBudget'
import ReadOnlyBudget from './ReadOnlyBudget'
const Budget = () => {
    const {dispatch, budget} = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-secondary' >
            
            <span><EditableBudget/> </span>
        </div>
    );
};
export default Budget;