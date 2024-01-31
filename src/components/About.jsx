import img from "../images/download.webp"

const Contact = () => {
    return <div className="dark:bg-[#0c111d] dark:text-white text-neutral-900 pt-24">
            <div className="flex flex-col w-[82%] px-10 mx-auto py-10 gap-y-12">
            <div className="flex aboutus2 gap-x-2">
            <p className="min-w-[22%] text-3xl dark:text-slate-200">Who we are</p>
                <p className="text-xl text-justify dark:text-slate-100"> 
                    <span className="font-bold">Foodiez</span> is driven by four values: customer satisfaction, culinary innovation, operational efficiency, and long-term vision. Foodiez aims to be the world's most convenient and reliable food delivery service, the best partner for restaurants and chefs, and the most enjoyable place to work. Customer ratings, easy ordering, personalized suggestions, Foodiez Plus, Foodiez Express, Foodiez Kitchen, Foodiez Fresh, Foodiez Rewards, Foodiez Box, Foodiez Go, Foodiez Voice, Foodiez Pay, and The Foodiez Promise are some of the features and initiatives launched by Foodiez.</p>
            </div>
            <div className="flex aboutus  justify-between text-xl">
                <div className=" rounded-lg dark:bg-[#24292f] bg-[#f6f8fc] text-xl p-5 py-6 gap-y-6 flex flex-col text-black dark:text-[#e5d8fa] text-justify">
                   <h2 className="text-violet-500 dark:text-violet-400 text-3xl font-semibold">Top Restaurants</h2>
                   <p>
                        Our Quality Standards are more than catchy slogans. The 12 standards reflect our commitment to delivering the best food and service to our customers every day from day one.
                   </p>
                    <button className="invert dark:invert-0 w-fit border border-grey-300 rounded-full py-3 px-3 flex gap-x-3"><span className="invert dark:invert-0">Learn More</span><span className="w-[30px] p-0.5"><svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#e2e8f0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg></span></button>
                </div>
                <div className="rounded-lg dark:bg-[#24292f] bg-[#f6f8fc] text-xl p-5 py-6 gap-y-6 flex flex-col text-black dark:text-[#e5d8fa] text-justify">
                    <h2 className="text-violet-500 dark:text-violet-400 text-3xl font-semibold">Best in class service</h2>
                    <p>
                        At Foodiez, we deliver delicious meals from your favorite restaurants in minutes, with no hidden fees or extra charges. Best thing is that we have a consumer first approach everyday.
                    </p>
                    <button className="invert dark:invert-0 w-fit border border-grey-300 rounded-full py-3 px-3 flex gap-x-3"><span className="dark:invert-0 invert">Learn More</span><span className="w-[30px] p-0.5"><svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#e2e8f0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg></span></button>
                </div>
                <div className=" rounded-lg dark:bg-[#24292f] bg-[#f6f8fc] text-xl p-5 py-6 gap-y-6 flex flex-col text-black dark:text-[#e5d8fa] text-justify">
                    <h2 className="text-violet-500 dark:text-violet-400 text-3xl font-semibold">Customer First</h2>
                    <p>
                            Our consumers have made us what we are today, and so they are our first priority. They are the real Foodiez, join us in our mission to make this world a better place for the next generation.
                    </p>
                    <button className="invert dark:invert-0 w-fit border border-grey-300 rounded-full py-3 px-3 flex gap-x-3"><span className="invert dark:invert-0">Learn More</span><span className="w-[30px] p-0.5"><svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#e2e8f0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg></span></button>
                </div>
            </div>
            <div className="w-full">
                <img src={img} className="w-full overflow-clip rounded-lg"/>
            </div>
        </div>
    </div>
}

export default Contact;