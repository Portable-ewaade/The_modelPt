// use client
import React, { useEffect } from "react";

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

  
        </div>
      </div>
    </>
  );
};

export default Message;
