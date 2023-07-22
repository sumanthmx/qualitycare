import React from "react";

interface CardProps {
  title: string;
  logoName: string;
  list: string[];
  alias: string;
  openCard: string;
  handleExpansion: (arg: string) => void;
}
const ExpandCard: React.FC<CardProps> = ({title, logoName, list, alias, openCard, handleExpansion}) =>
{
    const handleClick = (str: any) => {
        if (openCard === alias) {
            handleExpansion('');
        }
        else handleExpansion(str); // Pass the selected option to the parent component
    };
    return (
        <div style={{minHeight: 280}} className={`border rounded shadow-lg relative max-w-md mx-auto rounded-sm h-fit z-10 text-blue-950 w-full`}
            onClick={() => handleClick(alias)}>
            <div style={{minHeight: 280}} className="px-6 py-10 flex flex-col justify-between">
                <div>
                    <div className = "flex relative mx-auto">
                        <p className="text-xl font-semibold text-black mt-3">{title}</p>
                        <img src={logoName} className="w-8 h-8 ml-auto" alt="Temp image (replace)"></img>
                    </div>
                    <div className="pt-3 px-3">
                      {list.slice(0, 2).map((item, index) => (
                        <div key={index} className="my-1">
                          <p className="text-black"><span>&rarr; &nbsp;</span>{item}</p>
                        </div>
                      ))}
                    </div>
                    {openCard === alias && <div className="px-3">
                      {list.slice(2).map((item, index) => (
                        <div key={index} className="my-1">
                          <p className="text-black"><span>&rarr; &nbsp;</span>{item}</p>
                        </div>
                      ))}
                    </div>}
                </div>
                {openCard != alias && <div className="px-3 py-1.5 text-right">
                          <p className="text-black ">Check all</p>
                    </div>}
                {openCard === alias && <div className="px-3 py-1.5 text-right">
                          <p className="text-black ">Show less</p>
                    </div>}
            </div>
        </div>
    );
}

export default ExpandCard;