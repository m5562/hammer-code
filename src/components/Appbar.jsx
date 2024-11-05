import Image from "next/image";
import React from "react";

const Appbar = () => {
  return (
    <div className="px-4 container mx-auto">
      <div className="flex items-center justify-between">
        <Image
          alt="logo"
          className="h-14"
          src={"/next.svg"}
          width={100}
          height={50}
        ></Image>
        <nav className="flex gap-4">
          <p>Problems</p>
          <p>Blog</p>
          <p>Contest</p>
        </nav>
        <div>
          <Image
            alt="logo"
            className="h-14"
            src={"/globe.svg"}
            width={50}
            height={50}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
