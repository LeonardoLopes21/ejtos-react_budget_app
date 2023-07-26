import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const EditableBudget = () => {


    const {dispatch, budget} = useContext(AppContext);
    const [finVal, setFinVal] = React.useState(0)
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    useEffect(()=>{
		setFinVal(budget);
	}, [])

    const budgetSetter = (val, e) => {
        let valToBeAdded = Number(val)

        if(val - finVal === 1){
            valToBeAdded += 9
        } else if (val - finVal === -1){
            valToBeAdded -= 9
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: valToBeAdded,
        })

        setFinVal(valToBeAdded)
        
        
    }

    return(
        <div>
            <input type="number" value={finVal} onChange={(e) => {budgetSetter(e.target.value, e)}}/>
        </div>
    )
}

export default EditableBudget