import { createContext, useContext, useState } from 'react';

const SelectContecxt = createContext(null);

const Select = ({ children }) => {
	const [selectedOption, setSelectedOption] = useState('');

	return (
		<SelectContecxt.Provider value={{ selectedOption, setSelectedOption }}>
			<select onChange={(e) => setSelectedOption(e.target.value)}>{children}</select>
		</SelectContecxt.Provider>
	);
};

const SelectOption = ({ value, children }) => {
	const { selectedOption, setSelectedOption } = useSelected();

	const isActive = selectedOption == value;
	return (
		<option className={`${isActive ? 'bg-red-300' : 'bg-white'}`} value={value}>
			{children}
		</option>
	);
};

Select.SelectOption = SelectOption;
export default Select;

const useSelected =()=>{

const context= useContext(SelectContecxt)
if (! context){
    throw new Error('context is required')
}
return context
}
