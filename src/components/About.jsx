import img from "../images/download.jpg"

const Contact = () => {
    return <div className="dark:bg-[#0d1117] dark:text-white">
            <div className="flex flex-col w-3/4 px-10 mx-auto py-16 gap-y-20">
            <div className="flex flex-row gap-x-2">
            <p className="min-w-[15%] text-2xl">Who we are</p>
                <p className="text-2xl text-justify">
                He ordered his regular breakfast. Two eggs sunnyside up, hash browns, and two strips of bacon. He continued to look at the menu wondering if this would be the day he added something new. This was also part of the routine. A few seconds of hesitation to see if something else would be added to the order before demuring and saying that would be all. It was the same exact meal that he had ordered every day for the past two years
                He ordered his regular breakfast. Two eggs sunnyside up, hash browns, and two strips of bacon. He continued to look at the menu wondering if this would be the day he added something new. This was also part of the routine. A few seconds of hesitation to see if something else would be added to the order before demuring and saying that would be all. It was the same exact meal that he had ordered every day for the past two years
                </p>
            </div>
            <div className="flex justify-between">
                <div className="w-[30%] bg-[#0d1097] text-2xl bg-red-700 p-10 gap-y-6 flex flex-col">
                   <h2 className="text-yellow-600">Leadership Principles</h2>
                   <p>
                        Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.
                   </p>
                   <button className="w-fit border border-grey-300 rounded-full py-3 px-3">Learn More➡️</button>
                </div>
                <div className="w-[30%] bg-[#0d1097] text-2xl bg-red-700 p-10 gap-y-6 flex flex-col">
                    <h2 className="text-yellow-600">Leadership Principles</h2>
                    <p>
                            Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.
                    </p>
                    <button className="w-fit border border-grey-300 rounded-full py-3 px-3">Learn More➡️</button>
                </div>
                <div className="w-[30%] bg-[#0d1097] text-2xl bg-red-700 p-10 gap-y-6 flex flex-col">
                    <h2 className="text-yellow-600"> Leadership Principles</h2>
                    <p>
                            Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.
                    </p>
                    <button className="w-fit border border-grey-300 rounded-full py-3 px-3">Learn More➡️</button>
                </div>
            </div>
            <div className="w-full">
                <img src={img} className="w-full"/>
            </div>
        </div>
    </div>
}

export default Contact;