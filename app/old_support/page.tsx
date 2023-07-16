"use client";
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import styles from "@/app/page.module.css";
import Card from "@/components/card/card";


const MyPage = () => {
 const [openTab, setTab] = useState('patients');
 const [openCategory, setCategory] = useState('started')
 const [activeAnswer, setActiveAnswer] = useState('');
    const toggleAnswer = (answerId: string) => {
        if (activeAnswer === answerId) {
            setActiveAnswer('');
        } else {
            setActiveAnswer(answerId);
        }
    };

  return (
    <div className = "flex flex-col min-h-screen relative mx-auto">
        <div className = "bg-blue-950">
            <div className = "py-6 sm:py-12 container relative">
                <p className = "text-white text-center font-bold text-2xl">Quality Care Global</p>
                <p className = "text-white text-center text-lg mt-2">Help Center</p>
                <div className="flex flex-wrap justify-center pt-10 -mb-1">
                    <button
                      className={`${openTab === 'patients' ? 'bg-white' : 'bg-gray-300 hover:bg-white'} w-full md:w-auto flex items-center justify-center text-blue-950 font-helvetica-neue py-3 px-6 md:px-28 rounded-md mb-3 md:mb-0`}
                      onClick={() => setTab('patients')}
                    >Patients</button>
                    <button
                      className={`${openTab === 'providers' ? 'bg-white' : 'bg-gray-300 hover:bg-white'} w-full md:w-auto flex items-center justify-center text-blue-950 font-helvetica-neue py-3 px-6 md:px-28 rounded-md mb-3 md:mb-0`}
                      onClick={() => setTab('providers')}
                    >Care Providers</button>
                </div>
            </div>
        </div>
        {openTab === 'patients' && <div className = "bg-white">
            <div className = "h-92 py-16 mx-auto container">
                <div className="max-w-lg mx-auto">
                  <div className="my-4">
                    <button
                      className="w-full flex justify-between bg-white hover:bg-gray-200 text-blue-950 font-semibold py-2 px-4 rounded relative"
                      onClick={() => toggleAnswer('answer1')}
                    >
                      <span className="flex-1 text-left">What is Quality Care Global?</span>
                      <span className="flex items-center text-xl text-right">
                        {activeAnswer === 'answer1' ? '\u25B2' : '\u25BC'}
                      </span>
                      <div className="h-1 bg-blue-950 absolute bottom-0 left-0 right-0"></div>
                    </button>
                    <div
                      className={`bg-white shadow-sm p-4 ${activeAnswer === 'answer1' ? '' : 'hidden'}`}
                    >
                      <p>Answer 1</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>}
        {openTab === 'providers' && <div className = "bg-white">
            <div className = "h-92 py-16 mx-auto text-helvetica-neue text-blue-950 container">
                <p className="text-left font-bold text-2xl ml-12 sm:text-center sm:ml-0">Frequently Asked Questions</p>
                <div className='hidden sm:block'>
                    <div className='flex relative mt-10'>
                        <div className='ml-12 hidden sm:block w-0 sm:w-1/5 mt-3'>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openCategory === 'started' ? 'font-bold' : ''}`} onClick={() => setCategory('started')}>Getting started</button>
                            </div>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openCategory === 'before' ? 'font-bold' : ''}`} onClick={() => setCategory('before')}>Before the trip</button>
                            </div>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openCategory === 'ps' ? 'font-bold' : ''}`} onClick={() => setCategory('ps')}>Payment and Security</button>
                            </div>
                        </div>
                        <div className='w-full sm:w-4/5'>
                            <div className="max-w-lg mx-auto">
                              <div className="my-4">
                                <button
                                  className="w-full flex justify-between bg-white hover:bg-gray-200 font-semibold py-2 px-4 rounded relative"
                                  onClick={() => toggleAnswer('answer1')}
                                >
                                  <span className="flex-1 text-left">What is Quality Care Global 2?</span>
                                  <span className="flex items-center text-xl text-right">
                                    {activeAnswer === 'answer1' ? '\u25B2' : '\u25BC'}
                                  </span>
                                  <div className="h-1 bg-blue-950 absolute bottom-0 left-0 right-0"></div>
                                </button>
                                <div
                                  className={`bg-white shadow-sm p-4 ${activeAnswer === 'answer1' ? '' : 'hidden'}`}
                                >
                                  <p>Answer 1</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        <div className="bg-white">
          <div className="mx-auto container py-8">
            <p className="sm:ml-6 mx-4 mt-2 text-blue-950 text-2xl font-helvetica-neue font-bold text-center sm:text-left">We create a better future</p>
            <div className="flex flex-wrap items-center">
              <div className="w-full sm:w-1/3 flex justify-center mt-6 sm:mt-10">
                <img src="/unsplash.jpg" className="w-56 h-80 sm:ml-20" alt="Image" />
              </div>
              <div className="w-full sm:w-2/3">
                <p className="sm:ml-6 mx-4 sm:mr-4 mt-3 sm:mt-8 mb-0 sm:mb-4 text-blue-950 text-md text-center sm:text-left sm:ml-20 font-helvetica-neue">
                  Quality Care Global connects you with premier medical treatments worldwide, helping you bypass long waits and access unavailable procedures at home.
                  We allow you to reduce your healthcare costs without compromising on quality. By enabling you to seek treatment in countries with advanced healthcare
                  systems, we ensure top-tier care, added privacy, and comfort during sensitive procedures. With Quality Care Global, superior healthcare is within your
                  reach, affordable, and comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className = "bg-slate-200">
            <div className = "h-54 font-helvetica-neue py-8 mx-auto container">
                <p className="text-center text-blue-950 font-bold text-2xl mt-2">Stay Updated</p>
                <p className="text-center text-blue-950 text-md ml-16 mr-16 mt-4">Stay inspired and informed
                    with the newest health and wellness updates, delivered to your inbox daily.</p>
                <div className="flex items-center justify-center mt-6">
                    <input type="text" placeholder="Type your email address"
                           className="border border-gray-300 rounded-l h-12 px-6
                           focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <button
                        className="text-center bg-blue-950 text-white rounded-r
                        px-4 h-12 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyPage;