import React from 'react';

const Dropdown = ({title, children}: {title: string, children: any}) => {
    const [showDropDown, setShowDropDown] = React.useState(false);
    
    return (
        <div className="border shadow-lg">
            <div className="bg-gray-300 p-2 flex justify-between">
                <h3 className="font-medium">{title ?? "undefined title"}</h3>
                <button 
                    onClick={()=>setShowDropDown(!showDropDown)}
                >
                    {showDropDown ?  'close' : 'open'}
                </button>
            </div>
            {showDropDown && 
                <div className="p-2">
                    <p>{children ?? <i className="text-gray-400 text-sm">No fields added yet</i>}</p>
                    <button className="hover:text-green-400">Add Item</button>
                </div>
            }
        </div>
    )
}

export default Dropdown;