//import { type } from '@testing-library/user-event/dist/type';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { dispatch, currency } = useContext(AppContext);
	const chgCurrency = (val) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: val
		});
	};
	return (
		<span className="alert bg-success">
			Currency:{currency}(
			<select className="alert" onChange={(event) => chgCurrency(event.target.value)}>
				<option value="$" name="dollar">$ Dollar</option>
				<option value="£" name="dollar">£ Pound</option>
				<option value="€" name="dollar">€ Euro</option>
				<option value="₹" name="dollar">₹ Rupee</option>
			</select>)
		</span>
	);
}

export default Currency;