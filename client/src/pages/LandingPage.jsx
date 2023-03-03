import { FaTicketAlt } from "react-icons/fa";

const LandingPage = () => {
    return (
        <>
            <section id="landingPage" className="flex justify-center items-center text-white">
                <div className="flex">
                    <div className="w-[50%]">
                        <h3 className="text-2xl text-rose-500 font-medium  mb-4">Ingenious. Engaging. Creative</h3>
                        <h2 className="text-3xl text-white font-semibold mb-4">We listen. We understand. We deliver</h2>
                        <p className="text-base text-white mb-4">A service medium that provides clients with digital solutions and draws customers to brand</p>
                        <div className="flex">
                            <div className="w-[50%]">
                                <div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Uniqueness
                                </div>
                                <div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Quality
                                </div>
                            </div>
                            <div className="w-[50%]"><div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Uniqueness
                                </div>
                                <div className="flex items-center">
                                    <FaTicketAlt className="text-sm text-rose-500 mr-2"/>Quality
                                </div></div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div id="bigCircle" className="ml-8 border-1 border-rose-500 rounded-full w-48 h-48 flex justify-center items-center">
                            <div id="circle" className="ml-8 border-1 border-rose-500 rounded-full w-32 h-32"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage;