"use client";

import { Input, Textarea } from "@material-tailwind/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { contactHome, contact } from "../data/contact";

const ContactUs = () => {
  return (
    <div className=" flex flex-col  w-full h-[80vh] my-20  px-14  ">
      <h4 className="text-5xl text-[#0C164B] font-bold my-5">Contact Us</h4>

      <div className="flex flex-row ">
        <section className="basis-4/6">
          <div className="w-full my-4">
            <Input color="teal" label="Full Name" crossOrigin="" />
          </div>
          <div className="w-full  my-4">
            <Input color="teal" label="Your Email" crossOrigin="" />
          </div>
          <div className="w-full  my-4">
            <Input color="teal" label="Subject" crossOrigin="" />
          </div>
          <div className="w-full  my-4">
            <Textarea
              size="lg"
              color="teal"
              label="Your Message"
              className="h-36"
            />
          </div>
          <button className="w-40 p-4 bg-normal mt-1 text-white rounded text-base font-medium ">
            Send Message
          </button>
        </section>
        <section className="basis-2/6 ">
          <div className="flex flex-col mt-5 w-[50%] mx-auto  ">
            {contactHome.map((item: contact) => {
              return (
                <div className="my-2">
                  <h4 className="uppercase text-[#0C164B] text-xl">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
