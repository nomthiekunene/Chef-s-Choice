import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookF,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
    <div className=" flex flex-col bg-gray-200 justify-center items-center gap-8 pt-20 pb-10 ">
    <div className="flex gap-5">
      <Link href="/">
        <div className="bg-blue-600 h-8 w-20 flex">
          <FontAwesomeIcon icon={faFacebookF} className="text-white m-2" />
          <p className="mt-1 text-center">Like</p>
        </div>
      </Link>

      <Link href="/">
        <div className="bg-black h-8 w-20 flex">
          <FontAwesomeIcon icon={faTwitter} className="text-white m-2" />
          <p className="mt-1 text-center">Post</p>
        </div>
      </Link>

      <Link href="/">
        <div className="bg-red-600 h-8 w-20 flex">
          <FontAwesomeIcon icon={faPinterest} className="text-white m-2" />
          <p className="mt-1 text-center">Save</p>
        </div>
      </Link>

      <Link href="/">
        <div className="bg-blue-800 h-8 w-20 flex">
          <FontAwesomeIcon icon={faLinkedin} className="text-white m-2" />
          <p className="mt-1 text-center">Share</p>
        </div>
      </Link>   
    </div>


    <div className="flex text-gray-700 gap-5">
            <Link href="/contact">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <span>+263 779 112 334</span>
            </Link>
          </div>
          <div className="flex text-gray-700 gap-5">
            <Link href="/contact">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span>Chef&apos;sChoice@gmail.com</span>
            </Link>
          </div>
    </div>
    </div>
  );
};

export default Footer;
