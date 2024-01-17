import { useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';

const UseRef2 = () => {
	const myRef = useRef<HTMLInputElement | null >(null);
	
    useEffect(()=>{
        myRef.current?.focus();
    },[])
	return (
		<div>
			<h1>UseRef</h1>
			<form >
				<CustomInput ref={myRef} className='border border-x-red-500'/>
                <button type="submit">submit</button>
			</form>
		</div>
	);
};

export default UseRef2;
