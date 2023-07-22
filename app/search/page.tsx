"use client";
import React, {FormEvent, useState} from 'react';
import Question from "@/components/question/question";
import Dropdown from "@/components/dropdown/dropdown";

const MyPage = () => {
 const [openTab, setTab] = useState('patients');
 const [specOption, setSpecOption] = useState('Choose speciality');
 const [langOption, setLangOption] = useState('Choose language');
 const handleSpecChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecOption(event.target.value);
  };
 const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLangOption(event.target.value);
  };
 const handleSubmit = (event: FormEvent<any>) => {
    event.preventDefault();
    console.log(event.currentTarget.email.value)
    // Process the form data or send it to a server via API, etc.
    // Perform any other actions or validation here
  };

  return (
    <div className = "flex flex-col min-h-screen relative mx-auto">
        <div className = "bg-blue-950 font-helvetica-neue">
            <div className = "pt-6 sm:pt-12 container relative mx-auto overflow-hidden">
                <p className = "text-white text-center font-semibold text-3xl tracking-wide">Find specialist</p>
                <form className="flex gap-3 pt-10 pb-6 items-start justify-center overflow-x-auto">
                    <div className="flex-1 h-full">
                        <Dropdown selections={['Choose speciality', 'Orthodontics']} dropdownOption={specOption} selectOption={handleSpecChange}/>
                    </div>
                    <input type="text" id="location" name="location" placeholder="Type city or country" className="flex-1 h-full text-blue-950 px-3 py-2 border rounded-md outline-none border-blue-950"/>
                    <div className="flex-1 h-full">
                        <Dropdown selections={['Choose language', 'Turkey']} dropdownOption={langOption} selectOption={handleLangChange}/>
                    </div>
                    <button type="submit" className="flex-1 h-full px-3 py-2 bg-white font-helvetica-neue text-blue-950 rounded-md">Search</button>
                </form>
            </div>
        </div>
        <div className = "bg-slate-100">
            <div className = "h-54 font-helvetica-neue py-12 mx-auto flex flex-col container">
                <p className="text-center text-blue-950 font-bold text-3xl mt-2">Can’t find what you’re looking for?</p>
                <p className="text-center text-blue-950 text-md mx-40 mt-4">It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. </p>
                <div className = "text-center mt-10">
                    <a href="/" className="text-sm bg-blue-950 rounded text-white w-full px-14 py-3">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyPage;