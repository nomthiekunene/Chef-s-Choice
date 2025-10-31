"use client";

import React from 'react'
import Link from "next/link";
import { useSession } from 'next-auth/react';

const Choice = () => {
    const { data: session, status } = useSession();

  return (
    <div className="flex flex-col gap-14 p-20 relative text-white bg-[url('https://res.cloudinary.com/dwffjbibo/image/upload/v1761831627/pexels-delot-19599328_unbszh.jpg')] bg-cover bg-center bg-[#00000060] bg-blend-overlay -z-20 h-10/12">
      <h4 className="text-2xl mt-10  p-4 w-3/5">
        {status === 'authenticated'
          ? `Welcome back, ${session?.user?.name}! Your ultimate destination for high-quality kitchenware at unbeatable prices.`
          : "Your ultimate destination for high-quality kitchenware at unbeatable prices. Explore our vast selection and elevate your culinary experience."
        }
      </h4>
      <h1 className="text-4xl">Welcome to Chef&apos;s Choice</h1>
      <button className="h-16 w-40 bg-white text-black text-2xl hover:bg-blue-200 transition-colors">
        <Link href="/shop">
          Shop Now
        </Link>
      </button>
    </div>
  )
}

export default Choice
