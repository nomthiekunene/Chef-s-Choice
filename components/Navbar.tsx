"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="absolute z-0 bg-[#dedede00]">
      <div className="flex gap-9 items-end justify-end bg-[#382a2a2c] w-full h-7 text-center">
        <div className="flex gap-8 text-white ml-[50rem]">
          <div className="flex">
            <Link href="/contact">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <span>+263 779 112 334</span>
            </Link>
          </div>
          <div className="flex">
            <Link href="/contact">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span>Chef&apos;sChoice@gmail.com</span>
            </Link>
          </div>
        </div>
        {status === "authenticated" ? (
          <div className="flex gap-4 items-center">
            <span className="text-white">Welcome, {session.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-4 pr-10">
            <Link href="/signin" className="text-white hover:underline">
              <FontAwesomeIcon icon={faUser} size="lg" /> Sign In
            </Link>
          </div>
        )}
      </div>
      <div className="flex gap-10 text-white text-2xl mt-10 pl-24 ">
        <Link href="/">
          <h1 className="text-blue-600 text-4xl">Chef&apos;s Choice</h1>
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/shop" className="hover:text-blue-400 hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-400 hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-400 hover:underline"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
