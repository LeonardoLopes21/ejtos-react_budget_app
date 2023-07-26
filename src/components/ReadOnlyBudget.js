import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const ReadOnlyBudget = () => {

    const {budget} = React.useContext(AppContext)
    
    return( 
        <div>
            <span id="interText">Budget: £ {budget}</span>
        </div>
    )
}

export default ReadOnlyBudget 