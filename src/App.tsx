// import { useState } from 'react'
import { useContext } from 'react';
import './App.css';

import { TThemeContext, ThemeContext } from './context/ThemeProvider';
import Select from './components/Select';


function App() {
	// const [counter, setCounter]= useState(0)

	const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
	// console.log(dark);
	return (
		<div
			className={`h-screen w-full flex justify-center items-center ${
				dark ? 'bg-black' : 'bg-white'
			}`}
		>
			{/* <button
				className={`btn border-t-neutral-700 ${
					dark
						? 'text-white text-2xl border border-white'
						: 'text-black text-2xl border border-black'
				}`}
				onClick={() => setDark(!dark)}
			>
				Toggle
			</button> */}

<Select>
  <Select.SelectOption value='option1'>option 1</Select.SelectOption>
  <Select.SelectOption value='option2'>option 2</Select.SelectOption>
  <Select.SelectOption value='option3'>option 3</Select.SelectOption>
  <Select.SelectOption value='option4'>option 4</Select.SelectOption>
</Select>
     
		</div>
	);
}

export default App;
