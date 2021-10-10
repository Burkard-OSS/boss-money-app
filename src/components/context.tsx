import React from "react";

// Possible actions
export enum actionTypes {
  ADD_CATEGORY = "ADD_CATEGORY",
  ADD_ITEM = "ADD_ITEM",
  EDIT_CATEGORY = "EDIT_CATEGORY",
  EDIT_ITEM = "EDIT_ITEM",
  REMOVE_CATEGORY = "REMOVE_CATEGORY",
  REMOVE_ITEM = "REMOVE_ITEM",
}

const budgetContext = React.createContext({});

// Wrapper component for _app
export const BudgetContextWrapper = ({
  children,
}: {
  children: JSX.Element;
}) => {
  // Default data
  const data = {
    Income: [
      {
        title: "Job",
        price: 8000,
      },
    ],
  };

  // Handles the data changes
  const reducer = (data: any, action: any) => {
    let actionType: actionTypes = action.type;

    switch (actionType) {
      case "ADD_CATEGORY":
        if (data[action.payload] || !action.payload) {
          console.warn(`Category ${action.payload} already exists.`);
          return data;
        }
        const newData = {...data}
        newData[action.payload] = [];
        return newData;
     case "EDIT_CATEGORY":
         if(data[action.payload.oldTitle] !== data[action.payload.newTitle]) {
            const newData = {...data}
           Object.defineProperty(
                newData,
                action.payload.newTitle,
                // @ts-ignore
                Object.getOwnPropertyDescriptor(newData, action.payload.oldTitle)
            )
            delete newData[action.payload.oldTitle];
            return newData;
         }
         return data;
      default:
        return data;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, data);

  return (
    <budgetContext.Provider value={{state, dispatch}}>
      {children}
    </budgetContext.Provider>
  );
};

// Custom hook to make it simpler to get context
const useBudgetContext = () => React.useContext(budgetContext);

export default useBudgetContext;
