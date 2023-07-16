'use client'
import React, {useState, useEffect} from 'react';
import styles from "./providers.module.css";
import Image from "next/image";
import Question from "@/components/question/question";
const MyPage = () => {
    const [activeAnswer, setActiveAnswer] = useState('');
    const toggleAnswer = (answerId: string) => {
        if (activeAnswer === answerId) {
            setActiveAnswer('');
        } else {
            setActiveAnswer(answerId);
        }
    };
    return(
        <div className = "flex flex-col relative mx-auto">
            <div className = "text-helvetica-neue h-92 bg-blue-950">
                <div className = "flex container relative mx-auto">
                    <div className = "w-full sm:w-1/2 px-4 lg:px-8 py-12 text-white sm:text-left text-center">
                        <p className = "font-semibold text-4xl mx-10 leading-relaxed">Join the Quality Care Global Network</p>
                        <p className = "text-sm mx-10 mt-6">Are you ready to embark on this remarkable journey? Join us today at Quality Care Global,
                            where we're breaking down borders to create a healthier world. Together, we can redefine the future of healthcare.</p>
                    </div>
                    <div className = "hidden sm:flex sm:w-1/2 sm:pr-12 justify-end absolute right-0 -bottom-36 mx-auto 2xl:-bottom-52">
                        <div className="max-w-sm h-full shadow-lg bg-white rounded-sm">
                            <div className="px-6 py-2 pt-5">
                                <div className="font-semibold text-xl text-blue-950 mb-2">Join our network and treat patients from all over the World</div>
                            </div>
                            <div className="px-6 py-2 flex flex-col">
                                <div className="py-1 flex relative">
                                    <p className="text-green-700 text-2xl pr-3 text-center">&#10003;</p>
                                    <p className="text-blue-950 leading-relaxed text-md">A Global Impact:
                                    Join Quality Care Global to enhance global patient care.</p>
                                </div>
                                <div className="py-1 flex relative">
                                    <p className="text-green-700 text-2xl pr-3 text-center">&#10003;</p>
                                    <p className="text-blue-950 leading-relaxed text-md">Seamless Collaboration:
                                        We promote professional interaction and knowledge sharing.</p>
                                </div>
                                <div className="py-1 flex relative">
                                    <p className="text-green-700 text-2xl pr-3 text-center">&#10003;</p>
                                    <p className="text-blue-950 leading-relaxed text-md">Continuous Support:
                                        We guide you from profile setup to patient communication.</p>
                                </div>
                                <div className="py-1 flex relative">
                                    <p className="text-green-700 text-2xl pr-3 text-center">&#10003;</p>
                                    <p className="text-blue-950 leading-relaxed text-md">Your Satisfaction,
                                        Our Priority: We ensure a rewarding experience for our partners.</p>
                                </div>
                            </div>
                            <div className="py-4 px-8 flex justify-center">
                                <a href="/" className="text-sm font-helvetica-neue text-center
                                bg-blue-950 rounded text-white w-full py-2">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "bg-white font-helvetica-neue text-blue-950">
                <div className="container mx-auto">
                    <p className = "w-full sm:w-1/3 font-semibold text-3xl sm:ml-16 py-12 text-blue-950 sm:text-left text-center leading-relaxed">Do what you're best at, we'll do the rest.</p>
                    <ol className={`list ${styles.ols} pt-6 pb-16 sm:ml-16`}>
                      <li className="flex relative pl-6 py-2 items-center">
                          <div className="w-full md:w-3/5 mx-8 md:mx-0 text-left">
                            <h2 className="ml-0 md:ml-4 mt-2 font-bold text-lg">Empower Patients Around the Globe</h2>
                            <p className="ml-0 md:ml-4 mt-3 text-md">Join our growing network of trusted healthcare professionals
                                and make your services available to international patients in need of quality medical care. As a
                                Quality Care Global partner, you will broaden your reach, welcoming patients from all over the world.</p>
                          </div>
                          <div className="hidden md:block md:w-2/5 ml-16">
                            <Image src="/temp-grey.jpg" alt="Temp Background" className="object-cover" width="200"
                                   height="200" />
                          </div>
                     </li>
                     <li className="flex relative pl-6 py-2 items-center">
                       <div className="w-full md:w-3/5 mx-8 md:mx-0 text-left">
                         <h2 className="ml-0 md:ml-4 mt-2 font-bold text-lg">Unlock New Opportunities</h2>
                         <p className="ml-0 md:ml-4 mt-3 text-md">Being part of Quality Care Global means more than
                             just increased visibility—it's a partnership that brings mutual benefits. You'll be able
                             to showcase your expertise to a global audience and provide your high-quality healthcare services
                             to those in need, regardless of location.</p>
                       </div>
                       <div className="hidden md:block md:w-2/5 ml-16">
                         <Image src="/temp-grey.jpg" alt="Temp Background" className="object-cover" width="200"
                               height="200" />
                       </div>
                     </li>
                     <li className="flex relative pl-6 py-2 items-center">
                       <div className="w-full md:w-3/5 mx-8 md:mx-0 text-left">
                         <h2 className="ml-0 md:ml-4 mt-2 font-bold text-lg">Seamless Experience, Maximum Impact</h2>
                         <p className="ml-0 md:ml-4 mt-3 text-md">Quality Care Global takes care of the details. We provide a
                             seamless interface for patients to browse, book and pay for your services, leaving you free to
                             focus on what matters most—providing world-class healthcare. Our platform simplifies the connection
                             between international patients and accredited healthcare providers.</p>
                       </div>
                       <div className="hidden md:block md:w-2/5 ml-16">
                         <Image src="/temp-grey.jpg" alt="Temp Background" className="object-cover" width="200"
                               height="200" />
                       </div>
                     </li>
                        <li className="flex relative pl-6 py-2 items-center">
                          <div className="w-full md:w-3/5 mx-8 md:mx-0 text-left">
                            <h2 className="ml-0 md:ml-4 mt-2 font-bold text-lg">Trust and Transparency</h2>
                            <p className="ml-0 md:ml-4 mt-3 text-md">We believe in trust and transparency.
                                That's why we have a robust verification process to ensure all healthcare providers on
                                our platform are accredited and provide top-quality care. We also provide transparent
                                pricing, so patients know exactly what they're paying for.</p>
                          </div>
                          <div className="hidden md:block md:w-2/5 ml-16">
                            <Image src="/temp-grey.jpg" alt="Temp Background" className="object-cover" width="200"
                                   height="200" />
                          </div>
                     </li>
                     <li className="flex relative pl-6 py-2 items-center">
                       <div className="w-full md:w-3/5 mx-8 md:mx-0 text-left">
                         <h2 className="ml-0 md:ml-4 mt-2 font-bold text-lg">A Community of Excellence</h2>
                         <p className="ml-0 md:ml-4 mt-3 text-md">When you join Quality Care Global, you become part of a
                             community of exceptional healthcare professionals from around the world. Our platform facilitates
                             learning and collaboration, fostering a global healthcare community committed to improving
                             patient outcomes.</p>
                       </div>
                       <div className="hidden md:block md:w-2/5 ml-16">
                         <Image src="/temp-grey.jpg" alt="Temp Background" className="object-cover" width="200"
                               height="200" />
                       </div>
                     </li>
                     <li className="flex relative pl-6 py-2 items-center">
                       <div className="w-full md:w-3/5 mx-8 md:mx-0 text-left">
                         <h2 className="ml-0 md:ml-4 mt-2 font-bold text-lg">Ready to Join Us?</h2>
                         <p className="ml-0 md:ml-4 mt-3 text-md">Start your journey with Quality Care Global today and make
                             a global impact. Join us in our mission to make world-class healthcare accessible to all,
                             regardless of borders.</p>
                       </div>
                       <div className="hidden md:block md:w-2/5 ml-16">
                         <Image src="/temp-grey.jpg" alt="Temp Background" className="object-cover" width="200"
                               height="200" />
                       </div>
                     </li>
                    </ol>
                    <div className="flex w-full justify-center mb-20">
                        <a href="/" className="text-sm text-center bg-blue-950 rounded text-white px-28 py-3">
                                        Contact Us
                                    </a>
                    </div>
                </div>
            </div>
            <div className="bg-white font-helvetica-neue">
                <div className="px-4 container mx-auto justify-center">
                    <div>
                        <p className="text-center text-3xl font-semibold px-4 pb-5 text-blue-950">Answers for your questions</p>
                        <Question question={'How can I join Quality Care Global as a healthcare provider?'}
                                   answer={'To join Quality Care Global as a healthcare provider, please navigate to our \'Join Us\' page and fill out the required form. ' +
                                       'We will then contact you to gather further information about your practice and guide you through the verification process.'}
                                   toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                        <Question question={'What are the benefits of joining Quality Care Global?'}
                                   answer={'As a member of Quality Care Global, you will be part of a trusted global network of healthcare providers. Our platform ' +
                                       'can help increase your visibility among potential patients from around the world. We also provide tools and resources to assist ' +
                                       'you in managing patient appointments, records, and feedback.'}
                                  toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                        <Question question={'What is the verification process for healthcare providers?'}
                                   answer={'Our verification process includes checking credentials such as medical degree, board certification, licensing, insurance, and ' +
                                       'professional reputation. We also verify that you maintain good standing within your medical community. This rigorous process helps to ' +
                                       'ensure the trustworthiness of our platform for patients seeking medical care abroad.'}
                                  toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                        <Question question={'How can patients book appointments with me through Quality Care Global?'}
                                   answer={'Patients can view your profile, services, and availability on our platform, and then book an appointment directly. You will receive a ' +
                                       'notification and can then confirm the appointment at your convenience.'}
                                   toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                        <Question question={'How does Quality Care Global handle patient data?'}
                                   answer={'We understand the importance of data security, particularly when it comes to sensitive medical information. ' +
                                       'Quality Care Global adheres strictly to data protection regulations. Patient data is only shared with the healthcare ' +
                                       'provider the patient has chosen for their care, and only with the patient\'s consent.'}
                                  toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                        <Question question={'Can I update my profile information and services offered on Quality Care Global?'}
                                   answer={'Yes, healthcare providers can update their profiles, including their services, qualifications, ' +
                                       'and availability. We recommend keeping your profile up-to-date to ensure that potential patients have ' +
                                       'the most accurate information about your practice.'}
                                  toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                        <Question question={'What if a patient leaves a negative review on my profile?'}
                                   answer={'Quality Care Global values honest and constructive feedback. We encourage healthcare providers to respond professionally ' +
                                       'to negative reviews and use them as an opportunity to improve. If you believe a review is false or violates our guidelines, ' +
                                       'please contact us, and we will investigate the matter.'}
                                  toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                        <Question question={'How does Quality Care Global promote its platform and the healthcare providers listed?'}
                                   answer={'Quality Care Global utilizes a multi-channel marketing strategy to promote our platform and listed healthcare providers. ' +
                                       'This includes search engine optimization, targeted online advertising, social media marketing, partnerships with related ' +
                                       'organizations, and more.'}
                                  toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={true}></Question>
                    </div>
                    <div className = "text-center mb-6 py-4">
                        <p className="mx-auto text-center text-md px-4 text-black mb-16">Have more questions? For answers, see the
                            <a href="/support" className="text-center text-md text-blue-400 mb-16"> Frequently Asked Questions</a></p>
                    </div>
                </div>
                <div className = "bg-sky-200 font-helvetica-neue text-blue-950 xl:mb-32">
                    <div className = "flex container gap-8 justify-between mx-auto px-8 py-10">
                        <div className = "w-full sm:w-1/2 py-12">
                            <p className = "text-3xl leading-relaxed font-bold">Our team is always happy to help</p>
                            <p className = "text-md mt-8 mb-8">It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                making it look like readable English. </p>
                            <a href="/" className="text-sm text-center
                                bg-blue-950 rounded text-white w-full px-14 py-3">
                                    Contact Us
                                </a>
                        </div>
                        <div className ="justify-center hidden sm:flex sm:w-1/2 py-16 relative">
                            <img src={'/QCG_Paper.png'} alt={"QCG Paper"} className="xl:absolute md:-bottom-8 lg:-bottom-16 xl:-bottom-24 mx-6 max-h-80"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;