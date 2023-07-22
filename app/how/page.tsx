"use client";
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import styles from "./how.module.css";

const MyPage = () => {
  const [openTab, setTab] = useState('why');
  return (
    <div className = "flex flex-col">
      <div className="bg-blue-950">
          <div className="mx-auto container pt-20 text-white flex flex-col items-center justify-center">
              <h1 className="font-bold mt-[-60px] pt-10 text-3xl text-center font-helvetica-neue">Why Quality Care Global?</h1>
              <p className="mt-4 mx-8 md:mx-32 text-center font-helvetica-neue">Quality Care Global is a rapidly expanding network consisting of the most thoroughly screened, accredited doctors, clinics and hospitals in the world. Find the perfect healthcare providers to suit your budget and medical needs, obtain treatment abroad with confidence.</p>
              <div className="flex gap-1 overflow-x-auto pt-10 -mb-4 sm:-mb-1 px-3">
                <button
                  className={`${openTab === 'why' ? 'bg-white text-blue-950' : 'bg-blue-950 text-white sm:bg-gray-300 sm:text-blue-950 hover:bg-white hover:text-blue-950'} w-full md:w-auto flex items-center justify-center font-helvetica-neue py-3 px-6 sm:px-18 md:px-28 rounded-sm sm:rounded-md mr-3 mb-3 md:mb-0`}
                  onClick={() => setTab('why')}
                >
                  Why
                </button>
                <button
                  className={`${openTab === 'how' ? 'bg-white text-blue-950' : 'bg-blue-950 text-white sm:bg-gray-300 sm:text-blue-950 hover:bg-white hover:text-blue-950'} w-full md:w-auto flex items-center justify-center font-helvetica-neue py-3 px-6 md:px-28 rounded-sm sm:rounded-md mr-3 mb-3 md:mb-0`}
                  onClick={() => setTab('how')}
                >
                  How
                </button>
                <button
                  className={`${openTab === 'what' ? 'bg-white text-blue-950' : 'bg-blue-950 text-white sm:bg-gray-300 sm:text-blue-950 hover:bg-white hover:text-blue-950'} w-full md:w-auto flex items-center justify-center font-helvetica-neue py-3 px-6 md:px-28 rounded-sm sm:rounded-md mr-3 mb-3 md:mb-0`}
                  onClick={() => setTab('what')}
                >
                  What
                </button>
              </div>
          </div>
      </div>
        <div className="bg-white">
            {openTab === 'why' && <div className="mx-auto container py-10 text-blue-950 flex flex-col items-center justify-center">
                <p className="mt-0 mx-4 sm:mx-36 text-center font-helvetica-neue">At Quality Care Global, we believe that everyone deserves access to quality healthcare,
                    regardless of their location or financial situation. Our mission is to connect patients with the best medical facilities and healthcare professionals
                    worldwide, so you can receive the care you need at prices you can afford.
                </p>
                <p className="mt-8 mx-4 sm:mx-36 text-center font-helvetica-neue">
                    We help you navigate the complexities of international healthcare, from finding the right treatment and doctor to arranging travel and accommodations.
                    With our extensive network of accredited clinics, hospitals, and specialists, you can rest assured that you'll be in good hands.
                </p>
                <ol className="list-decimal mt-12">
                  <li className="flex relative pl-0 sm:pl-6 py-2 items-center">
                      <div className="w-full md:w-3/5 mx-8 md:mx-0 text-center md:text-left">
                        <h2 className="ml-0 md:ml-4 mt-2 font-helvetica-neue font-bold text-lg">Comprehensive Network</h2>
                        <p className="ml-0 md:ml-4 mt-3 font-helvetica-neue text-sm font-bold">What kind of specific treatment do you need? What are your concerns? What specific experience or reputation do you look for?</p>
                        <p className="ml-0 md:ml-4 mt-3 font-helvetica-neue text-md">Begin by letting us know your healthcare needs, preferences, and any specific criteria you have in mind. Our expert team will use this information to identify the most suitable healthcare providers for you.</p>
                      </div>
                      <div className="hidden md:block md:w-2/5 ml-16">
                        <Image src="/temp-grey.jpg" alt="Temp Background" className="object-cover" width="200"
                               height="200" />
                      </div>
                 </li>
                  <li className="relative pl-0 sm:pl-6 py-2 flex items-center">
                    <div className="w-full md:w-3/5 mx-8 md:mx-0 text-center md:text-left">
                      <h2 className="ml-0 md:ml-4 mt-2 font-helvetica-neue font-bold text-lg">Receive Tailored Options</h2>
                        <p className="ml-0 md:ml-4 mt-3 font-helvetica-neue text-sm font-bold">We'll notify you with a status report concerning your
                            request within a few days.</p>
                        <p className="ml-0 md:ml-4 mt-3 font-helvetica-neue text-md">We understand that every individual has unique healthcare needs. Therefore, we
                            meticulously curate a list of the best medical professionals and facilities, specifically tailored to your requirements. This personalized approach
                            ensures that you receive options that align with your expectations and medical needs.</p>
                    </div>
                    <div className="hidden md:block md:w-2/5 ml-16">
                        <Image src="/temp-grey.jpg" alt="Temp Background" className="object-center object-cover" width="200"
                               height="200" />
                    </div>
                  </li>
                  <li className="relative pl-0 sm:pl-6 py-2 flex items-center">
                    <div className="w-full md:w-3/5 mx-8 md:mx-0 text-center md:text-left">
                      <h2 className="ml-0 md:ml-4 mt-2 font-helvetica-neue font-bold text-lg">Connect with Trusted Healthcare Providers</h2>
                        <p className="ml-0 md:ml-4 mt-3 font-helvetica-neue text-sm font-bold">We'll introduce you to your doctors, and then address any concerns
                            or questions you may have throughout your treatment.</p>
                        <p className="ml-0 md:ml-4 mt-3 font-helvetica-neue text-md">Quality Care Global partners with reputable healthcare providers worldwide,
                            ensuring that you have access to a vast network of accredited professionals. Select your preferred provider from our carefully curated list, get
                            your quote and embark on your journey towards better health with confidence.</p>
                    </div>
                    <div className="hidden md:block md:w-2/5 ml-16">
                        <Image src="/temp-grey.jpg" alt="Temp Background" className="object-center object-cover" width="200"
                               height="200" />
                    </div>
                  </li>
                  <li className="relative pl-0 sm:pl-6 py-2 flex items-center">
                    <div className="w-full md:w-3/5 mx-8 md:mx-0 text-center md:text-left">
                      <h2 className="ml-0 md:ml-4 mt-2 font-helvetica-neue font-bold text-lg">Experience Quality Care</h2>
                        <p className="ml-0 md:ml-4 mt-3 font-helvetica-neue text-md">Our ultimate goal is to provide you with a hassle-free healthcare experience.
                            From the initial consultation to post-treatment care, Quality Care Global is dedicated to offering comprehensive support throughout your medical journey.
                            Trust in our expertise and global connections to deliver the highest standard of care, no matter where your healthcare journey takes you.</p>
                    </div>
                    <div className="hidden md:block md:w-2/5 ml-16">
                        <Image src="/temp-grey.jpg" alt="Temp Background" className="object-center object-cover" width="200"
                               height="200" />
                    </div>
                  </li>
                </ol>
          </div>}
            {openTab === 'how' && <div className="mx-auto container py-10 text-blue-950 flex flex-col justify-center">
            <ol className={`mx-8 sm:ml-20 list ${styles.ols}`}>
              <li className={`relative pl-6 py-2`}>
                {/*"w-10 h-10 md:w-16 md:h-16 flex items-center justify-center bg-blue-950 rounded-md text-white text-center font-bold text-lg md:text-2xl"}*/}
                <div>
                  <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Share Your Requirements</h2>
                    <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-sm font-bold">What kind of specific treatment do you need? What's your concerns?
                    What specific experience or reputation do you look for?</p>
                    <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Begin by letting us know your healthcare needs, preferences, and any specific
                        criteria you have in mind. Our expert team will use this information to identify the most suitable healthcare providers for you.</p>
                </div>
              </li>
              <li className="relative pl-6 py-2">
                <div>
                  <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Receive Tailored Options</h2>
                    <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-sm font-bold">We'll notify you with a status report concerning your
                        request within a few days.</p>
                    <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">We understand that every individual has unique healthcare needs. Therefore, we
                        meticulously curate a list of the best medical professionals and facilities, specifically tailored to your requirements. This personalized approach
                        ensures that you receive options that align with your expectations and medical needs.</p>
                </div>
              </li>
              <li className="relative pl-6 py-2">
                <div>
                  <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Connect with Trusted Healthcare Providers</h2>
                    <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-sm font-bold">We'll introduce you to your doctors, and then address any concerns
                        or questions you may have throughout your treatment.</p>
                    <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Quality Care Global partners with reputable healthcare providers worldwide,
                        ensuring that you have access to a vast network of accredited professionals. Select your preferred provider from our carefully curated list, get
                        your quote and embark on your journey towards better health with confidence.</p>
                </div>
              </li>
              <li className="relative pl-6 py-2">
                <div>
                  <h2 className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Experience Quality Care</h2>
                    <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Our ultimate goal is to provide you with a hassle-free healthcare experience.
                        From the initial consultation to post-treatment care, Quality Care Global is dedicated to offering comprehensive support throughout your medical journey.
                        Trust in our expertise and global connections to deliver the highest standard of care, no matter where your healthcare journey takes you.</p>
                </div>
              </li>
            </ol>
          </div>}
            {openTab === 'what' && <div className="mx-auto container py-10 text-blue-950 flex flex-col items-center justify-center">
            <Image src={"/temp-grey.jpg"} alt="Temp Background" className="
             " width='500' height='500' style={{ maxWidth: '100%', maxHeight: '50%'}}/>
            <div className="flex flex-col grid grid-cols-1 md:grid-cols-2 gap-4 my-6 mx-10">
                <div>
                    <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Access to specialized treatments</div>
                    <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Some countries may offer advanced or specialized treatments that are unavailable
                        or have long waiting lists in your home country. With Quality Care Global, skip the waiting times and access the most advanced treatments without
                        compromising on quality.</div>
                </div>
                <div>
                  <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Cost Savings</div>
                    <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">We understand that medical treatments in some countries can be significantly more
                        affordable than in others, Quality Care Global allows you to save on healthcare expenses without compromising on quality.</div>
                </div>
                <div>
                  <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Better care and privacy</div>
                    <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">You may choose medical treatment in countries with
                        advanced healthcare systems and specialists to receive top-quality care while ensuring privacy for sensitive or personal medical procedures. </div>
                </div>
                <div>
                  <div className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">Any Location</div>
                    <div className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">A global network allows us to connect you with trusted healthcare providers in any country.
                        We have collaborated with reliable healthcare providers in Mexico, Switzerland, Canada, the United States, Germany, Turkey, Brazil, the United Kingdom, Mexico,
                        Thailand, and more. We can typically locate healthcare providers in these locations in under a week, and we can always connect you with the best provider for your
                        needs anywhere in the world.</div>
                </div>
            </div>
            </div>}
        </div>
     <div className="bg-sky-100">
         <div className="mx-auto container relative py-16">
             <div className="hidden sm:block">
                 <div className="mt-10 ml-20 text-left font-helvetica-neue text-3xl font-bold text-blue-950"
                 style={{paddingRight: '50vw' }}>Have any question? Our team is happy to help</div>
                 <div className="mt-6 ml-20 text-left font-helvetica-neue text-md mb-8 text-blue-950"
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
                <img src="/unsplash.jpg" alt="Mask Girl Picture" className="
                 absolute right-0 top-0 mb-8 h-full w-1/3 sm: w-1/4 xl: 1/5 mr-16" width='500' height='500'/>
             </div>
             <div className="sm:hidden text-center px-10">
                 <div className="mt-6 font-helvetica-neue text-2xl font-bold text-blue-950"
                >Have any question? Our team is happy to help</div>
                 <div className="mt-4 font-helvetica-neue text-md text-blue-950 break-words"
                 >This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. </div>
                 <div className = "mt-6">
                    <a href="/"
                      className="text-sm font-helvetica-neue bg-blue-950 px-4 py-2 mt-16 rounded text-white w-32"
                    >List your clinic</a>
                 </div>
             </div>
         </div>
     </div>
    </div>
  );
};

export default MyPage;