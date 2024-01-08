import img from "../images/loadcrop.gif"
import img1 from "../images/first.png";
import img2 from "../images/last.png";
import img3 from "../images/r_aside.jpg";
import { toast } from "react-toastify";

const About = () => {
    function feedbacksub(){
        toast.success("Feedback Submitted !!",{
            position: toast.POSITION.TOP_CENTER,
        })
    }
    return <div className="dark:bg-[#0c111d] dark:text-slate-200 flex flex-col pt-6 overflow-clip">
        
            <div className="hidden dark:block w-screen">
                <img src={img2} className="w-full"/>
            </div>
            <div className="dark:hidden w-screen">
                <img src={img1} className="w-full"/>
            </div>

            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col mx-auto mt-10 text-black gap-y-2.5">
                <p className=" text-3xl font-bold text-black dark:text-[#e5d8fa]">Lets level up your brand, together</p>
                <p className="dark:text-[#f1f0f6]">You can reach us anytime</p>
                    <div className="flex flex-row gap-x-5">
                        <div className="w-full">
                        <p className="text-black dark:text-[#f1f0f6]">First Name</p>
                            <input type="text" className="outline-none border border-black w-full rounded-lg px-2 py-1 text-xl"/>
                        </div>
                        <div className="w-full">
                        <p className="text-black dark:text-[#f1f0f6]">Last Name</p>
                            <input type="text" className="outline-none border border-black w-full rounded-lg px-2 py-1 text-xl"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-black dark:text-[#f1f0f6]">Email</p>
                        <input type="email" className="outline-none border border-black rounded-lg px-2 py-1 text-xl"/>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-black dark:text-[#f1f0f6]">Phone number</p>
                        <input type="text" className="outline-none border border-black rounded-lg px-2 py-1 text-xl"/>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-black dark:text-[#f1f0f6]">Message</p>
                            <textarea placeholder="Leave us a message" className="outline-none h-48 border border-black rows={4} cols={50} rounded-lg px-2 py-1 text-xl"/>
                    </div>
                    <div className="w-full py-4">
                    <button onClick={() => { feedbacksub() }} className="w-full bg-[#a17bec] py-1 px-2 rounded-lg text-2xl">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="overflow-clip">
                    <img src={img3}/>
                </div>
            </div>
        </div>
}

export default About;