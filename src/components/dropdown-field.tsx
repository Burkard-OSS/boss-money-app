import React from "react";

const DropdownField = ({
  item
}: {
  item: {title: string, price: number}
}) => {
  return (
    <div className="border-b-2 border-opacity-50 pb-1">
        <div className="text-gray-900 text-md flex justify-between">
          <span>{item?.title}</span>
          <span>{item?.price}</span>
        </div>
    </div>
  );
};

export default DropdownField;
