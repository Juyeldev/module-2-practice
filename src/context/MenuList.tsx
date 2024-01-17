import { createContext, useContext } from 'react';

const MenuContext = createContext(null);

export const MenuList = ({ children }) => {
	return <MenuContext.Provider value={{them:'dark'}}>
        <ul>
        {children}
        </ul>
        </MenuContext.Provider>;
};
export const MenuItem = () => {

    const{them}= useContext(MenuContext)
console.log(them);
	return <div>Menu Item</div>;
};
