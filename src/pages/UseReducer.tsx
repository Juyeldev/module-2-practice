import { useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (currentState, action) => {
	switch (action.type) {
		case 'increment':
			return { count: currentState.count + 1 };

		case 'decrement':
			return { count: currentState.count - 1 };
		case 'incrementBy3':
			return { count: currentState.count + action.payload };

		default:
			currentState;
	}
};

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1> {state?.count}</h1>
			<button onClick={() => dispatch({ type: 'increment' })} type="button">
				increment{' '}
			</button>
			<button onClick={() => dispatch({ type: 'decrement' })} type="button">
				decrement{' '}
			</button>
			<button onClick={() => dispatch({ type: 'incrementBy3', payload: 3 })} type="button">
				incrementBy3{' '}
			</button>
		</div>
	);
};

export default UseReducer;
