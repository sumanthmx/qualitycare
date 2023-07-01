"use client";
import React, {useState, useEffect} from 'react';
import Image from "next/image";

const MyPage = () => {
  const [openTab, setTab] = useState('why');
  return (
    <div className = "flex flex-col min-h-screen">
      <div className="bg-blue-950 pt-20 text-white flex flex-col items-center justify-center">
          <h1 className="font-bold mt-[-60px] pt-10 text-3xl font-helvetica-neue">Why Quality Care Global?</h1>
          <p className="mt-4 mx-32 text-center font-helvetica-neue">Quality Care Global is a rapidly expanding network consisting of the most
              thoroughly screened, accredited doctors, clinics and hospitals in the world. Find the perfect healthcare providers to suit your
            budget and medical needs, obtain treatment abroad with confidence.</p>
          <div className="flex bottom-4 items-end justify-center flex-grow pt-10 -mb-1">
              <button className={`${openTab === 'why' ? 'bg-white' : 'bg-gray-300 hover:bg-white'} w-72 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3`}
              onClick={() => setTab('why')}>Why</button>
              <button className={`${openTab === 'how' ? 'bg-white' : 'bg-gray-300 hover:bg-white'} w-72 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3`}
              onClick={() => setTab('how')}>How</button>
              <button className={`${openTab === 'what' ? 'bg-white' : 'bg-gray-300 hover:bg-white'} w-72 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 px-28 rounded-md mr-3`}
              onClick={() => setTab('what')}>What</button>
          </div>
      </div>
        {openTab === 'why' && <div className="bg-white py-20 text-blue-950 flex flex-col items-center justify-center">
            <p className="mt-0 mx-36 text-center font-helvetica-neue">At Quality Care Global, we believe that everyone deserves access to quality healthcare,
                regardless of their location or financial situation. Our mission is to connect patients with the best medical facilities and healthcare professionals
                worldwide, so you can receive the care you need at prices you can afford.
            </p>
            <p className="mt-8 mx-36 text-center font-helvetica-neue">
                We help you navigate the complexities of international healthcare, from finding the right treatment and doctor to arranging travel and accommodations.
                With our extensive network of accredited clinics, hospitals, and specialists, you can rest assured that you'll be in good hands.
            </p>
      </div>}
        {openTab === 'how' && <div className="bg-white py-20 text-blue-950 flex flex-col justify-center">
        <ul className="list-decimal flex flex-col space-y-4 ml-24">
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">01</div>
            <div>
              <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Share Your Requirements</h2>
                <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-sm font-bold">What kind of specific treatment do you need? What's your concerns?
                What specific experience or reputation do you look for?</p>
                <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Begin by letting us know your healthcare needs, preferences, and any specific
                    criteria you have in mind. Our expert team will use this information to identify the most suitable healthcare providers for you.</p>
            </div>
          </li>
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">02</div>
            <div>
              <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Receive Tailored Options</h2>
                <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-sm font-bold">We'll notify you with a status report concerning your
                    request within a few days.</p>
                <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">We understand that every individual has unique healthcare needs. Therefore, we
                    meticulously curate a list of the best medical professionals and facilities, specifically tailored to your requirements. This personalized approach
                    ensures that you receive options that align with your expectations and medical needs.</p>
            </div>
          </li>
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">03</div>
            <div>
              <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Connect with Trusted Healthcare Providers</h2>
                <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-sm font-bold">We'll introduce you to your doctors, and then address any concerns
                    or questions you may have throughout your treatment.</p>
                <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Quality Care Global partners with reputable healthcare providers worldwide,
                    ensuring that you have access to a vast network of accredited professionals. Select your preferred provider from our carefully curated list, get
                    your quote and embark on your journey towards better health with confidence.</p>
            </div>
          </li>
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">04</div>
            <div>
              <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Experience Quality Care</h2>
                <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Our ultimate goal is to provide you with a hassle-free healthcare experience.
                    From the initial consultation to post-treatment care, Quality Care Global is dedicated to offering comprehensive support throughout your medical journey.
                    Trust in our expertise and global connections to deliver the highest standard of care, no matter where your healthcare journey takes you.</p>
            </div>
          </li>
        </ul>
      </div>}
        {openTab === 'what' && <div className="bg-white py-20 text-blue-950 flex flex-col items-center justify-center">
        <ul className="list-decimal flex flex-col space-y-4 ml-24">
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">01</div>
            <div>
              <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Access to specialized treatments</div>
                <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Some countries may offer advanced or specialized treatments that are unavailable
                    or have long waiting lists in your home country. With Quality Care Global, skip the waiting times and access the most advanced treatments without
                    compromising on quality.</div>
            </div>
          </li>
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">02</div>
            <div>
              <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Cost Savings</div>
                <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">We understand that medical treatments in some countries can be significantly more
                    affordable than in others, Quality Care Global allows you to save on healthcare expenses without compromising on quality.</div>
            </div>
          </li>
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">03</div>
            <div>
              <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Better care and privacy</div>
                <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">You may choose medical treatment in countries with
                    advanced healthcare systems and specialists to receive top-quality care while ensuring privacy for sensitive or personal medical procedures. </div>
            </div>
          </li>
          <li className="relative pl-6 py-2 flex">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg">04</div>
            <div>
              <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Any Location</div>
                <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">A global network allows us to connect you with trusted healthcare providers in any country.
                    We have collaborated with reliable healthcare providers in Mexico, Switzerland, Canada, the United States, Germany, Turkey, Brazil, the United Kingdom, Mexico,
                    Thailand, and more. We can typically locate healthcare providers in these locations in under a week, and we can always connect you with the best provider for your
                    needs anywhere in the world.</div>
            </div>
          </li>
        </ul>
      </div>}
     <div className="relative bg-sky-100 h-112 mb-24">
         <div className="mt-10 ml-20 font-helvetica-neue text-3xl font-bold text-blue-950"
         style={{paddingRight: '50vw' }}>Have any question? Our team is happy to help</div>
         <div className="mt-6 ml-20 font-helvetica-neue text-md mb-8 text-blue-950"
         style={{paddingRight: '50vw' }}>This is filler text. This is filler text. This is filler text.
         This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
         This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
         This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
         This is filler text. This is filler text. This is filler text. This is filler text. </div>
         <a href="/"
              className="text-sm font-helvetica-neue text-gray-300 bg-blue-950 px-4 py-2 mt-16 ml-20 rounded text-white w-32"
            >
              List your clinic
            </a>
        <Image src={"/unsplash.jpg"} alt="Mask Girl Picture" className="
        absolute right-0 bottom-[-48px] mr-16" width='500' height='500' style={{ maxWidth: '25%', maxHeight: '100%'}}/>
     </div>
    </div>
  );
};

export default MyPage;