import React from "react";
import Container from "./Container";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FollowUs() {
  return (
    <Container>
      <div className="py-5 text-center">
        <div className="flex flex-col items-center gap-3 my-20">
          <h1 className="text-2xl ">Subscribe To Our Newsletter</h1>
          <p className="text-sm">
            Be the first know about New Launches Sales, Trend Update & More
          </p>
          <form className="flex w-[350px] h-[40px] my-5">
            <input
              placeholder="Enter your Email..."
              type="email"
              className="border border-black w-full px-3 py-2 outline-none"
            />
            <button className="p-2 border border-black px-5 ">
              <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
