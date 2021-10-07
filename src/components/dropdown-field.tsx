import React from "react";

const DropdownField = ({
  item
}: {
  item: any
}) => {
  return (
    <div className="p-2">
        <div className="text-gray-900 text-md flex space-between">
          {item?.title}
          {item?.price}
        </div>
    </div>
  );
};

export default DropdownField;
