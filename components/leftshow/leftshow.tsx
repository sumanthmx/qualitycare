import React from "react";

interface ClickProps {
  img: string;
  text: string;
  tag: string;
  answer: string;
  toggleReveal: (arg: string) => void;
  activeReveal: string;
  hasReveal: boolean;
  price: number;
}

const Leftshow: React.FC<ClickProps> = ({img, text, tag, answer,
                                            toggleReveal, activeReveal, hasReveal, price}) =>
{
    const handleClick = (str: any) => {
        if (hasReveal) {
            if (activeReveal == tag) {
                toggleReveal('');
            }
            else {
                toggleReveal(str);
            }
        } // Pass the selected option to the parent component
    };
    return (
        <div className="flex flex-col">
            <button
              className="w-full flex items-center justify-between bg-white hover:bg-gray-200 text-blue-950 py-0
              shadow-sm rounded relative"
              onClick={() => handleClick(tag)}
            >{hasReveal === true &&
                  <span className="flex items-center text-xl text-left">
                    {activeReveal === tag ? '\u25B2' : '\u25BC'}&nbsp;
                  </span>}
              <span className="flex-1 flex relative text-left">
                  <img src={img} alt="Home Icon 1 (replace)" className="w-12 h-12"/>
                  <p className="flex align-text-top ml-4 text-md items-center">{text}</p>
              </span>
              <span className="flex items-center text-xl text-right">
                {`$${price}`}
              </span>
            </button>
            {hasReveal && <div
              className={`bg-white shadow-sm p-4 w-full ${activeReveal === tag ? '' : 'hidden'}`}
            >
              <p>{answer}</p>
            </div>}
      </div>);
}

export default Leftshow;