"use client";
import { FaAward } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";

export default function SpecialOffer() {
  return (
    <div className="w-full flex  justify-center mx-auto  flex-col md:flex-row items-center px-6 gap-24 pb-10">
      <div className=" py-4 w-full  lg:w-[320px]">
        <div className=" w-12 h-12 bg-background-b2 flex justify-center items-center rounded-full text-4xl mb-2">
          <TbTruckDelivery />
        </div>
        <h1 className="heading-h5 text-foreground-f2 mb-3">Free Shipping</h1>
        <p className="body-p1 text-foreground-f5">
          Upgrade your style today and get FREE shipping on all orders! Don't
          miss out.
        </p>
      </div>
      <div className=" py-4 w-full  lg:w-[320px]">
        <div className=" w-12 h-12 bg-background-b2 flex justify-center items-center rounded-full text-4xl mb-2">
          <FaAward />
        </div>
        <h1 className="heading-h5 text-foreground-f2 mb-3">
          Satisfaction Guarantee
        </h1>
        <p className="body-p1 text-foreground-f5">
          Shop confidently with our Satisfaction Guarantee: Love it or get a
          refund.
        </p>
      </div>
      <div className="py-4 w-full  lg:w-[320px]">
        <div className=" w-12 h-12 bg-background-b2 flex justify-center items-center rounded-full text-4xl mb-2">
          <GoShieldCheck />
        </div>
        <h1 className="heading-h5 text-foreground-f2 mb-3">Secure Payment</h1>
        <p className="body-p1 text-foreground-f5">
          Your security is our priority. Your payments are secure with us.
        </p>
      </div>
    </div>
  );
}
