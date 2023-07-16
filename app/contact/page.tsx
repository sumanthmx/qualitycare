'use client'
import React, {useState, ChangeEvent, FormEvent} from 'react';
import styles from "@/app/providers/providers.module.css";

const MyPage = () => {
  const [openTab, setTab] = useState('patients');
  const [dropdownOption, setOption] = useState('Inquiries');
  const handleSubmit = (event: FormEvent<any>) => {
    event.preventDefault();
    console.log(event.currentTarget.email.value)
    // Process the form data or send it to a server via API, etc.
    // Perform any other actions or validation here
  };

    return(
        <div className = "flex flex-col relative mx-auto">
            <div className = "bg-blue-950">
                <div className = "pt-6 sm:pt-12 container relative mx-auto overflow-hidden">
                    <div className="sm:w-3/5 w-full">
                        <p className = "text-white text-center sm:text-left font-semibold text-2xl sm:text-3xl mt-6 sm:ml-8">Contact us</p>
                        <p className = "text-white text-center sm:text-left text-lg mt-8 mx-4 mb-4 sm:mb-16 sm:ml-8">Thank you for your interest in our services. We
                            value your input and inquiries, and we're committed to providing you with the highest level of service.</p>
                    </div>
                    <div className="flex gap-3 justify-center pt-10 -mb-4 sm:-mb-1">
                        <button
                          className={`${openTab === 'patients' ? 'bg-white' : 'bg-slate-200 hover:bg-white'} w-1/2 md:w-96 md:h-14 flex items-center justify-center text-blue-950 font-helvetica-neue py-2 px-6 md:px-10 rounded-md mb-3 md:mb-0`}
                          onClick={() => setTab('patients')}
                        >Patients</button>
                        <button
                          className={`${openTab === 'providers' ? 'bg-white' : 'bg-slate-200 hover:bg-white'} w-1/2 md:w-96 md:h-14 flex items-center justify-center text-blue-950 font-helvetica-neue py-2 px-6 md:px-10 rounded-md mb-3 md:mb-0`}
                          onClick={() => setTab('providers')}
                        >Care Providers</button>
                    </div>
                </div>
            </div>
            {openTab === 'patients' && <div className="bg-white font-helvetica-neue">
                <div className="flex container mx-auto py-20">
                        <div className="w-full sm:w-3/5">
                            <form className="flex flex-col max-w-md mx-auto p-4" onSubmit={handleSubmit}>
                            <p className="text-blue-950 text-3xl sm:text-4xl font-bold text-center sm:text-left tracking-normal sm:tracking-wide">We are here for you</p>
                            <p className="text-blue-950 text-md text-center sm:text-left pb-10 pt-4">Our friendly team would love to hear from you</p>
                              <div className="mb-4 flex gap-3">
                               <div>
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">First Name</label>
                                <input
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  placeholder="Type your first name"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  required
                                />
                               </div>
                               <div>
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Last Name</label>
                                <input
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  placeholder="Type your last name"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  required
                                />
                               </div>
                              </div>
                              <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email address</label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  placeholder="Enter your email"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone number</label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  placeholder="Enter your mobile number"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea
                                  id="message"
                                  name="message"
                                  rows={4}
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  placeholder="Please submit a message (optional)"
                                />
                              </div>
                              <button type="submit" className="px-4 py-2 bg-blue-950 font-helvetica-neue text-white font-bold rounded-lg">Send</button>
                            </form>
                        </div>
                        <div className="hidden sm:flex justify-center items-center w-2/5">
                            <img src={'contact_us_photos/graphic1.svg'} alt={'form one'} className='h-4/5 w-4/5'></img>
                        </div>
                </div>
            </div>}
            {openTab === 'providers' && <div className="bg-white font-helvetica-neue">
                <div className="flex container mx-auto py-20">
                        <div className="w-full sm:w-3/5">
                            <form className="flex flex-col max-w-md mx-auto p-4" onSubmit={handleSubmit}>
                            <p className="text-blue-950 text-3xl sm:text-4xl font-bold text-center sm:text-left tracking-normal sm:tracking-wide">Let's have a call</p>
                            <p className="text-blue-950 text-md text-center sm:text-left pb-10 pt-4">Our friendly team would love to hear from you</p>
                              <div className="mb-4 flex gap-3">
                               <div>
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">First Name</label>
                                <input
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  placeholder="Type your first name"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  required
                                />
                               </div>
                               <div>
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Last Name</label>
                                <input
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  placeholder="Type your last name"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  required
                                />
                               </div>
                              </div>
                              <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email address</label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  placeholder="Enter your email"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone number</label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  placeholder="Enter your mobile number"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea
                                  id="message"
                                  name="message"
                                  rows={4}
                                  className="w-full px-3 py-2 border rounded-lg outline-none border-blue-950"
                                  placeholder="Please submit a message (optional)"
                                />
                              </div>
                              <button type="submit" className="px-4 py-2 bg-blue-950 font-helvetica-neue text-white font-bold rounded-lg">Send</button>
                            </form>
                        </div>
                        <div className="hidden sm:flex justify-center items-center w-2/5">
                            <img src={'contact_us_photos/graphic1.svg'} alt={'form one'} className='h-4/5 w-4/5'></img>
                        </div>
                </div>
            </div>}
        </div>
    );
};
export default MyPage;