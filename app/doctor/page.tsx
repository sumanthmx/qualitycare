'use client'
import React, {useState} from 'react';
import Star from "@/components/star/star";
import ExpandCard from "@/components/expandcard/expandcard";
import Clickshow from "@/components/clickshow/clickshow";
import Leftshow from "@/components/leftshow/leftshow";
import Reviews from "@/components/reviews/reviews";
import ResearchEntry from "@/components/research_entry/research_entry";

const MyPage = () => {
    const [card, setCard] = useState('');
    const [openTab, setTab] = useState('general');
    const [generalSelect, setGeneralSelect] = useState('');
    const [specSelect, setSpecSelect] = useState('');
    const [servSelect, setServSelect] = useState('');
    const [showMoreResearch, setShowRes] = useState(false);
    // Function passed into dropdown
  const handleExpansion = (cardName: string) => {
    setCard(cardName);
  };
    return(
        <div className = "flex flex-col relative mx-auto font-helvetica-neue">
            <div className = "bg-blue-950">
                <div className = "mx-auto container">
                    <div className = "flex flex-col md:flex-row relative py-16">
                        <div className = "flex flex-col lg:flex-row gap-10 md:gap-10 lg:gap-16 xl:gap-20 w-full justify-center items-center text-white">
                            <div>
                                <img src = "/doctor_woman.jpeg" alt="doctors pic" className="mx-4 sm:mx-10 w-32 sm:w-64
                            border-2 border-white"></img>
                            </div>
                            <div className="px-6 pb-4 md:px-10 lg:px-0 lg:pb-0 lg:ml-2 ">
                                <p className = "font-bold text-lg">Prof. Aynur Ugur BILGIN, MD &nbsp; &nbsp; &nbsp;<span className="bg-blue-400 rounded-full text-sm px-2 py-1">&#10003;</span></p>
                                <p className = "text-md my-3"><span className="font-semibold">Cardiology     </span><span>Subcategory 1  Subcategory 2  More specialities</span></p>
                                <ul className=" flex my-2">
                                    <li>
                                        <Star/>
                                    </li>
                                    <li>
                                        <Star/>
                                    </li>
                                    <li>
                                        <Star/>
                                    </li>
                                    <li>
                                        <Star/>
                                    </li>
                                    <li>
                                        <Star/>
                                    </li>
                                    <li>
                                        <p className="px-2 text-white underline">112 reviews</p>
                                    </li>
                                </ul>
                                <div className="relative flex items-center">
                                    <img src="home_icons/hp1.png" alt="Home Icon 1 (temp)" className="w-6 h-6"/>
                                    <p className="ml-4 mt-2 text-lg">Years of Experience: 24</p>
                                </div>
                                <div className="relative flex items-center">
                                    <img src="home_icons/hp1.png" alt="Home Icon 1 (temp)" className="w-6 h-6"/>
                                    <p className="ml-4 mt-2 text-lg">Location: Ankara, TR</p>
                                </div>
                                <img src="health_icons/Koru_Logo.png" alt="KORU Logo" className="bg-white p-4 rounded-md mt-4 w-3/5"/>
                            </div>
                        </div>
                        <div className = "flex mt-6 sm:mt-0 px-2 text-center lg:text-left justify-center">
                            <div className="w-5/6 h-fit lg:h-full shadow-lg bg-white rounded-sm py-4 px-6 lg:py-8 lg:px-12">
                                <div className="pt-5">
                                    <p className="font-semibold text-xl text-blue-950 mb-2 w-full lg:w-4/5">Check the nearest free dates and make an appointment today</p>
                                </div>
                                <div className="py-2 flex flex-col">
                                    <p className="text-lg text-blue-950 mb-2">There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, </p>
                                </div>
                                <div className="py-4 flex justify-center">
                                    <a href="/" className="text-sm font-helvetica-neue text-center
                                    bg-blue-950 rounded text-white w-3/4 py-2">
                                        Get in Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pt-10 -mb-4 sm:-mb-1 px-3">
                            <button
                              className={`${openTab === 'general' ? 'bg-white' : 'bg-slate-200 hover:bg-white'} w-1/2 md:w-96 md:h-14 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 md:py-10 lg:py-5 px-6 md:px-10 rounded-md mb-3 md:mb-0`}
                              onClick={() => setTab('general')}
                            >General</button>
                            <button
                              className={`${openTab === 'specialization' ? 'bg-white' : 'bg-slate-200 hover:bg-white'} w-1/2 md:w-96 md:h-14 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 md:py-10 lg:py-5 px-6 md:px-10 rounded-md mb-3 md:mb-0`}
                              onClick={() => setTab('specialization')}
                            >Specialization</button>
                            <button
                              className={`${openTab === 'opinions' ? 'bg-white' : 'bg-slate-200 hover:bg-white'} w-1/2 md:w-96 md:h-14 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 md:py-10 lg:py-5 px-6 md:px-10 rounded-md mb-3 md:mb-0`}
                              onClick={() => setTab('opinions')}
                            >Opinions</button>
                            <button
                              className={`${openTab === 'pricing' ? 'bg-white' : 'bg-slate-200 hover:bg-white'} w-1/2 md:w-96 md:h-14 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 md:py-10 lg:py-5 px-6 md:px-10 rounded-md mb-3 md:mb-0`}
                              onClick={() => setTab('pricing')}
                            >Pricing</button>
                            <button
                              className={`${openTab === 'research' ? 'bg-white' : 'bg-slate-200 hover:bg-white'} w-1/2 md:w-96 md:h-14 flex items-center justify-center text-blue-950 font-helvetica-neue py-3 md:py-10 lg:py-5 px-6 md:px-10 rounded-md mb-3 md:mb-0`}
                              onClick={() => setTab('research')}
                            >Research and Publications</button>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="mx-auto container">
                    {openTab === 'general' &&
                    <div className="mx-4 flex flex-col lg:flex-row gap-12 text-blue-950">
                        <div className="w-full lg:w-1/2 text-left">
                            <p className="font-bold text-3xl">Place of work</p>
                            <div className="flex flex-col grid grid-cols-1 gap-1 mt-6">
                                    <Clickshow img={"home_icons/hp1.png"} text={'Żubardzka 4 pok. 45 i 47 (blisko al.Włókniarzy), Śródmieście, Łódź Instytut Badań ' +
                                        'Psychologicznych, Szkoleń, Coachingu i Psychoterapii EMPIRIA.PL'} tag={'place'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} hasReveal={false}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Accessibility information'} tag={'access'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} hasReveal={true}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Office hours'} tag={'hours'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} hasReveal={true}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'All patients: adults and children'} tag={'patients'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} hasReveal={false}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Languages spoken: English and Turkish'} tag={'langs'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} truncate= {true} hasReveal={false}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Payment in cash, credit, and debit cards'} tag={'payment'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} hasReveal={false}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'+1 834 7376 8437'} tag={'phone'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} truncate= {true} hasReveal={false}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'http://www.instytutbadanpsychologicznych.pl'} tag={'site'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} truncate= {true} hasReveal={false}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Online services'} tag={'services'} answer={''} toggleReveal={setGeneralSelect}
                                               activeReveal={generalSelect} hasReveal={false}/>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="font-bold text-3xl">Expertises</p>
                            <ul className="list-disc space-y-2 mt-7 ml-6">
                                <li>Patient Specific Implant Surgery</li>
                                <li>Total Joint Replacement (TMJ)</li>
                                <li>Facial Contouring Implants</li>
                                <li>Cosmetic Rejuvenation Surgery</li>
                                <li>Surgical Correction of Congenital Abnormalities</li>
                                <li>Cleft Palate Surgery</li>
                                <li>Craniofacial Surgery</li>
                                <li>Transgender Surgery</li>
                                <li>Surgical Correction of Facial Abnormalities</li>
                                <li>Orthognathic Surgery</li>
                            </ul>
                        </div>
                </div>}
                    {openTab === 'specialization' && <div className="mx-4 flex flex-col lg:flex-row gap-12 text-blue-950">
                        <div className="w-full lg:w-3/5 text-left">
                            <p className="font-bold text-3xl">Specialization: Cardiology</p>
                            <div className="flex flex-col grid grid-cols-1 gap-2 mt-6">
                                    <Clickshow img={"home_icons/hp1.png"} text={'Interventional Cardiology'} tag={'intervent'} answer={''} toggleReveal={setSpecSelect}
                                               activeReveal={specSelect} hasReveal={true}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Cardiac Electrophysiology'} tag={'electro'} answer={''} toggleReveal={setSpecSelect}
                                               activeReveal={specSelect} hasReveal={true}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Echocardiography'} tag={'echo'} answer={''} toggleReveal={setSpecSelect}
                                               activeReveal={specSelect} hasReveal={true}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Nuclear Cardiology'} tag={'nuclear'} answer={''} toggleReveal={setSpecSelect}
                                               activeReveal={specSelect} hasReveal={true}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Heart Failure and Transplant Cardiology'} tag={'transplant'} answer={''} toggleReveal={setSpecSelect}
                                               activeReveal={specSelect} hasReveal={true}/>
                                    <Clickshow img={"home_icons/hp1.png"} text={'Adult Congenital Heart Disease'} tag={'congenital'} answer={''} toggleReveal={setSpecSelect}
                                               activeReveal={specSelect} hasReveal={true}/>
                            </div>
                        </div>
                </div>}
                    {openTab === 'opinions' && <div className="mx-4 text-blue-950">
                            <p className="font-bold text-3xl text-left">Patient reviews (18 reviews)</p>
                            <div className="">
                                <Reviews/>
                            </div>
                    </div>
                    }
                    {openTab === 'pricing' && <div className="mx-4 flex flex-col lg:flex-row gap-12 text-blue-950">
                        <div className="w-full lg:w-3/5 text-left">
                            <p className="font-bold text-3xl">Services and prices</p>
                            <div className="flex flex-col grid grid-cols-1 gap-2 mt-6">
                                    <Leftshow img={"home_icons/hp1.png"} text={'Interventional Cardiology'} tag={'intervent'} answer={''} toggleReveal={setServSelect}
                                               activeReveal={servSelect} hasReveal={true} price={250}/>
                                    <Leftshow img={"home_icons/hp1.png"} text={'Cardiac Electrophysiology'} tag={'electro'} answer={'There are many variations of passages of Lorem Ipsum available, ' +
                                        'but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem ' +
                                        'Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of.\n' + '\n' + 'There are many variations of passages of Lorem Ipsum available, ' +
                                        'but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'} toggleReveal={setServSelect}
                                               activeReveal={servSelect} hasReveal={true} price={225}/>
                                    <Leftshow img={"home_icons/hp1.png"} text={'Echocardiography'} tag={'echo'} answer={''} toggleReveal={setServSelect}
                                               activeReveal={servSelect} hasReveal={true} price={224}/>
                                    <Leftshow img={"home_icons/hp1.png"} text={'Nuclear Cardiology'} tag={'nuclear'} answer={''} toggleReveal={setServSelect}
                                               activeReveal={servSelect} hasReveal={true} price={34}/>
                                    <Leftshow img={"home_icons/hp1.png"} text={'Heart Failure and Transplant Cardiology'} tag={'transplant'} answer={''} toggleReveal={setServSelect}
                                               activeReveal={servSelect} hasReveal={true} price={55}/>
                                    <Leftshow img={"home_icons/hp1.png"} text={'Adult Congenital Heart Disease'} tag={'congenital'} answer={''} toggleReveal={setServSelect}
                                               activeReveal={servSelect} hasReveal={true} price={28}/>
                            </div>
                        </div>
                    </div>}
                    {openTab === 'research' && <div className="mx-4 flex flex-col lg:flex-row gap-12 text-blue-950">
                        <div className="w-full lg:w-2/3 text-left">
                            <p className="font-bold text-3xl">Research and Publications (18)</p>
                            <div className="flex flex-col grid grid-cols-1 gap-2 mt-6">
                                <ResearchEntry text={'"Development of the Zabrze heart transplant program - from the ' +
                                    'perspective of 25-11c1a (1985-2010)" in "Practical Transplantology. Advances in ' +
                                    'transplantology. Volume IV". edited by L. Pączek, K.Mucha, B.Foroncewicz. 2013. ' +
                                    'PWN Scientific Publishing House, ISBN'} img={"home_icons/hp1.png"}/>
                                <ResearchEntry text={'"Organ transplants. Handbook for medical students and physicians in ' +
                                    'the course of specialization”, 1st edition edited by L. Cierpka (chapter 12).'} img={"home_icons/hp1.png"}/>
                                {!showMoreResearch && <button onClick={() => setShowRes(true)}>Show More</button>}
                                {showMoreResearch && <ResearchEntry text={'"Organ transplants. Handbook for medical students and physicians in ' +
                                    'the course of specialization”, 1st edition edited by L. Cierpka (chapter 12).'} img={"home_icons/hp1.png"}/>}
                                {showMoreResearch && <button onClick={() => setShowRes(false)}>Show Less</button>}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <div className = "bg-white py-16">
                <div className = "mx-auto container text-blue-950">
                    <div className="mx-4 flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-1/2 text-left">
                            <p className="font-bold text-3xl">My experience</p>
                            <p className="font-bold text-lg mt-3">About me</p>
                            <p className="text-md mt-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
                                Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                repetition, injected humour, or non-characteristic words etc.</p>
                            <div className="flex flex-col grid grid-cols-1 gap-4 mt-6">
                                <div className="">
                                    <p className="mt-2 font-bold text-2xl">My experience</p>
                                </div>
                                <div className="relative flex">
                                    <img src="home_icons/hp1.png" alt="Home Icon 1 (replace)" className="w-12 h-12"/>
                                    <div>
                                        <p className="ml-4 mt-2 font-bold text-lg">Position title</p>
                                        <p className="flex align-text-top ml-4 text-md">Instytut Badań Psychologicznych, Szkoleń, Coachingu i Psychoterapii EMPIRIA.PL</p>
                                        <p className="ml-4 text-gray-500">Feb 2023 - Present, 3 months</p>
                                    </div>
                                </div>
                                <div className="relative flex">
                                    <img src="home_icons/hp2.png" alt="Home Icon 2 (replace)" className="w-12 h-12"/>
                                    <div>
                                      <p className="ml-4 mt-2 font-bold text-lg">Position title</p>
                                      <p className="flex align-text-top ml-4 text-md">Instytut Badań Psychologicznych, Szkoleń, Coachingu i Psychoterapii EMPIRIA.PL</p>
                                      <p className="ml-4 text-gray-500">Feb 2023 - Present, 3 months</p>
                                    </div>
                                </div>
                                <div className="relative flex">
                                    <img src="home_icons/hp3.png" alt="Home Icon 3 (replace)" className="w-12 h-12"/>
                                    <div>
                                        <p className="ml-4 mt-2 font-bold text-lg">Position title</p>
                                        <p className="flex align-text-top ml-4 text-md">Instytut Badań Psychologicznych, Szkoleń, Coachingu i Psychoterapii EMPIRIA.PL</p>
                                        <p className="ml-4 text-gray-500">Feb 2023 - Present, 3 months</p>
                                    </div>
                                </div>
                                <div className="relative flex">
                                    <img src="home_icons/hp4.png" alt="Home Icon 4 (replace)" className="w-12 h-12"/>
                                    <div>
                                        <p className="ml-4 mt-2 font-bold text-lg">Position title</p>
                                        <p className="flex align-text-top ml-4 text-md">Instytut Badań Psychologicznych, Szkoleń, Coachingu i Psychoterapii EMPIRIA.PL</p>
                                        <p className="ml-4 text-gray-500">Feb 2023 - Present, 3 months</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="font-bold text-3xl">Gallery</p>
                            <div className="grid grid-cols-3 gap-3 mt-6">
                                <img src="/temp-grey.jpg" alt="Temp image (replace)" className="col-start-1 col-end-4 mt-2"></img>
                                <img src="/temp-grey.jpg" alt="Temp image (replace)" className="col-start-1 col-span-1 "></img>
                                <img src="/temp-grey.jpg" alt="Temp image (replace)" className="col-start-2 col-span-1"></img>
                                <img src="/temp-grey.jpg" alt="Temp image (replace)" className="col-start-3 col-span-1 "></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto container">
                    <div className="flex flex-col sm:flex-row">
                        <ExpandCard title={'EDUCATION'} logoName={"home_icons/hp1.png"} list={['Harvard Medical School, Boston, MA, USA', 'Duke University School of Medicine, Durham, SC, USA',
                            'Harvard Medical School, Boston, MA, USA', 'Duke University School of Medicine, Durham, SC, USA', 'Harvard Medical School, Boston, MA, USA', 'Duke University School of Medicine, Durham, SC, USA']}
                                    alias={'education'} openCard={card} handleExpansion={handleExpansion}/>
                        <ExpandCard title={'BOARD CERTIFICATION'} logoName={"home_icons/hp1.png"} list={['Gastroenterology']} alias={'certification'} openCard={card} handleExpansion={handleExpansion}/>
                        <ExpandCard title={'LANGUAGES'} logoName={"home_icons/hp1.png"} list={['English', 'Turkish']} alias={'languages'} openCard={card} handleExpansion={handleExpansion}/>
                    </div>
                    <div className="mt-36 border-t-4 border-blue-950 pt-10"></div>
                </div>
            </div>
            <div className="bg-white text-blue-950">
                <div className="px-4 sm:px-0 mx-auto container pb-12">
                    <p className="text-left text-2xl font-bold mb-6">Frequently asked questions</p>
                    <div className="my-4">
                        <p className="text-left font-semibold text-lg my-1">How soon can I make an appointment with Dr. Waise Ebrahimi?</p>
                        <p className="text-left text-md">Generally, Dr. Waise Ebrahimi has appointments available on Zocdoc within 1 week.
                            You can see Dr. Ebrahimi's earliest availability on Zocdoc and make an appointment online.</p>
                    </div>
                    <div className="my-4">
                        <p className="text-left font-semibold text-lg my-1">Is Dr. Waise Ebrahimi accepting new patients?</p>
                        <p className="text-left text-md">Dr. Waise Ebrahimi generally accepts new patients on Zocdoc.
                            You can see Dr. Ebrahimi's earliest availability on Zocdoc and schedule an appointment online.</p>
                    </div>
                    <div className="my-4">
                        <p className="text-left font-semibold text-lg my-1">Does Dr. Waise Ebrahimi accept my insurance?</p>
                        <p className="text-left text-md">Choose your insurance plan to verify if Dr. Ebrahimi is in-network.</p>
                    </div>
                    <div className="my-4">
                        <p className="text-left font-semibold text-lg my-1">How do patients rate Dr. Waise Ebrahimi in reviews?</p>
                        <p className="text-left text-md">660 patients have reviewed Dr. Waise Ebrahimi. The overall rating for this doctor is 4.81/5. They have a 4.90/5 rating for bedside manner and a
                            4.82/5 rating for wait time. You can read individual reviews and ratings on their profile.</p>
                    </div>
                    <div className="my-4">
                        <p className="text-left font-semibold text-lg my-1">How soon can I make an appointment with Dr. Waise Ebrahimi?</p>
                        <p className="text-left text-md">Generally, Dr. Waise Ebrahimi has appointments available on Zocdoc within 1 week. You can see Dr. Ebrahimi's earliest
                            availability on Zocdoc and make an appointment online.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;