import React from "react";
import Container from "./Container";
import pink from "../assets/purplelhenga2.jpg";
import special from "../assets/rainy_season.webp";
import bbb from "../assets/Blouse_Designs.webp";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";

export default function PurpulEdit() {
  return (
    <Container>
      <div className="flex flex-col  gap-5 items-center py-5 px-2 md:px-0">
        <div className="w-16  h-14">
          <img
            src="https://www.libas.in/cdn/shop/files/purple_Libas-Logo_1_1.png?v=1716187208&width=260"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-36 ">
          <img
            src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Vector_Smart_Object.png?v=1684215327"
            alt=""
          />
        </div>
        <p className="text-[#922e91]">
          Get your daily dose of style inspiration!
        </p>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10">
          {purple_pic.map((item) => (
            <div key={item.id} className="text-center ">
              <div className="lg:w-[460px]  md:w-[350px]  h-[360px] ">
                <img
                  src={item.img}
                  alt="/"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-5 items-center py-2">
                <h5 className="text-xl">{item.short_dec}</h5>
                <p className="text-sm">{item.long_dec.slice(0, 60)}...</p>
                <a className="underline text-sm font-semibold"> {item.tag}</a>
                <div className="flex gap-2 ">
                  {" "}
                  Share: {item.sm1} {item.sm2} {item.sm3}
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="underline text-sm font-semibold py-5">Veiw All</a>
      </div>
    </Container>
  );
}

export let purple_pic = [
  {
    id: 1,
    img: pink,
    short_dec: "Mark your calendars: Libas Purple Days Sale is Live!",
    long_dec:
      "Immerse in the world of ethnic fashion with the Libas Purple Days Sale. With the changing season, our wardrobes demand a dash of freshness. From gloomy winter outfits to lively summer outfits, it’s time to add a breath of fresh air to your new season closet. So, if you’re wondering how to go about it without breaking the bank, read on and you’ll get all the insights about the amazing discounts and offers going live with Libas Purple Days Sale.",
    tag: "View Post",
    sm1: <FaFacebook />,
    sm2: <FaXTwitter />,
    sm3: <FaPinterestSquare />,
  },
  {
    id: 2,
    img: special,
    short_dec: "Get Monsoon Ready with Must-Have Clothes in Rainy Season",
    long_dec:
      "The pleasant peterichor, aroma of lip-smacking fritters, and lots of hot chai, the monsoon season is easily our favourite. The palpable shift in the air does fill the atmosphere with so much nostalgia and a feeling of joy. With that being said, the monsoon season also brings small and big puddles, making our lives miserable. And the real challenge lies in picking the right clothes in rainy season.",
    tag: "View Post",
    sm1: <FaFacebook />,
    sm2: <FaXTwitter />,
    sm3: <FaPinterestSquare />,
  },
  {
    id: 3,
    img: bbb,
    short_dec: "Latest Saree Blouse Designs for Festive Dressing.",
    long_dec:
      "Saree blouse designs have evolved immensely. Centuries ago, saree blouses were worn as a fabric that could cover the upper part of the body and the nine-yard saree was draped over it. Gradually with more exposure to Western influence, Victorian-style saree blouses came into the limelight and women started teaming it up with their sarees in the pre-Independence era. Later with a portrayal of saree blouse designs in Bollywood movies, and the emergence of modernization; saree blouse designs underwent a remarkable process of evolution.",
    tag: "View Post",
    sm1: <FaFacebook />,
    sm2: <FaXTwitter />,
    sm3: <FaPinterestSquare />,
  },
];
