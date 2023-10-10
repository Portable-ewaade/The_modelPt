// use client
import React, { useEffect } from "react";
import Link from "next/link";

const Message = ({ title, buttonText }) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="card px-5 pb-5 border-0">
        <div className=" text-center">
          <h2 className="fw-bold">{title}</h2>
          <p className="">
            Our team of experts will get in touch with you in no time.
          </p>

          <Link href="" className="text-color">
            {buttonText ? buttonText : "Home"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Message;
