import React from "react";
interface DropProps {
 selections: string[];
 dropdownOption: string;
 selectOption: (arg: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Dropdown:  React.FC<DropProps> = ({selections, dropdownOption, selectOption}) => {
    return (<div className="mb-4">
        <select
        id="dropdown"
        name="dropdown"
        onChange={selectOption}
        value={dropdownOption}
        className="w-full px-3 py-2 border rounded-md outline-none border-blue-950 text-black"
      >
        {selections.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>);
}

export default Dropdown;