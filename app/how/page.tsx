"use client";
import React, {useState, useEffect} from 'react';
const MyPage = () => {
  const [whyTab, setWhy] = useState(true);
  const [howTab, setHow] = useState(false);
  const [whatTab, setWhat] = useState(false);
  const selectWhy = () => {
      setWhy(true);
      setHow(false);
      setWhat(false);
      console.log("why")
  };
  const selectHow = () => {
      setWhy(false);
      setHow(true);
      setWhat(false);
      console.log("how")
  };
  const selectWhat = () => {
      setWhy(false);
      setHow(false);
      setWhat(true);
      console.log("what")
  };
  return (
    <div className = "flex flex-col min-h-screen">
      <div className="bg-blue-950 pt-20 text-white flex flex-col items-center justify-center">
          <div className="font-bold mt-[-60px] pt-10 text-2xl font-helvetica-neue">Why Quality Care Global?</div>
          <div className="mt-4 mx-32 text-center font-helvetica-neue">Quality Care Global is a rapidly expanding network consisting of the most
              thoroughly screened, accredited doctors, clinics and hospitals in the world. Find the perfect healthcare providers to suit your
            budget and medical needs, obtain treatment abroad with confidence.</div>
          <div className="flex bottom-4 items-end justify-center flex-grow pt-10 -mb-1">
              {whyTab && <button className="bg-white text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3">Why</button>}
              {(howTab || whatTab) && <button className="bg-gray-300 hover:bg-white text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3"
              onClick={selectWhy}>Why</button>}
              {howTab && <button className="bg-white text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3">How</button>}
              {(whyTab || whatTab) && <button className="bg-gray-300 hover:bg-white text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3"
              onClick={selectHow}>How</button>}
              {whatTab && <button className="bg-white text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3">What</button>}
              {(whyTab || howTab) && <button className="bg-gray-300 hover:bg-white text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3"
              onClick={selectWhat}>What</button>}
          </div>
      </div>
    </div>
  );
};

export default MyPage;