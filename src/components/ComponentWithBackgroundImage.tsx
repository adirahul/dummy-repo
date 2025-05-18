import React from "react";
import backgroundImage from "../assets/image1.png"

const ComponentWithBackgroundImage = () => {
  return (
    <div className="relative h-80 w-full flex flex-col justify-center items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl w-[800px] text-center text-gray-900 font-bold">
          Our Events Gallery
        </div>
        <div className="text-lg w-[800px] text-center text-gray-900 font-normal pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel
          sit accusantium aspernatur possimus officiis, sint aperiam saepe!
          Inventore, animi!
        </div>
      </div>
    </div>
  );
};

export default ComponentWithBackgroundImage;
