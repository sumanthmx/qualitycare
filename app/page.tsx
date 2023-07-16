"use client";
import React, {useState} from "react";
import Carousel from "@/components/carousel/carousel";
import Image from "next/image";
import styles from './page.module.css';
import Card from "@/components/card/card";

export default function Home() {
 const [openTab, setTab] = useState('why');
 const imgFolder = ['/carousel_photos/hpc1.jpeg', '/carousel_photos/hpc2.jpeg',
     '/carousel_photos/hpc3.jpeg', '/carousel_photos/hpc4.jpeg', '/carousel_photos/hpc5.jpeg']

 const paras = ['We provide comprehensive, clear, and accurate information about our partnered healthcare providers. ' +
 'You\'ll have access to details about their qualifications, specializations, associated medical facilities, and more. We also ' +
 'share complete details about treatment options, costs, potential risks, and success rates wherever available',
     'We partner only with certified and accredited healthcare providers. These certifications, provided by recognized healthcare ' +
     'authorities globally, are testament to the provider\'s expertise and commitment to patient safety and quality care.',
     ' We believe in the power of shared experiences. That\'s why we have a dedicated section for past patients to share ' +
     'their experiences, reviews, and ratings. This allows you to make informed decisions based on first-hand accounts of their ' +
     'medical journeys.', 'We\'re here for you, always. Whether you have a question, a concern, or need assistance at any stage of your journey, ' +
     'our dedicated customer support team is just a click away.', 'We understand that medical care doesn\'t end at the operation theatre. That\'s ' +
     'why we provide detailed information about post-treatment care, including recovery, rehabilitation, and follow-up consultations.']

    const names = ['Transparency', 'Verifiable Certifications and Accreditations',
     'Authentic Patient Testimonials and Reviews', 'Round-the-Clock Customer Support',
     'Post-Treatment Care Information']

  return (
    <div className = "flex flex-col min-h-screen relative mx-auto">
        <div className = "bg-white">
            <div className = "py-10 sm:py-16 flex flex-col sm:flex-row mx-auto container relative items-center overflow-hidden">
                <div className="w-full sm:w-1/2 font-helvetica-neue sm:ml-10 px-4 sm:mr-0 text-center sm:text-left z-10">
                    <span className="text-blue-400 text-2xl sm:text-3xl font-bold">Your Gateway <span className="text-blue-950 text-2xl sm:text-3xl font-bold">To World Class Health Care</span></span>
                    <p className="mt-6 text-blue-950 text-md">Quality Care Global is a rapidly expanding network consisting of the screened,
                        accredited doctors, clinics and hospitals in the world. Find the perfect healthcare providers to suit your budget
                        and medical needs, obtain treatment abroad with confidence.</p>
                    <div className = "hidden sm:block text-left mt-8">
                        <a href="/" className="text-sm font-helvetica-neue bg-blue-950 rounded text-white px-24 py-3">
                          Get Started
                        </a>
                    </div>
                </div>
                <img src="/landing_img.png" alt="Home Globe Pic" className={`${styles.map_img} right-2 absolute hidden sm:block sm:w-3/5 mr-4 ml-2 object-cover z-0`}/>
            </div>
        </div>
        <div className = "bg-blue-950">
            <div className = "h-92 py-16 mx-auto container">
                <p className="sm:ml-6 mx-4 text-white text-2xl font-helvetica-neue
                font-bold text-center sm:text-left"> Medical Care Abroad Simplified</p>
                <div className="flex flex-col grid grid-cols-1 md:grid-cols-2 gap-4 my-6 mx-10 text-white">
                    <div className="relative flex">
                        <img src="home_icons/hp1.png" alt="Home Icon 1" className="w-12 h-12"/>
                        <div>
                            <p className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">1.  Explore Providers</p>
                            <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Browse our global network of accredited healthcare
                                professionals and hospitals.</p>
                        </div>
                    </div>
                    <div className="relative flex">
                        <img src="home_icons/hp2.png" alt="Home Icon 2" className="w-12 h-12"/>
                        <div>
                          <p className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">2.  Request Consultation</p>
                            <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">A specialist from our team will collaborate with you
                                to comprehend your medical requirements, and personal preferences.</p>
                        </div>
                    </div>
                    <div className="relative flex">
                        <img src="home_icons/hp3.png" alt="Home Icon 3" className="w-12 h-12"/>
                        <div>
                            <p className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">3.  Plan Travel</p>
                            <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Arrange your travel itinerary independently or with our assistance.</p>
                        </div>
                    </div>
                    <div className="relative flex">
                        <img src="home_icons/hp4.png" alt="Home Icon 4" className="w-12 h-12"/>
                        <div>
                            <p className="ml-4 mt-2 font-helvetica-neue font-bold text-lg">4.  Experience Care</p>
                            <p className="flex align-text-top ml-4 mt-3 font-helvetica-neue text-md">Enjoy world-class, personalized healthcare from your chosen provider.</p>
                        </div>
                    </div>
                </div>
                <div className = "text-center mt-10">
                    <a href="/" className="text-sm font-helvetica-neue bg-white rounded text-blue-950 px-12 py-3">
                      Search Specialist
                    </a>
                </div>
            </div>
        </div>
        <div className = "bg-white">
            <div className = "mx-auto container py-8">
                <p className="sm:ml-6 mx-4 mt-2 text-blue-950 text-2xl font-helvetica-neue font-bold text-center sm:text-left"> Our Commitment to Trustworthiness</p>
                <p className="sm:ml-6 mx-4 mt-3 mb-4 text-blue-950 text-md text-center sm:text-left font-helvetica-neue "> Discover the steps we're taking to ensure
                    you feel secure when traveling abroad:</p>
                <Carousel images={imgFolder} bodies={paras} names={names}/>
            </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto container py-8">
            <p className="sm:ml-6 mx-4 mt-2 text-blue-950 text-2xl font-helvetica-neue font-bold text-center sm:text-left">We create a better future</p>
            <div className="flex flex-wrap items-center">
              <div className="w-full sm:w-1/3 flex justify-center mt-6 sm:mt-10">
                <img src="/unsplash.jpg" className="w-56 h-80 sm:ml-20" alt="Image" />
              </div>
              <div className="w-full sm:w-2/3">
                <p className="sm:ml-6 mx-4 sm:mr-4 mt-3 sm:mt-8 mb-0 sm:mb-4 text-blue-950 text-md text-center sm:text-left sm:ml-20 md:ml-28 lg:ml-20 font-helvetica-neue">
                  Quality Care Global connects you with premier medical treatments worldwide, helping you bypass long waits and access unavailable procedures at home.
                  We allow you to reduce your healthcare costs without compromising on quality. By enabling you to seek treatment in countries with advanced healthcare
                  systems, we ensure top-tier care, added privacy, and comfort during sensitive procedures. With Quality Care Global, superior healthcare is within your
                  reach, affordable, and comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative text-helvetic-neue">
            <p className="text-3xl text-white text-center font-bold mt-14 relative z-10">The Hidden Benefits of Getting Treatment Abroad</p>
            <p className="text-md text-white text-center mt-6 relative z-10">Find out how medical tourists are enriching their treatment options
            by accessing globally recognized facilities</p>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-10 pt-24 pb-4">
                <Card imagePath={'/unsplash.jpg'} title ={'Kenan Asadov'} name={'Eren Biri'} preview={'It is long established that a reader will be distracted by the readable content of a page when looking at its layout. ' +
                    'It is a long established fact that. content of a page when looking at its layout.'} readingTime = {'10 minutes'}
                      category={'Health'} subcategory={'Children\'s Health'}/>
                <Card imagePath={'/unsplash.jpg'} title ={'Kenan Asadov'} name={'Eren Biri'} preview={'It is long established that a reader will be distracted by the readable content of a page when looking at its layout. ' +
                    'It is a long established fact that. content of a page when looking at its layout.'} readingTime = {'10 minutes'}
                      category={'Health'} subcategory={'Children\'s Health'}/>
                <Card imagePath={'/unsplash.jpg'} title ={'Kenan Asadov'} name={'Eren Biri'} preview={'It is long established that a reader will be distracted by the readable content of a page when looking at its layout. ' +
                    'It is a long established fact that. content of a page when looking at its layout.'} readingTime = {'10 minutes'}
                      category={'Health'} subcategory={'Children\'s Health'}/>
                <Card imagePath={'/unsplash.jpg'} title ={'Kenan Asadov'} name={'Eren Biri'} preview={'It is long established that a reader will be distracted by the readable content of a page when looking at its layout. ' +
                    'It is a long established fact that. content of a page when looking at its layout.'} readingTime = {'10 minutes'}
                      category={'Health'} subcategory={'Children\'s Health'}/>
                <Card imagePath={'/unsplash.jpg'} title ={'Kenan Asadov'} name={'Eren Biri'} preview={'It is long established that a reader will be distracted by the readable content of a page when looking at its layout. ' +
                    'It is a long established fact that. content of a page when looking at its layout.'} readingTime = {'10 minutes'}
                      category={'Health'} subcategory={'Children\'s Health'}/>
                <Card imagePath={'/unsplash.jpg'} title ={'Kenan Asadov'} name={'Eren Biri'} preview={'It is long established that a reader will be distracted by the readable content of a page when looking at its layout. ' +
                    'It is a long established fact that. content of a page when looking at its layout.'} readingTime = {'10 minutes'}
                      category={'Health'} subcategory={'Children\'s Health'}/>
                </div>
            <div className="absolute w-full h-1/2 top-0 left-0 z-0 bg-blue-950">
            </div>
        </div>
        <div className="bg-white">
          <div className="h-54 font-helvetica-neue py-8 mx-auto container">
            <p className="sm:ml-6 mx-4 mt-2 text-blue-950 text-2xl font-helvetica-neue font-bold text-center sm:text-left">They trusted us</p>
            <div className="flex flex-wrap justify-center sm:justify-start px-6">
              <div className="w-1/2 sm:w-1/4 flex justify-center">
                <img src="health_icons/bluecrossblueshield.webp" alt="Blue Cross" className="w-36 sm:w-48 h-28 sm:h-36 mr-6"/>
              </div>
              <div className="w-1/2 sm:w-1/4 flex justify-center">
                <img src="health_icons/cigna-logo-og.jpeg" alt="Cigna" className="w-40 sm:w-56 h-28 sm:h-36 mr-6"/>
              </div>
              <div className="w-1/2 sm:w-1/4 flex justify-center">
                <img src="health_icons/United-Healthcare-Logo.png" alt="United" className="w-40 sm:w-56 h-28 sm:h-40 mr-6"/>
              </div>
              <div className="w-1/2 sm:w-1/4 flex justify-center">
                <img src="health_icons/Aetna-Logo.png" alt="Aetna" className="w-40 sm:w-56 h-28 sm:h-36"/>
              </div>
            </div>
          </div>
        </div>
        <div className = "bg-slate-200">
            <div className = "h-54 font-helvetica-neue py-12 mx-auto container">
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
}
