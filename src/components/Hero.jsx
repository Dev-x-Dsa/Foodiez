import plate from "../images/plate.png"

const Hero = () => {
    return (<div className="text-white bg-neutral-700 p-10 font-Open h-[500px] mb-10 bg-hero overflow-hidden text-3xl">
        <div className="flex items-stretch justify-between">
            <div className="flex flex-col">
                <h2 className="my-2">Enter Location 🗺</h2>
                <input type="text" className="rounded-md"/>
            </div>
            <div className="relative w-[400px]">
                <img src={plate} alt="" className="absolute -top-32 -right-32 w-full" />
            </div>
        </div>
    </div>)
}

export default Hero;