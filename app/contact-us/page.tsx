import React from "react";
import ContactUs from "../components/ContactUs";

const page = () => {
  return (
    <main>
      <div className="flex flex-col">
        <img
          src="./contactUs.jpg"
          alt="image 3"
          className="h-[50vh] w-full object-cover"
        />
        <ContactUs title="Get In Touch" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7076.6849783722!2d85.42613877948662!3d27.67088198095121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1708273843366!5m2!1sen!2snp"
          width=""
          height="380"
          //   style="border:0;"
          //   allowfullscreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default page;
