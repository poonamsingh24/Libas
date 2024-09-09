import React from "react";
import Container from "./Container";
import category_data from "../assets/data";

export default function Categories() {
  return (
    <Container className={"my-5 md:flex items-center"}>
      <div className="text-center py-5 px-2  gap-2 mx-10">
        <h2 className="text-2xl pt-5 ">Categories</h2>
        <p className="py-2 text-xs">Discover Your Fashion</p>
        <a className="py-2 text-xs underline">ShopNow</a>
      </div>
      <div className="w-full flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {category_data.map((item) => (
          <div key={item.id} className="">
            <div className="w-[200px] h-[250px] ">
              <img
                src={item.img}
                className="w-full h-full inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 object-cover"
              />
            </div>
            <p className="text-center text-sm underline cursor-pointer hover:text-fuchsia-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
