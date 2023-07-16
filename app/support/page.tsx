"use client";
import React, {useState, useEffect} from 'react';
import Question from "@/components/question/question";

const MyPage = () => {
 const [openTab, setTab] = useState('patients');
 const [openProvCategory, setProvCategory] = useState('started')
 const [openPatCategory, setPatCategory] = useState('started')
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
            <div className = "pt-6 sm:pt-12 container relative mx-auto overflow-hidden">
                <p className = "text-white text-center font-bold text-2xl">Quality Care Global</p>
                <p className = "text-white text-center text-lg mt-2">Help Center</p>
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
        {openTab === 'patients' && <div className = "bg-white">
            <div className = "h-92 py-16 mx-auto text-helvetica-neue text-blue-950 container">
                <p className="text-center font-bold text-2xl ml-0 sm:ml-12 sm:text-left px-4 sm:px-0">Frequently Asked Questions</p>
                <div className='hidden sm:block'>
                    <div className='flex relative mt-10'>
                        <div className='ml-12 hidden sm:block w-0 sm:w-1/5 mt-3'>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openPatCategory === 'started' ? 'font-bold' : ''}`} onClick={() => setPatCategory('started')}>Getting started</button>
                            </div>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openPatCategory === 'before' ? 'font-bold' : ''}`} onClick={() => setPatCategory('before')}>Before the trip</button>
                            </div>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openPatCategory === 'ps' ? 'font-bold' : ''}`} onClick={() => setPatCategory('ps')}>Payment and Security</button>
                            </div>
                        </div>
                        <div className='w-full sm:w-4/5'>
                            {openPatCategory === 'started' && <div className="max-w-3xl mx-auto">
                                 <Question question={'What is Quality Care Global?'} answer={'Quality Care Global is a rapidly expanding network consisting of the screened, ' +
                                     'accredited doctors, clinics and hospitals in the world. Find the perfect healthcare provider to suit your budget and medical needs, obtain ' +
                                     'treatment abroad with confidence. '} toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How do I get started with Quality Care Global?'} answer={'To get started, simply visit our website and fill out the online inquiry ' +
                                    'form. Provide us with your contact information, medical condition, preferred destination, and any additional requirements. Our team will promptly ' +
                                    'review your request and get in touch with you to discuss your options.'} toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How do you select hospitals and medical facilities for your network?'} answer={'We carefully evaluate and select hospitals and medical ' +
                                    'facilities based on factors such as accreditation, quality of care, success rates, patient feedback, and the expertise of the medical staff. We aim to ' +
                                    'partner with institutions that have a strong reputation for providing excellent care and maintaining high standards of patient safety.'}
                                    toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Can you help with the visa application process?'} answer={'Yes, we can provide assistance with the visa application process. ' +
                                    'Once your hospital booking is confirmed, we will guide you through the necessary steps and provide you with the required documents for your visa application.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How much does it cost to use Hospital Booking Abroad Agency services?'} answer={'Our service fees vary depending on the complexity of your ' +
                                    'medical case and the destination you choose. We will provide you with a detailed quote after reviewing your request and understanding your specific needs.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Are there any hidden fees or additional charges?'} answer={'We are transparent about our fees and will inform you of any costs upfront. ' +
                                    'However, it\'s important to note that your final medical bill will be determined by the hospital and may include additional charges for services such as ' +
                                    'diagnostic tests, medications, and post-operative care.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Can you help with travel arrangements and accommodations?'} answer={'Yes, we can help you with travel arrangements, accommodations, ' +
                                    'and local transportation. We have partnerships with travel agencies and hotels to offer you discounted rates and a seamless travel experience.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Can I bring a companion or family member with me?'} answer={'Absolutely! We understand the importance of having a support system ' +
                                    'during medical treatments. We can assist you in making arrangements for your companion, including accommodations and visa applications.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                            </div>}
                            {openPatCategory === 'before' && <div className="max-w-3xl mx-auto">
                                 <Question question={'How do I make a payment?'} answer={'We provide consultation assistance under partner agreements with the clinics. ' +
                                     'You only make a payment in the hospital where you\'ve received care.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'What happens if I need to cancel or reschedule my appointment?'} answer={'We understand that plans can change, and we will do our best to ' +
                                    'accommodate any changes you need to make. Please contact us as soon as possible if you need to cancel or reschedule your appointment, and we will discuss ' +
                                    'your options based on the hospital\'s cancellation policy.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Is my personal information safe with Quality Care Global?'} answer={'Your privacy is our top priority. We adhere to strict data protection ' +
                                    'regulations and will not share your personal information with any third parties without your consent. For more information, please review our privacy policy.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How can I contact Quality Care Global if I have further questions?'} answer={'We are here to help! You can reach us by phone, email, or ' +
                                    'through the contact form on our website. Our dedicated customer support team is available to assist you with any questions or concerns you may have.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How long does it take to receive a response after submitting my inquiry?'} answer={'We strive to respond to all inquiries within 24 to 48 ' +
                                    'hours. Our team will carefully review your request and get in touch with you as soon as possible to discuss your options and provide you with a ' +
                                    'personalized recommendation.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Do you provide language assistance for non-English speakers?'} answer={'Yes, we offer language assistance for non-English speakers. ' +
                                    'Our team includes multilingual support staff and, if needed, we can arrange for a professional medical interpreter to ensure clear communication ' +
                                    'between you and the medical staff at the hospital.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Can I choose my doctor or specialist?'} answer={'Yes, you can choose your preferred doctor or specialist from our network of hospitals. ' +
                                    'We will provide you with information on the expertise and experience of our affiliated medical professionals to help you make an informed decision.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How do I obtain medical records and reports after my treatment?'} answer={'We can assist you in obtaining your medical records and ' +
                                    'reports from the hospital. Once your treatment is complete, we will coordinate with the hospital staff to ensure that you receive all necessary documents, ' +
                                    'either in hard copy or digital format.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                            </div>}
                            {openPatCategory === 'ps' && <div className="max-w-3xl mx-auto">
                                 <Question question={'Can you help me find post-operative care and rehabilitation services?'} answer={'Yes, we can help you find appropriate post-operative care ' +
                                     'and rehabilitation services, either in the country where you received your treatment or back in your home country. Our team will work with you to identify the ' +
                                     'best options based on your individual needs and preferences.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'What if I experience complications or require follow-up care after returning home?'} answer={'We are committed to ensuring your well-being ' +
                                    'throughout the entire process, including after you return home. If you experience any complications or require follow-up care, please contact us immediately. ' +
                                    'We will coordinate with the treating hospital and your local healthcare providers to ensure you receive the necessary care and support.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Are the hospitals in your network accredited and recognized internationally?'} answer={'Yes, the hospitals in our network are accredited by internationally recognized organizations such as Joint Commission International (JCI), ' +
                                    'International Organization for Standardization (ISO), and other relevant healthcare accreditation bodies. We partner with institutions that maintain high ' +
                                    'standards of patient safety, quality of care, and medical expertise.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How do you ensure the quality of treatment at the hospitals in your network?'} answer={'We continuously monitor and evaluate the quality of care provided by the ' +
                                    'hospitals in our network. Our team conducts regular assessments, reviewing patient feedback, success rates, and overall performance to ensure that our partners maintain the highest standards of care.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Can you help me estimate the cost of my medical treatment abroad?'} answer={'Yes, we can provide you with a cost estimate for your medical ' +
                                    'treatment based on the information you provide in your inquiry. This estimate will include the costs of hospital services, doctor\'s fees, and any additional ' +
                                    'services you may require, such as diagnostic tests or post-operative care.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Will my insurance cover the cost of medical treatment abroad?'} answer={'Coverage for medical treatment abroad depends on your individual insurance policy. We ' +
                                    'recommend that you contact your insurance provider to determine your coverage for international medical care. If needed, we can assist you in obtaining any necessary documentation ' +
                                    'to support your insurance claim.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Can I receive multiple treatment quotes from different hospitals?'} answer={'Yes, we can provide you with multiple treatment quotes from different hospitals within ' +
                                    'our network. This will allow you to compare options and make an informed decision based on factors such as cost, location, and the expertise of the medical staff.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Do you offer any guarantees on the success of the medical treatment?'} answer={'While we cannot guarantee the outcome of any medical treatment, ' +
                                    'we are committed to connecting you with hospitals and medical professionals with a proven track record of success in their respective fields. We will provide you ' +
                                    'with all the necessary information to help you make an informed decision about your care.'}
                                     toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="sm:hidden px-4">
                    <p className="text-left text-xl font-semibold pt-6 pb-4 ml-3">Getting Started</p>
                    <Question question={'What is Quality Care Global?'} answer={'Quality Care Global is a rapidly expanding network consisting of the screened, ' +
                         'accredited doctors, clinics and hospitals in the world. Find the perfect healthcare provider to suit your budget and medical needs, obtain ' +
                         'treatment abroad with confidence. '} toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How do I get started with Quality Care Global?'} answer={'To get started, simply visit our website and fill out the online inquiry ' +
                        'form. Provide us with your contact information, medical condition, preferred destination, and any additional requirements. Our team will promptly ' +
                        'review your request and get in touch with you to discuss your options.'} toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How do you select hospitals and medical facilities for your network?'} answer={'We carefully evaluate and select hospitals and medical ' +
                        'facilities based on factors such as accreditation, quality of care, success rates, patient feedback, and the expertise of the medical staff. We aim to ' +
                        'partner with institutions that have a strong reputation for providing excellent care and maintaining high standards of patient safety.'}
                        toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Can you help with the visa application process?'} answer={'Yes, we can provide assistance with the visa application process. ' +
                        'Once your hospital booking is confirmed, we will guide you through the necessary steps and provide you with the required documents for your visa application.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How much does it cost to use Hospital Booking Abroad Agency services?'} answer={'Our service fees vary depending on the complexity of your ' +
                        'medical case and the destination you choose. We will provide you with a detailed quote after reviewing your request and understanding your specific needs.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Are there any hidden fees or additional charges?'} answer={'We are transparent about our fees and will inform you of any costs upfront. ' +
                        'However, it\'s important to note that your final medical bill will be determined by the hospital and may include additional charges for services such as ' +
                        'diagnostic tests, medications, and post-operative care.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Can you help with travel arrangements and accommodations?'} answer={'Yes, we can help you with travel arrangements, accommodations, ' +
                        'and local transportation. We have partnerships with travel agencies and hotels to offer you discounted rates and a seamless travel experience.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Can I bring a companion or family member with me?'} answer={'Absolutely! We understand the importance of having a support system ' +
                        'during medical treatments. We can assist you in making arrangements for your companion, including accommodations and visa applications.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <p className="text-left text-xl font-semibold ml-3 py-4">Before the trip</p>
                    <Question question={'How do I make a payment?'} answer={'We provide consultation assistance under partner agreements with the clinics. ' +
                         'You only make a payment in the hospital where you\'ve received care.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'What happens if I need to cancel or reschedule my appointment?'} answer={'We understand that plans can change, and we will do our best to ' +
                        'accommodate any changes you need to make. Please contact us as soon as possible if you need to cancel or reschedule your appointment, and we will discuss ' +
                        'your options based on the hospital\'s cancellation policy.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Is my personal information safe with Quality Care Global?'} answer={'Your privacy is our top priority. We adhere to strict data protection ' +
                        'regulations and will not share your personal information with any third parties without your consent. For more information, please review our privacy policy.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How can I contact Quality Care Global if I have further questions?'} answer={'We are here to help! You can reach us by phone, email, or ' +
                        'through the contact form on our website. Our dedicated customer support team is available to assist you with any questions or concerns you may have.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How long does it take to receive a response after submitting my inquiry?'} answer={'We strive to respond to all inquiries within 24 to 48 ' +
                        'hours. Our team will carefully review your request and get in touch with you as soon as possible to discuss your options and provide you with a ' +
                        'personalized recommendation.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Do you provide language assistance for non-English speakers?'} answer={'Yes, we offer language assistance for non-English speakers. ' +
                        'Our team includes multilingual support staff and, if needed, we can arrange for a professional medical interpreter to ensure clear communication ' +
                        'between you and the medical staff at the hospital.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Can I choose my doctor or specialist?'} answer={'Yes, you can choose your preferred doctor or specialist from our network of hospitals. ' +
                        'We will provide you with information on the expertise and experience of our affiliated medical professionals to help you make an informed decision.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How do I obtain medical records and reports after my treatment?'} answer={'We can assist you in obtaining your medical records and ' +
                        'reports from the hospital. Once your treatment is complete, we will coordinate with the hospital staff to ensure that you receive all necessary documents, ' +
                        'either in hard copy or digital format.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <p className="text-left text-xl font-semibold ml-3 py-4">Payment and Security</p>
                    <Question question={'Can you help me find post-operative care and rehabilitation services?'} answer={'Yes, we can help you find appropriate post-operative care ' +
                         'and rehabilitation services, either in the country where you received your treatment or back in your home country. Our team will work with you to identify the ' +
                         'best options based on your individual needs and preferences.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'What if I experience complications or require follow-up care after returning home?'} answer={'We are committed to ensuring your well-being ' +
                        'throughout the entire process, including after you return home. If you experience any complications or require follow-up care, please contact us immediately. ' +
                        'We will coordinate with the treating hospital and your local healthcare providers to ensure you receive the necessary care and support.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Are the hospitals in your network accredited and recognized internationally?'} answer={'Yes, the hospitals in our network are accredited by internationally recognized organizations such as Joint Commission International (JCI), ' +
                        'International Organization for Standardization (ISO), and other relevant healthcare accreditation bodies. We partner with institutions that maintain high ' +
                        'standards of patient safety, quality of care, and medical expertise.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How do you ensure the quality of treatment at the hospitals in your network?'} answer={'We continuously monitor and evaluate the quality of care provided by the ' +
                        'hospitals in our network. Our team conducts regular assessments, reviewing patient feedback, success rates, and overall performance to ensure that our partners maintain the highest standards of care.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Can you help me estimate the cost of my medical treatment abroad?'} answer={'Yes, we can provide you with a cost estimate for your medical ' +
                        'treatment based on the information you provide in your inquiry. This estimate will include the costs of hospital services, doctor\'s fees, and any additional ' +
                        'services you may require, such as diagnostic tests or post-operative care.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Will my insurance cover the cost of medical treatment abroad?'} answer={'Coverage for medical treatment abroad depends on your individual insurance policy. We ' +
                        'recommend that you contact your insurance provider to determine your coverage for international medical care. If needed, we can assist you in obtaining any necessary documentation ' +
                        'to support your insurance claim.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Can I receive multiple treatment quotes from different hospitals?'} answer={'Yes, we can provide you with multiple treatment quotes from different hospitals within ' +
                        'our network. This will allow you to compare options and make an informed decision based on factors such as cost, location, and the expertise of the medical staff.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Do you offer any guarantees on the success of the medical treatment?'} answer={'While we cannot guarantee the outcome of any medical treatment, ' +
                        'we are committed to connecting you with hospitals and medical professionals with a proven track record of success in their respective fields. We will provide you ' +
                        'with all the necessary information to help you make an informed decision about your care.'}
                         toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                </div>
            </div>
        </div>}
        {openTab === 'providers' && <div className = "bg-white">
            <div className = "h-92 py-16 mx-auto text-helvetica-neue text-blue-950 container px-4 sm:px-0">
                <p className="text-center font-bold text-2xl ml-0 sm:ml-12 sm:text-left">Frequently Asked Questions</p>
                <div className='hidden sm:block'>
                    <div className='flex relative mt-10'>
                        <div className='ml-12 hidden sm:block sm:w-1/5 mt-3'>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openProvCategory === 'started' ? 'font-bold' : ''}`} onClick={() => setProvCategory('started')}>Getting started</button>
                            </div>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openProvCategory === 'before' ? 'font-bold' : ''}`} onClick={() => setProvCategory('before')}>Before the trip</button>
                            </div>
                            <div>
                                <button className={`mt-1 text-lg text-left ${openProvCategory === 'ps' ? 'font-bold' : ''}`} onClick={() => setProvCategory('ps')}>Payment and Security</button>
                            </div>
                        </div>
                        <div className='sm:w-4/5'>
                            {openProvCategory === 'started' && <div className="max-w-3xl mx-auto">
                                <Question question={'How can I join Quality Care Global as a healthcare provider?'}
                                           answer={'To join Quality Care Global as a healthcare provider, please navigate to our \'Join Us\' page and fill out the required form. ' +
                                               'We will then contact you to gather further information about your practice and guide you through the verification process.'}
                                           toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'What are the benefits of joining Quality Care Global?'}
                                           answer={'As a member of Quality Care Global, you will be part of a trusted global network of healthcare providers. Our platform ' +
                                               'can help increase your visibility among potential patients from around the world. We also provide tools and resources to assist ' +
                                               'you in managing patient appointments, records, and feedback.'}
                                          toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'What is the verification process for healthcare providers?'}
                                           answer={'Our verification process includes checking credentials such as medical degree, board certification, licensing, insurance, and ' +
                                               'professional reputation. We also verify that you maintain good standing within your medical community. This rigorous process helps to ' +
                                               'ensure the trustworthiness of our platform for patients seeking medical care abroad.'}
                                          toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                            </div>}
                            {openProvCategory === 'before' && <div className="max-w-3xl mx-auto">
                                <Question question={'How can patients book appointments with me through Quality Care Global?'}
                                           answer={'Patients can view your profile, services, and availability on our platform, and then book an appointment directly. You will receive a ' +
                                               'notification and can then confirm the appointment at your convenience.'}
                                           toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How does Quality Care Global handle patient data?'}
                                           answer={'We understand the importance of data security, particularly when it comes to sensitive medical information. ' +
                                               'Quality Care Global adheres strictly to data protection regulations. Patient data is only shared with the healthcare ' +
                                               'provider the patient has chosen for their care, and only with the patient\'s consent.'}
                                          toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'Can I update my profile information and services offered on Quality Care Global?'}
                                           answer={'Yes, healthcare providers can update their profiles, including their services, qualifications, ' +
                                               'and availability. We recommend keeping your profile up-to-date to ensure that potential patients have ' +
                                               'the most accurate information about your practice.'}
                                          toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                            </div>}
                            {openProvCategory === 'ps' && <div className="max-w-3xl mx-auto">
                                <Question question={'What if a patient leaves a negative review on my profile?'}
                                           answer={'Quality Care Global values honest and constructive feedback. We encourage healthcare providers to respond professionally ' +
                                               'to negative reviews and use them as an opportunity to improve. If you believe a review is false or violates our guidelines, ' +
                                               'please contact us, and we will investigate the matter.'}
                                          toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                                <Question question={'How does Quality Care Global promote its platform and the healthcare providers listed?'}
                                           answer={'Quality Care Global utilizes a multi-channel marketing strategy to promote our platform and listed healthcare providers. ' +
                                               'This includes search engine optimization, targeted online advertising, social media marketing, partnerships with related ' +
                                               'organizations, and more.'}
                                          toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="sm:hidden px-4">
                    <p className="text-left text-xl font-semibold pt-6 pb-4 ml-3">Getting Started</p>
                    <Question question={'How can I join Quality Care Global as a healthcare provider?'}
                               answer={'To join Quality Care Global as a healthcare provider, please navigate to our \'Join Us\' page and fill out the required form. ' +
                                   'We will then contact you to gather further information about your practice and guide you through the verification process.'}
                               toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'What are the benefits of joining Quality Care Global?'}
                               answer={'As a member of Quality Care Global, you will be part of a trusted global network of healthcare providers. Our platform ' +
                                   'can help increase your visibility among potential patients from around the world. We also provide tools and resources to assist ' +
                                   'you in managing patient appointments, records, and feedback.'}
                              toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'What is the verification process for healthcare providers?'}
                               answer={'Our verification process includes checking credentials such as medical degree, board certification, licensing, insurance, and ' +
                                   'professional reputation. We also verify that you maintain good standing within your medical community. This rigorous process helps to ' +
                                   'ensure the trustworthiness of our platform for patients seeking medical care abroad.'}
                              toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <p className="text-left text-xl font-semibold ml-3 py-4">Before the trip</p>
                    <Question question={'How can patients book appointments with me through Quality Care Global?'}
                               answer={'Patients can view your profile, services, and availability on our platform, and then book an appointment directly. You will receive a ' +
                                   'notification and can then confirm the appointment at your convenience.'}
                               toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How does Quality Care Global handle patient data?'}
                               answer={'We understand the importance of data security, particularly when it comes to sensitive medical information. ' +
                                   'Quality Care Global adheres strictly to data protection regulations. Patient data is only shared with the healthcare ' +
                                   'provider the patient has chosen for their care, and only with the patient\'s consent.'}
                              toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'Can I update my profile information and services offered on Quality Care Global?'}
                               answer={'Yes, healthcare providers can update their profiles, including their services, qualifications, ' +
                                   'and availability. We recommend keeping your profile up-to-date to ensure that potential patients have ' +
                                   'the most accurate information about your practice.'}
                              toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <p className="text-left text-xl font-semibold ml-3 py-4">Payment and Security</p>
                    <Question question={'What if a patient leaves a negative review on my profile?'}
                               answer={'Quality Care Global values honest and constructive feedback. We encourage healthcare providers to respond professionally ' +
                                   'to negative reviews and use them as an opportunity to improve. If you believe a review is false or violates our guidelines, ' +
                                   'please contact us, and we will investigate the matter.'}
                              toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                    <Question question={'How does Quality Care Global promote its platform and the healthcare providers listed?'}
                               answer={'Quality Care Global utilizes a multi-channel marketing strategy to promote our platform and listed healthcare providers. ' +
                                   'This includes search engine optimization, targeted online advertising, social media marketing, partnerships with related ' +
                                   'organizations, and more.'}
                              toggleAnswer={toggleAnswer} activeAnswer={activeAnswer} half={false}></Question>
                </div>
            </div>
        </div>}
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
};

export default MyPage;