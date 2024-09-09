import React from "react";
import Container from "./Container";
import discount_list from "../assets/discount";

export default function DiscountList() {
  return (
    <Container>
      <div>
        <h1 className="text-center text-fuchsia-800 pb-5 text-3xl">
          Never Before Discounts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-4">
          {discount_list.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                alt="/"
                className="w-full h-full object-cover border-fuchsia-900 border"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
