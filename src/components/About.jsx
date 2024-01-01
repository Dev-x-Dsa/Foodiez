import img from "../images/loadcrop.gif"
const About = () => {
    return <div className="py-12 dark:bg-[#0d1117] dark:text-slate-200 flex flex-col">
        <h1 className="dark:text-slate-200 text-5xl"> About Us </h1>
        <br /><br />
            <div className="flex">
            <img src={img} alt="" className="m-5"/>
                <div className="flex flex-col text-2xl w-[50rem] gap-2">
                    <h2 className="dark:text-slate-300 text-3xl">🍽️  Foodiez - The best way to order food 🍽️</h2>
                    <br /><br />
                    <p>Foodiez is a food delivery platform that connects you with your favorite local restaurants and cuisines. Whether you are craving pizza, sushi, burgers, or salads, we have it all. You can browse through our menu, select your items, and place your order in just a few clicks. We deliver your food fast and fresh, right to your doorstep.</p>
                    <br />
                    <p>Our mission is to make food ordering easy, convenient, and enjoyable. We are passionate about food and customer satisfaction. We partner with hundreds of restaurants across the city, offering a wide range of cuisines and dishes to suit your taste and budget.</p>
                    <br />
                    <p>Whether you are looking for a quick snack, a family meal, or a special occasion, we have you covered. Order from Foodiez today and enjoy the best food delivery service in town.</p>
                </div>
            </div>
        </div>
}

export default About;