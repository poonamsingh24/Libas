import React from "react";
import Container from "./Container";
import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";
import v6 from "../assets/v6.mp4";
import v7 from "../assets/v7.mp4";

import v9 from "../assets/v9.mp4";

export default function Vedio() {
  return (
    <Container>
      <div className="my-20 ">
        <h1 className="text-[#922e91] text-3xl text-center py-2">
          Top Picks By Influencers
        </h1>

        <div className="py-3  flex gap-4 scrollbar-hide overflow-x-scroll scroll-smooth ">
          <video
            loop
            muted
            controls
            src={v1}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>{" "}
          <video
            loop
            controls
            autoplay
            muted
            src={v2}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>
          <video
            loop
            controls
            autoplay
            muted
            src={v3}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>
          <video
            loop
            controls
            autoplay
            muted
            src={v4}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>
          <video
            loop
            controls
            autoplay
            muted
            src={v5}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>
          <video
            loop
            controls
            autoplay
            muted
            src={v6}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>
          <video
            loop
            controls
            autoplay
            muted
            src={v7}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>
          <video
            loop
            controls
            autoplay
            muted
            src={v9}
            className="rounded-lg shadow-lg  object-cover w-72 h-96"
          ></video>
        </div>
      </div>
    </Container>
  );
}
const vedio = [
  {
    id: 1,
    video: v1,
  },
  {
    id: 2,
    video: v2,
  },
  {
    id: 3,
    video: v3,
  },
  {
    id: 4,
    video: v4,
  },
  {
    id: 5,
    video: v5,
  },
  {
    id: 6,
    video: v6,
  },
  {
    id: 7,
    video: v7,
  },

  {
    id: 9,
    video: v9,
  },
];
