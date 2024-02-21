import { useContext, useState } from "react";
import img1 from "../images/123.webp";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from "react-router";
import { MenuContext } from "../ContextAPI/MenuContext";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearFavres } from "../Redux/Slices/FavresSlice";

const UserAuth = () => {

    const navigate=useNavigate();
    const [login, setlogin] = useState(false);
    const {userName,setuserName}=useContext(MenuContext);

    const [value, setvalues] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [value1, setvalues1] = useState({
        email: "",
        password: "",
    })


    function loginsignupsetup() {
        setlogin(prev => !prev);
    }

    const [submitbuttondisabled,setsubmitbuttondisabled]=useState(false);

    const [errMsg,seterrMsg]=useState("");
    const [errMsg1,seterrMsg1]=useState("");
    function handlesubmission(){
        if(!value.name  || !value.email || !value.password){
            seterrMsg("Fill all fields");
            return ;
        }
        seterrMsg("");
        setsubmitbuttondisabled(true); 
        
        createUserWithEmailAndPassword(auth,value.email,value.password).then(
            async(res)=>{
                setsubmitbuttondisabled(false);
                const user=res.user;
                await updateProfile(user,{
                    displayName:value.name,
                });
                setuserName(value.name);
                toast.success("Signed In Successful", { position: "top-center" });
                navigate("/");
            }
        ).catch((err)=>{seterrMsg("Err: "+err.message); setsubmitbuttondisabled(false)})
    } 
    
    function handlesubmissionlogin(){
        if(!value1.email || !value1.password){
            seterrMsg1("Fill all fields");
            return ;
        }
        seterrMsg1("");
        setsubmitbuttondisabled(true); 
        
        signInWithEmailAndPassword(auth,value1.email,value1.password).then(
            async(res)=>{
                setsubmitbuttondisabled(false);
                toast.success("Logged In Successful", { position: "top-center" });
                navigate("/");
            }
        ).catch((err)=>{seterrMsg1("Err: "+err.message); setsubmitbuttondisabled(false)})
    } 
    const dispatch=useDispatch();

    function handlelogout(){

        signOut(auth).then(() => {
            toast.success("Log Out Successfully", {
                position: toast.POSITION.TOP_CENTER
            })
            
        }).catch((error) => {
            toast.failure("Error has been Occured", {
                position: toast.POSITION.TOP_CENTER
            })
        });          
        localStorage.removeItem("fav-items");
        localStorage.removeItem("Cart-data");
        localStorage.removeItem("Cart-freq");
        localStorage.removeItem("Cart-len");

        window.location.reload();
    }
    const user = auth.currentUser;


    const generateInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map((word) => word.charAt(0).toUpperCase());
        return initials.join('');
      };


    if (user && user !== null && user!==undefined && user.displayName) {

        const nam=generateInitials(user.displayName);
        return (<div className="flex flex-col  py-52 justify-center items-center  dark:bg-[#0d1117]">
                <div className="flex flex-col  bg-[#f6f8fc] p-10 rounded-lg gap-y-6 dark:bg-[#24292f] dark:text-slate-100 w-1/4 min-w-[333px]">
                    <p className="text-center bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center mx-auto">{nam}</p>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => {handlelogout()}} className="bg-[#c46b04] px-6 py-2 w-full rounded-lg disabled:bg-red-500">Log Out</button>
                </div>
            </div>
        )
    }

    function demologin(){
        setvalues1({email:"12@gmail.com",password:"123456"});
            handlesubmissionlogin();
    }
    
    return <div className="flex flex-col py-10 pt-36 justify-center items-center dark:bg-[#0d1117]">
        {
            !login ?
                (<div className="flex flex-col p-10 rounded-lg gap-y-6 dark:bg-[#24292f] bg-[#f6f8fc] dark:text-slate-100 w-1/4 min-w-[333px]">
                    <h1 className="text-3xl text-bold dark:text-slate-200">Sign Up</h1>
                   
                    <div>
                        <div className="pl-0.5"><label for="Name">Name</label></div>
                        <div className="text-slate-600"><input onChange={(e) => { setvalues(prev => ({ ...prev, name: e.target.value })) }} label="Name" placeholder="Full Name" type="text" className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" /></div>
                    </div>
                    <div>
                        <div className="pl-0.5"><label for="Email">Email</label></div>
                        <div className="text-slate-600"><input onChange={(e) => { setvalues(prev => ({ ...prev, email: e.target.value })) }} label="Email" placeholder="Enter Email" type="email" className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" /></div>
                    </div>
                    <div>
                        <div className="pl-0.5"><label for="Password">Password</label></div>
                        <div className="text-slate-600"><input minLength={8} onChange={(e) => { setvalues(prev => ({ ...prev, password: e.target.value })) }} label="Password" placeholder="Enter Password" type="password" className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" /></div>
                    </div>
                    <div>
                         <p className="text-red-500">{errMsg}</p>
                        <button disabled={submitbuttondisabled} onClick={() => { handlesubmission() }} className="bg-[#c46b04] text-lg px-6 py-2 w-full rounded-lg disabled:bg-red-500">Sign Up</button>
                        <p className="pt-2">
                            <span className="pr-3">Already have an account?</span>
                            <span className=" text-blue-400 cursor-pointer" onClick={() => { loginsignupsetup() }}>Login</span>
                        </p>
                        <span className="cursor-pointer text-blue-400" onClick={(e) => { demologin() }}>Demo-login(Double-click here)</span>
                    </div>
                </div>) :
                (<div className="flex flex-col  bg-[#f6f8fc] dark:bg-[#24292f] dark:text-slate-100 p-10 rounded-lg gap-y-6   w-1/3 min-w-[333px]">
                    <h1 className="text-3xl text-bold dark:text-slate-200">Login</h1>
                    <div className="flex flex-col gap-x-5">
                        <div className="pl-0.5"><label for="Email">Email</label></div>
                        <div className="text-slate-600"><input onChange={(e) => { setvalues1(prev => ({ ...prev, email: e.target.value })) }} label="Email" placeholder="Enter Email" type="email" className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" /></div>
                    </div>
                    <div className="flex flex-col gap-x-5">
                        <div className="pl-0.5"><label for="Password">Password</label></div>
                        <div className="text-slate-600"><input onChange={(e) => { setvalues1(prev => ({ ...prev, password: e.target.value })) }} label="Password" placeholder="Enter Password" type="password" className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" /></div>
                    </div>
                    <div>
                        <p className="text-red-500">{errMsg1}</p>
                        <button disabled={submitbuttondisabled} onClick={() => { handlesubmissionlogin() }} className="bg-[#c46b04] px-6 py-2 w-full rounded-lg disabled:bg-red-500">Login</button>
                        <p className="pt-2">
                            <span className="pr-3">Don't have an account?</span>
                            <span className=" text-blue-400" onClick={() => { loginsignupsetup() }}>Sign Up</span>
                        </p>
                    </div>
                </div>)
        }
    </div>
}
export default UserAuth;