import React from "react";

interface CardProps {
  imagePath: string;
  title: string;
  name: string;
  preview: string;
  readingTime: string;
  category: string;
  subcategory: string;
}
const Card: React.FC<CardProps> = ({imagePath, title, name, preview
, readingTime, category, subcategory}) =>
{
    return <div className="relative max-w-md mx-auto ring-2 ring-white bg-white shadow-lg z-10 text-blue-950 w-full">
        <img src= {imagePath} alt="" className="w-full h-40 object-cover"/>
        <div className="p-4">
            <p className="text-md">{category} &gt; {subcategory}</p>
            <p className="text-xl font-semibold mt-3">{title}</p>
            <p className="text-md">By <span className="font-semibold">{name}</span></p>
            <p className="mt-6">{preview}</p>
            <div className="flex justify-start pt-4">
                <p className="text-md">Reading Time: <span className="font-semibold">{readingTime}</span></p>
            </div>
        </div>
    </div>;
}

export default Card;