import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  instagram,
  youtube,
  whatsapp,
  person,
  twitter,
  facebook,
  mail,
} from "@/assets";

import { socialContact } from "@/constant";

const FOOTER = () => {
  return (
    <>
      <div className="block md:flex flex-wrap gap-5 md:justify-evenly justify-center items-start py-[50px] px-[20px]">
        <div>
          <div className="text-center">
            <span className="text-[18px] lg:text-[22px] font-bold  ">
              Get in Touch
            </span>
          </div>
          <div className="my-[10px] flex justify-center md:justify-start ">
            <ul className=" flex gap-5 md:block">
              {socialContact.map((constDetails, index) => (
                <li key={index} className="">
                  <Link href={constDetails.socialLink}>
                    <div className=" gap-3 items-center hidden md:flex">
                      <div>
                        <Image
                          src={constDetails.socialIcon}
                          alt={constDetails.socialName}
                          className="w-[24px] lg:w-[36px] aspect-square"
                        />
                      </div>
                      <div>
                        <span className="text-[14px] lg:text-[16px]">
                          {constDetails.socialName}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={constDetails.socialLink}
                    className="flex md:hidden gap-3"
                  >
                    <div>
                      <Image
                        src={constDetails.socialIcon}
                        alt={constDetails.socialName}
                        className="w-[24px] lg:w-[36px] aspect-square"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <div className=" text-center md:text-left">
            <span className="text-[18px] lg:text-[22px] font-bold">
              Reach to Us
            </span>
          </div>
          <div className="mt-[10px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11689.078745296856!2d75.86723376782382!3d26.823301100896874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db770070b115f%3A0x6f306afd08a3e737!2sSwami%20Keshvanand%20Institute%20of%20Technology%2C%20Management%20%26%20Gramothan%20(SKIT)!5e0!3m2!1sen!2sin!4v1698323305432!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full md:w-[250px] xl:w-[450px]  h-[150px] rounded-[15px]"
            ></iframe>
          </div>
        </div>
        <div className="my-[20px] md:my-0 ">
          <div className="text-center md:text-left">
            <span className="text-[18px] lg:text-[22px] font-bold ">
              Contact Us
            </span>
          </div>
          <div className="mt-[10px] flex justify-center">
            <div>
              <div>
                <Link href="/" className="flex gap-2 items-center">
                  <div>
                    <Image
                      src={person}
                      alt="person"
                      className="w-[24px] lg:w-[36px] aspect-square"
                    />
                  </div>
                  <div>
                    <span className="text-[14px] lg:text-[16px]">
                      Mr. Abhishek Gupta, <br />
                      Associate Professor, EE Department
                      <br />
                      (Chief Coordinator, PRAVAH 2024)
                    </span>
                  </div>
                </Link>
              </div>
              <div className="my-[10px]">
                <Link href="/" className="flex gap-2 items-center">
                  <div>
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      className="w-[24px] lg:w-[36px] aspect-square"
                    />
                  </div>
                  <div>
                    <span className="text-[14px] lg:text-[16px]">
                      9462326804
                    </span>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="/" className="flex gap-2 items-center">
                  <div>
                    <Image
                      src={mail}
                      alt="mail"
                      className="w-[24px] lg:w-[36px] aspect-square"
                    />
                  </div>
                  <div>
                    <span className="text-[14px] lg:text-[16px]">
                      pravah@skit.ac.in
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FOOTER;
