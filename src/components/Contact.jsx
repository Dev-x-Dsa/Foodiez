import img from "../images/loadcrop.gif"
import img1 from "../images/first.png";
import img2 from "../images/last.png";
import { toast } from "react-toastify";

const About = () => {


    function feedbacksub(){
        toast.success("Feedback Submitted !!",{
            position: toast.POSITION.TOP_CENTER,
        })
    }
    return <div className="dark:bg-[#0d1117] dark:text-slate-200 flex flex-col">
        
            <div className="hidden dark:block w-screen">
                <img src={img2} className="w-full"/>
            </div>
            <div className="dark:hidden w-screen">
                <img src={img1} className="w-full"/>
            </div>

            <div className="flex flex-row w-10/12 mx-auto">
                <div className="flex flex-col w-1/2 px-16 text-black gap-y-5">
                    <p className=" text-3xl font-bold text-black dark:text-white">Lets level up your brand, together</p>
                    <p>You can reach us anytime</p>
                    <div className="flex flex-row gap-x-5">
                        <div className="w-full">
                            <p className="text-black dark:text-white">First Name</p>
                            <input type="text" className="outline-none border border-black w-full rounded-lg px-2 py-1 text-xl"/>
                        </div>
                        <div className="w-full">
                            <p className="text-black dark:text-white">Last Name</p>
                            <input type="text" className="outline-none border border-black w-full rounded-lg px-2 py-1 text-xl"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-black dark:text-white">Email</p>
                        <input type="email" className="outline-none border border-black rounded-lg px-2 py-1 text-xl"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-black dark:text-white">Phone number</p>
                        <input type="text" className="outline-none border border-black rounded-lg px-2 py-1 text-xl"/>
                    </div>
                    <div className="flex flex-col">
                            <p className="text-black dark:text-white">Message</p>
                            <textarea placeholder="Leave us a message" className="outline-none h-48 border border-black rows={4} cols={50} rounded-lg px-2 py-1 text-xl"/>
                    </div>
                    <div className="w-full py-4">
                        <button onClick={()=>{feedbacksub()}} className="w-full bg-yellow-600 py-1 px-2 rounded-lg text-2xl">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={img2}/>
                </div>
            </div>
        </div>
}

export default About;