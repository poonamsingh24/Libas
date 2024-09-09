import React from "react";
import Container from "./Container";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterest,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import visa from "../assets/visa.webp";
import paytm from "../assets/ptm1.jpg";
import mastercard from "../assets/mastercard.webp";
import american from "../assets/am_amex_.jpg";

export default function Footer() {
  return (
    <div className="bg-[#ffcfd2]">
      <Container>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-4 pt-20 pb-5">
          <div className="text-fuchsia-900">
            <div className="flex flex-col font-semibold">
              <h4 className="text-xl py-2  ">Contact Us</h4>
              <a href="#">
                +91 9899990772 |
                <a href="https://www.libas.in/">Care@libas.in</a>
              </a>
            </div>
            <div className="text-fuchsia-900 font-semibold">
              <h4 className="text-xl py-2 "> Discover</h4>
              <a href="#">Gift Card</a>
              <a href="#">Sale</a>
            </div>
          </div>
          <div className="text-fuchsia-900">
            <h4 className="text-xl py-2 font-semibold">Explore More</h4>
            <div className="flex flex-col gap-2 font-semibold text-sm">
              <a href="#">New</a>
              <a href="#">Suits</a>
              <a href="#">Kurtas</a>
              <a href="#">Libas Art</a>
              <a href="#">Dresses</a>
              <a href="#">Saree</a>
              <a href="#">Longwear</a>
              <a href="#">Bottomwear</a>
              <a href="#">Extra Love</a>
              <a href="#"> Co Ords</a>
              <a href="#">Sharana</a>
              <a href="#">Purple Edit</a>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-fuchsia-900">
            <h4 className="text-xl font-semibold ">Customer Experience</h4>
            <div className="flex flex-col gap-2 font-semibold text-sm">
              <a href="#">Terms & Condition</a>
              <a href="#">Shipping Policy</a>
              <a href="#">Return Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Track Order</a>
              <a href="#">Raise Return</a>
              <a href="#">Store Locator</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div>
            <h4 className="text-xl pb-2 text-fuchsia-900 font-semibold ">
              Follow Us
            </h4>
            <div className="flex gap-6 text-fuchsia-900">
              <FaInstagram size={22} className="cursor-pointer" />
              <FaFacebookF size={22} className="cursor-pointer" />
              <FaYoutube size={22} className="cursor-pointer" />
              <FaXTwitter size={22} className="cursor-pointer" />
              <FaPinterest size={22} className="cursor-pointer" />
            </div>
            <div className="text-fuchsia-900">
              <h1 className="text-xl py-5 font-semibold ">Download The App</h1>
              <div className="flex gap-4 ">
                <button className="flex gap-2 items-center border bg-fuchsia-900 py-2 px-5 rounded text-white">
                  <FaGooglePlay /> <a href="#">Google Play</a>
                </button>
                <button className="flex gap-2 items-center border bg-fuchsia-900 text-white py-1 px-5 rounded">
                  <FaApple /> <a href="#">App Store</a>
                </button>
              </div>
            </div>
            <h4 className="pt-5 pb-5 text-lg text-fuchsia-900 font-semibold ">
              Secure Payment
            </h4>
            <div className="flex gap-3">
              <div className="w-12 h-8">
                <img src={visa} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-8">
                <img
                  src={paytm}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-8 ">
                <img
                  src={mastercard}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-12 h-8 ">
                <img
                  src={american}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            <p className="text-[12px] text-fuchsia-900 font-semibold py-3">
              &copy; Libas 2024. All rights reserved.
            </p>
          </div>
        </div>
        <div className="pb-10">
          <h4 className="text-lg font-semibold py-5 text-fuchsia-900">
            Shop By Occasion
          </h4>
          <p className="text-[13px]  text-fuchsia-900 leading-6 underline tracking-wider">
            Mother's Day Outfit | Mehendi Outfits | Wedding Collection | Wedding
            Suits For Women | Eid Dresses | Haldi Dress | Wedding Suit For Women
            | Women's Day Sale | Holi Dresses |Mehendi Outfits |Marriage Dresses
            | Wedding Collection | Wedding Suits For Women | Durga Puja Dresses
            | New Year Dresses | Lohri Sale | Makar Sankranti Offers | Pongal
            Offers | Republic Day Sale | Basant Panchami Special | Gudi Padwa
            Dress | Vishu Dresses | Independence Day Sale | Raksha Bandhan Sale
            | Janmashtami Sale | Ganesh Chaturthi Sale | Onam Offers | Dussehra
            Sale | Karwa Chauth Sale | Diwali Sale
          </p>
        </div>
      </Container>
    </div>
  );
}
