import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
	const { budget, currency, dispatch, expenses } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
	const chgBudget = (val) => {
		if(val>20000){
			alert('The budget value cannot be higher than 20,000')
			val = budget;
		}
		if(val<totalExpenses){
			alert('You cannot reduces the budget value lower than the spending');
			val = totalExpenses;
		}
		dispatch({
			type: 'SET_BUDGET',
			payload: val
		});
	};
	return (
		<div className='alert alert-secondary'>
			<span>Budget: {currency}

				<input
					required='required'
					type='number'
					id='budget'
					min='0'
					value={budget}
					style={{ width:180 }}
					step='10'
					onChange={(event) => chgBudget(event.target.value)}>
				</input>
			</span>
		</div>
	);
};
export default Budget;

