import React, { useEffect, useState } from "react";
import Card2 from "./Card2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../images/loadcrop.gif";
import img2 from "../images/finalcrop.gif";
import visa from "../images/visa.png"
import mastercard from "../images/mastercard.png"
import rupay from "../images/rupay.png"
import qr from "../images/qr.png"

const Cart = () => {
  const [check, setcheck] = useState("hidden");
  const [check2, setcheck2] = useState("visible");
  const [ohover, sethover] = useState(false);
  const [img,setimg]=useState(mastercard);
  useEffect(() => {
    setTimeout(() => {
      setcheck("visible");
      setcheck2("hidden");
    }, 3880);
  }, []);

  useEffect(() => {
    if (ohover === true) {
      setcheck("hidden");
      setcheck2("visible");
      setTimeout(() => {
        setcheck("visible");
        setcheck2("hidden");
        sethover(false);
      }, 3500);
    }
  }, [ohover]);

  function changeimage(){
    console.log("chlaa")
    console.log(img);
    setTimeout(() => {
      setimg(visa);
    },1000);
    setTimeout(() => {
      setimg(rupay);
    },4000);

    setTimeout(() => {
      setimg(mastercard)
    },7000);
  }
  var total = 0;
  var freq1 = 0;
  const cartitems = useSelector((store) => store.cart.items);
  const uniquecartitems = [...new Set(cartitems)];
  const freq = useSelector((store) => store.cart.itemQuantities);
  return (
    <div className="dark:bg-[#0d1117] dark:text-white py-10 font-Open min-h-[370px] max-h-full">
      <div>
        {uniquecartitems.length !== 0 ? (
          <div className="flex flex-row w-10/12 mx-auto gap-x-10 justify-around">
            <div className="dark:bg-[#24292f] px-4 py-4 h-[777px] rounded-xl bg-[#faf9f9]">
              <div className="text-2xl mb-5 ml-2 flex">
                <p className="mr-2">Shopping Cart</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a8bbbf" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </div>
              <div className="min-w-[800px]  h-[510px] overflow-x-hidden overflow-y-scroll dark:bg-[#21252b] bg-[#f5f4f4] border-b-2 border-t-2 border-[#a8bbbf] rounded-sm">
                {uniquecartitems.map((cartitem) => {
                  freq1 += freq[cartitem?.info?.id];
                  cartitem?.info?.price
                    ? (total =
                      total +
                      (parseInt(cartitem?.info?.price) / 100) *
                      freq[cartitem?.info?.id])
                    : (total += 130 * freq[cartitem?.info?.id]);
                  return <Card2 cartitem={cartitem} />;
                })}
              </div>
              <div>
                {cartitems.length !== 0 ? (
                  <div className="text-3xl my-2">
                    <div className="flex items justify-between items-stretch">
                      <span class="capitalize w-full text-zinc-700 font-medium text-2xl dark:text-neutral-300 ml-1">
                        Subtotal :{" "}
                      </span>
                      <span class="text-neutral-700 font-thin dark:text-gray-300">
                        ₹{total}.00
                      </span>
                    </div>
                    <div className="flex items justify-between items-stretch">
                      <span class="capitalize w-full text-zinc-700 font-medium text-2xl dark:text-neutral-300 ml-1">
                        Delivery Charges :{" "}
                      </span>
                      <span class="text-neutral-700 font-thin dark:text-gray-300">
                        ₹50.00
                      </span>
                    </div>
                    <div className="border-[#a8bbbf] border-t-2 my-6"></div>
                    <div className="flex items justify-between items-stretch">
                      <span class="capitalize w-full text-zinc-700 font-medium text-2xl dark:text-neutral-300 ml-1">
                        Total Price :{" "}
                      </span>
                      <span class="text-neutral-700 font-thin dark:text-gray-300">
                        ₹{total + 50}.00
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="dark:text-black text-white"></p>
                )}
              </div>
            </div>
            <div>
              {
                <div className="flex flex-col gap-y-6 h-[571px] items-stretch justify-stretch w-[654px]">
                  <div className="dark:bg-[#24292f] pb-9 pt-4 px-10 rounded-xl bg-[#faf9f9]">
                    <div>
                      <p className="text-2xl font-semibold">Delivery Info</p>
                      <div className="border-[#a8bbbf] border-t-2 my-5"></div>
                      <div className="flex flex-col ">
                        <div className="flex py-2">
                          <div className="flex flex-col w-full">
                            <div className="flex">Address<span class='text-red-500'>*</span></div>
                            <input type="text" className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white" />
                          </div>
                        </div>
                        <div className="flex justify-between py-2 w-full gap-x-5">
                          <div className="flex flex-col w-full">
                            <div className="flex">City<span class='text-red-500'>*</span></div>
                            <input type="text"  className="dark:bg-[#757575]  bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white"/>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="flex">State<span class='text-red-500'>*</span></div>
                            <input type="text" className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white"/>
                          </div>
                        </div>
                        <div className="flex justify-between py-2 w-full gap-x-5">
                          <div className="flex flex-col w-full">
                            <div className="flex">Pin Code<span class='text-red-500'>*</span></div>
                            <input type="number" className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white" min="000000" max="999999" />
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="flex">Mobile<span class='text-red-500'>*</span></div>
                            <input type="tel" className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white" pattern="[6-9]{1}-[0-9]{9}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dark:bg-[#24292f] pb-6 pt-4 px-10 rounded-xl bg-[#faf9f9]">
                    <div>
                      <div className="flex justify-between">
                        <p className="text-2xl font-semibold">Payment</p>
                        <div class="bg-[#bbbaba] dark:bg-[#141618] p-1.5 rounded-md flex text-base">
                          <div class="dark:bg-[#232627] bg-[#858484] rounded-md text-center w-[100%] cursor-pointer p-0.5 pr-1.5">Card</div>
                          <div class="dark:bg-[#141618] bg-[#bbbaba] rounded-md text-center w-[100%] cursor-pointer p-0.5 pl-1.5">UPI</div>
                        </div>
                      </div>
                      <div className="border-[#a8bbbf] border-t-2 my-5"></div>
                      <div className="flex flex-col">
                        <div className="flex py-2">
                          <div className="flex flex-col w-full">
                            <div className="flex">Card Holder<span class='text-red-500'>*</span></div>
                            <input type="text" className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white"/>
                          </div>
                        </div>
                        <div className="flex justify-between py-2 gap-x-4">
                          <div className="flex flex-col w-full">
                            <div className="flex">Card Number<span class='text-red-500'>*</span></div>
                            <div className="flex flex-row gap-x-5">
                              <input maxLength={10} type="text" onChange={() => { changeimage() }} className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white"/>
                            <img class="w-[3rem]" src={img}></img>
                            </div>                            
                          </div>
                          </div>
                              
                        <div className="flex justify-between py-2 gap-x-5">
                          <div className="flex flex-col w-full">
                            <div className="flex">Expiry<span class='text-red-500'>*</span></div>
                            <input type="date" className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white dark:text-slate-100"/>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="flex">CVV/CVC<span class='text-red-500'>*</span></div>
                            <input type="password" className="dark:bg-[#757575] bg-neutral-200 outline-none rounded-md px-2 py-0.5 w-full text-black dark:text-white dark:text-slate-100"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5">
                      <button className=" bg-blue-700 w-1/3 rounded-lg px-auto py-3 text-lg text-white">Pay Now ₹{check}</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-10 dark:text-white">
            <img src={img1} className={`w-[400px] pb-7  ${check2}`} />
            <img
              onPointerOver={() => {
                sethover(true);
              }}
              src={img2}
              className={`w-[400px] pb-7  ${check}`}
            />
            <p className=" font-bold text-2xl">Oops... Cart is empty</p>
            <p className="text-[#78716c]">Feeling Hungry...</p>
            <Link to="/">
              <button className="mt-4 rounded-full text-white border-2 p-2 text-xl bg-[#ff2400] px-6 dark:border-slate-700">
                Order Now
              </button>
            </Link>
          </div>
        )}
      </div>

    </div>
  );
};

export default Cart;
