import { useEffect, useState } from 'react';

const UseEfectExmple = () => {
	const [hidden, setHidden] = useState(false);

	return (
		<div>
			<button onClick={() => setHidden((prev) => !prev)} type="button">
				{hidden ? 'Show' : 'Hide'}
			</button>
			{!hidden && <Todo />}
		</div>
	);
};

// const Counter = () => {
// 	const [count, setCount] = useState(0);
// 	useEffect(() => {
// 	const intervalId=	setInterval(() => {
// 			console.log(count);
// 			setCount((prev) => prev + 1);
// 		}, 1000);
// 		return ()=>{
// 			clearInterval(intervalId);
// 		}
// 	}, []);
// 	return <h1>{count}</h1>;
// };
const Todo = () => {
	const controller = new AbortController();
	const signal = controller.signal;
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
			.then((res) => res.json())
			.then((data) => alert(data.title));
		return () => {
			// controller.abort();
		};
	}, []);
	return <h1 className="text-red-600">Todo</h1>;
};

export default UseEfectExmple;
