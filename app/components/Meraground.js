import React from "react";

function Meraground() {
  return (
    <>
      <div className=" fixed w-full z-[2] h-screen">
        <div className="w-full py-4 flex justify-center  absolute top-5 text-zinc-400 font-semibold">
          Documents
        </div>
        <h1 className="absolute top-1/2  left-1/2  -translate-x-[50%] -translate-y-[50%] text-[7vw] leading-none font-bold text-zinc-200">
          Docs
        </h1>
      </div>
    </>
  );
}

export default Meraground;
