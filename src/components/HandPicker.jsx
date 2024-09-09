import React from "react";
import product from "../assets/product";
import Container from "./Container";

export default function HandPicker() {
  return (
    <Container className={"my-10 scroll-auto overflow-x-auto"}>
      <h1 className="text-center py-5 font-semibold text-4xl">
        Kiara's Handpicked Edit
      </h1>
      <div className="w-full flex h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-3 ">
        {product.map((item) => (
          <div key={item.id} className="">
            <div className=" w-[380px] h-[510px]">
              <img
                src={item.img}
                className=" w-full h-full inline-block  cursor-pointer object-cover rounded-lg"
              />
            </div>
            <div className="p-2">
              <p className="text-xs">{item.name}</p>
              <span className="pr-1 line-through py-3">{item.old_price}</span>
              <span>{item.new_price}</span>{" "}
              <a className="text-red-600 ">{item.discount}</a>
              <p className="text-xs pt-3">{item.size.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
