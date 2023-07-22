import React from "react";

interface ResearchProps {
  img: string;
  text: string;
}
const ResearchEntry: React.FC<ResearchProps> = ({img, text}) => {
    return (
        <div className="flex flex-col">
            <button
                className="w-full flex items-center justify-between bg-white text-blue-950
      shadow-sm rounded relative"
            >
      <span className="flex-3 flex relative text-left items-center">
          <img src={img} alt="Home Icon 1 (replace)" className="h-18"/>
          <p className="flex align-text-top ml-7 text-lg">{text}</p>
      </span>
            </button>
        </div>);
}

export default ResearchEntry;