import React from 'react';

const Dropdown = ({children}: any) => {
    const [showDropDown, setShowDropDown] = React.useState(false);
    
    return (
        <div className="border shadow-lg">
            <div className="bg-gray-200 p-2 flex justify-between">
                <h3>Category Title</h3>
                <button 
                    onClick={()=>setShowDropDown(!showDropDown)}
                >
                    {showDropDown ?  'close' : 'open'}
                </button>
            </div>
            {showDropDown && 
                <div className="p-2">
                    stuff
                    {children}
                </div>
            }
        </div>
    )
}

export default Dropdown;