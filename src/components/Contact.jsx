import img from "../images/instagram.png"
const Contact = () => {
    return <div className="py-12 dark:bg-[#0d1117] dark:text-slate-200 flex flex-col">
        <h1 className="dark:text-slate-200 text-5xl"> Get in Touch </h1>
        <br /><br />
        <div className="flex">
            <img src={img} alt="" className="m-5"/>
            <div className="flex flex-col text-2xl w-[50rem] gap-2">
                <h2 className="dark:text-slate-300 text-3xl">Phone No: 123456789 📞</h2>
                <h2 className="dark:text-slate-300 text-3xl">Email   : Foodiez@email.com ✉</h2>
                <br /><br />
                <form action="">
                    <label for="fname">First name : </label><input type="text" id="fname" name="fname" className="outline-none px-2 mx-2 my-2 "></input><br />
                    <label for="lname">Last name : </label><input type="text" id="lname" name="lname" className="outline-none px-2 mx-2 my-2 "></input><br />
                    <label for="cnt">Contact Number : </label><input type="phone" id="cnt" name="cnt" className="outline-none px-2 mx-2 my-2 "></input><br />
                    <label for="eml">Email Id : </label><input type="mail" id="eml" name="eml" className="outline-none px-2 mx-2 my-2 "></input><br />
                </form>
            </div>
        </div>
    </div>
}

export default Contact;