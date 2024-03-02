import { InstagramEmbed } from "react-social-media-embed";
import { ANIMATEDTEXT18 } from "@/clientComponents/motionDiv";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CELEBRITY = () => {
  return (
    <>
      <div>
        <ANIMATEDTEXT18 />
      </div>
      <div className="p-6 pt-0 flex justify-center">
        <Link
          href="https://www.instagram.com/reel/C35Aa_6BpzM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
          className="flex justify-center w-fit"
        >
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1709362583/hr6cxocc5la3pii5knlg.png"
            alt="celebrity"
            width={500}
            height={500}
            className=" w-full md:w-[60%] rounded-[10px] md:rounded-[30px]"
          />
        </Link>
      </div>
    </>
  );
};

export default CELEBRITY;
