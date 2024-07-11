import Image from "next/image";
import React from "react";
import acmlogo from "../assets/acmlogo.png";

const Navbar = ({ dashPage, user }) => {
  return (
    <div>
      <div className="bg-[#eee] shadow w-full h-[5em] py-1 px-12 flex justify-between items-center">
      <div>
        <h1 className="text-black text-2xl font-bold">{dashPage}</h1>
      </div>
      <div className="rounded-full w-14 h-14 flex items-center gap-2">
        <Image
          src={acmlogo}
          alt="logo"
          width={500}
          height={500}
          className="bg-white rounded-full w-auto p-1 h-auto"
        />
        <p className="text-lg font-semibold">{user}</p>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
