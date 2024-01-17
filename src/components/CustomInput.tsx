import { forwardRef } from "react";
type TCustomInput={
    className:string;
}
const CustomInput = forwardRef<HTMLInputElement, TCustomInput>(({className}, inputRef) => {
	return (
		<div>
			<input
            ref={inputRef}
             className={className} type="text" name="name" id="name" />
		</div>
	);
});

export default CustomInput;
