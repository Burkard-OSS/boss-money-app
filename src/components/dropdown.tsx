import React from "react";
import DropdownField from "./dropdown-field";
import useBudgetContext from "../components/context";

const Dropdown = ({ title, category }: { title: string; category: any }) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showEditTitle, setShowEditTitle] = React.useState(false);
  const [flexTitleValue, setFlexTitleValue] = React.useState(title);
  // @ts-ignore
  const { state, dispatch } = useBudgetContext();

  const handleSaveTitle = () => {
    // update global state
    dispatch(
      {
        type: "EDIT_CATEGORY",
        payload: {
          oldTitle: title,
          newTitle: flexTitleValue
        }
      }
    );
    setShowEditTitle(false);
  };

  return (
    <div className="border shadow-lg mb-5">
      <div className="bg-gray-300 p-2 flex justify-between">
        {showEditTitle ? (
          <>
            <input
              className="font-medium bg-opacity-5"
              type="text"
              value={flexTitleValue}
              onChange={(e) => {
                setFlexTitleValue(e.target.value);
              }}
            />
            <button
              onClick={() => handleSaveTitle()}
            >Save
            </button>
          </>
        ) : (
          <h3 className="font-medium" onClick={() => setShowEditTitle(true)}>
            {title ?? "undefined title"}
          </h3>
        )}
        <button onClick={() => setShowDropDown(!showDropDown)}>
          {showDropDown ? "close" : "open"}
        </button>
      </div>
      {showDropDown && (
        <div className="p-2" id="Dropdown">
          <div className="mb-2" id="DropdownRow">
            {category.length ? (
              category.map((item: any) => (
                <DropdownField item={item} key={item.title} />
              ))
            ) : (
              <i className="text-gray-400 text-sm">No fields added yet</i>
            )}
          </div>
          <button className="hover:text-green-400">Add Item</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
