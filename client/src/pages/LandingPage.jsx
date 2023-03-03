import { FaTicketAlt } from "react-icons/fa";
import banner from "../assets/banner-img-2.png";
import trust from "../assets/trust-b.png";
import google from "../assets/google.png";
import bings from "../assets/bings-logo.png";
import c1 from "../assets/partner2.png";
import c2 from "../assets/partner6.png";
import c3 from "../assets/partner7.png";

const LandingPage = () => {
    return (
        <>
            <section id="landingPage" className="flex justify-center items-center text-black px-[20%]">
                <div className="flex">
                    <div className="w-[50%]">
                        <h3 className="text-2xl text-rose-500 font-medium mb-4">Ingenious. Engaging. Creative</h3>
                        <h2 className="text-3xl font-semibold mb-6">We listen. We understand. We deliver</h2>
                        <p className="text-base mb-6">A service medium that provides clients with digital solutions and draws customers to brand</p>
                        <div className="flex">
                            <div className="w-[50%]">
                                <div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Uniqueness
                                </div>
                                <div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Quality
                                </div>
                            </div>
                            <div className="w-[50%]">
                                <div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Uniqueness
                                </div>
                                <div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Quality
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <img className="mr-6" src={trust} alt="" />
                            <img className="mr-6" src={google} alt="" />
                            <img className="mr-6" src={bings} alt="" />
                        </div>
                        <div className="flex mt-6">
                            <button className="btn-p text-white">Get a free Estimate</button>
                            <button className="btn-s">Talk to an Expert</button>
                        </div>
                    </div>
                    <div className="w-[50%] border">
                        <img src={banner} className="w-auto"/>
                        {/* <div id="bigCircle" className="ml-8 border-1 border-rose-500 rounded-full w-48 h-48 flex justify-center items-center">
                            <div id="circle" className="ml-8 border-1 border-rose-500 rounded-full w-32 h-32"></div>
                        </div> */}
    
                    </div>
                </div>
            </section>
            <section id="client-wrap">

            </section>
        </>
    )
}

export default LandingPage;