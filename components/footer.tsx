import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  pravah2024,
  help_icon,
  contact_icon,
  reachus_icon,
  quicklink_icon,
  instagram,
  twitter,
  facebook,
  whatsapp,
  youtube,
} from "@/public";

const FOOTER = () => {
  return (
    <>
      <div
        className="w-full p-[20px] sm:p-[40px] pb-0 sm:pb-0 mt-[30px] bg-black text-white "
        data-cursor-exclusion
      >
        <div className="block sm:flex justify-evenly my-[20px] xl:hidden">
          <div className="flex gap-3 items-center xl:hidden justify-center ">
            <div>
              <Image src={pravah2024} alt="pravah2024" className="w-[80px]" />
            </div>
            <div>
              <div className="leading-none">
                <button className="text-[26px] font-bold ">
                  Pravah{"'"}24
                </button>
              </div>
              <div className="leading-tight">
                <button className="text-[13px] sm:text-[14px] ">
                  SKIT, Jaipur
                </button>
              </div>
            </div>
          </div>
          <div className="flex xl:hidden justify-center items-center my-[10px] ">
            <div className="p-[5px]">
              <button>
                <Link
                  href="https://www.instagram.com/skitpravah/"
                  target="_blank"
                >
                  <Image
                    src={instagram}
                    alt="instagram"
                    className="w-[25px] aspect-square"
                  />
                </Link>
              </button>
            </div>
            <div className="p-[5px]">
              <button>
                <Link href="https://twitter.com/@pravah_skit" target="_blank">
                  <Image
                    src={twitter}
                    alt="twitter"
                    className="w-[25px] aspect-square"
                  />
                </Link>
              </button>
            </div>
            <div className="p-[5px]">
              <button>
                <Link href="https://www.facebook.com/pravah2016" target="_blank">
                  <Image
                    src={facebook}
                    alt="facebook"
                    className="w-[25px] aspect-square"
                  />
                </Link>
              </button>
            </div>
            <div className="p-[5px]">
              <button>
                <Link
                  href="https://www.youtube.com/@skitpravah4946"
                  target="_blank"
                >
                  <Image
                    src={youtube}
                    alt="youtube"
                    className="w-[25px] aspect-square"
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  block sm:flex text-center sm:text-left justify-evenly flex-wrap  gap-[60px] items-start   ">
          <div className="hidden gap-3 items-center xl:flex">
            <div>
              <Image src={pravah2024} alt="pravah2024" className="w-[80px]" />
            </div>
            <div>
              <div className="leading-none">
                <button className="text-[26px] font-bold ">
                  Pravah{"'"}24
                </button>
              </div>
              <div className="leading-tight">
                <button className="text-[13px] sm:text-[14px] ">
                  SKIT, Jaipur
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center w-full">
              <div className="">
                <button className="font-bold flex justify-center  items-center">
                  <div>
                    <div className="-ml-[30px] -rotate-45">
                      <Image
                        src={quicklink_icon}
                        alt="quicklink"
                        className="w-[20px] sm:w-[25px]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[15px] sm:text-[16px]">
                      Quick Links
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-[10px] text-[13px] sm:text-[14px] text-[#b8b8b8]">
              <ul>
                <li className="mt-[5px]">
                  <Link href="/team">
                    <div>
                      <button>Team Pravah</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link href="/aaveg">
                    <div>
                      <button>AAVEG</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link href="/events">
                    <div>
                      <button>Events</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link href="/sponsor">
                    <div>
                      <button>Sponsor Us</button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="w-full flex sm:block justify-center mt-[20px] sm:mt-0">
              <div>
                <button className="font-bold flex  items-center">
                  <div>
                    <div className="-ml-[30px]">
                      <Image
                        src={help_icon}
                        alt="helpicon"
                        className="w-[20px] sm:w-[25px]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[15px] sm:text-[16px]">
                      Help Desk and Queries
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-[10px] text-[13px] sm:text-[14px] text-[#b8b8b8]">
              <ul>
                <li className="mt-[5px]">
                  <Link href="/websiteHelpDesk">
                    <div>
                      <button>Website Help Desk</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link href="/eventHelpDesk">
                    <div>
                      <button>Events Help Desk</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link href="/accomodation">
                    <div>
                      <button>Accomodation Queries</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link href="/bugReport">
                    <div>
                      <button>Bug Report</button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="">
              <div>
                <button className="font-bold flex  items-center">
                  <div>
                    <div className="-ml-[30px]">
                      <Image
                        src={reachus_icon}
                        alt="reachusLogo"
                        className="w-[20px] sm:w-[25px]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[15px] sm:text-[16px]">Reach Us</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-[10px] text-[13px] sm:text-[14px] text-[#b8b8b8]">
              <ul>
                <li className="mt-[5px]">
                  <Link
                    href="https://www.instagram.com/skitpravah/"
                    target="_blank"
                  >
                    <div>
                      <button>Instagram</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link
                    href="https://www.facebook.com/pravah.skit?mibextid=rS40aB7S9Ucbxw6v"
                    target="_blank"
                  >
                    <div>
                      <button>Facebook</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link href="https://twitter.com/@pravah_skit" target="_blank">
                    <div>
                      <button>Twitter</button>
                    </div>
                  </Link>
                </li>
                <li className="mt-[5px]">
                  <Link
                    href="https://www.youtube.com/@skitpravah4946"
                    target="_blank"
                  >
                    <div>
                      <button>Youtube</button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="w-full flex sm:block justify-center mt-[20px] sm:mt-0">
              <div>
                <button className="font-bold flex  items-center">
                  <div>
                    <div className="-ml-[30px] ">
                      <Image
                        src={contact_icon}
                        alt="contact_icon"
                        className="w-[20px] sm:w-[25px]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[15px] sm:text-[16px]">
                      Contact Us
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="text-[#b8b8b8]">
              <div className=" mt-[5px]">
                <div>
                  <span className="text-[13px] font-semibold">
                    Chief Coordinator, Pravah{"'"}24
                  </span>
                </div>
                <div className="leading-none text-[13px] sm:text-[14px]">
                  <Link href="https://wa.me/9462326804" target="_blank">
                    <button>
                      Mr. Abhishek Gupta - <u>9462326804</u>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-[5px]">
                <div>
                  <span className="text-[13px] font-semibold">
                    Event Quires
                  </span>
                </div>
                <div className="leading-none text-[13px] sm:text-[14px]">
                  <Link href="https://wa.me/9929425337" target="_blank">
                    <button>
                      Paridhi Jain - <u>9929425337</u>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-[5px]">
                <div>
                  <span className="text-[13px] font-semibold">
                    Website Head
                  </span>
                </div>
                <div className="leading-none text-[13px] sm:text-[14px]">
                  <Link href="https://wa.me/7976227748" target="_blank">
                    <button>
                      Chinmay Bhatnagar - <u>7976227748</u>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.2px] bg-[#424242] my-[10px]" />
        <div className="text-center pb-[10px] text-[12px] text-[#b8b8b8] sm:text-[13px]">
          <Link href="https://skit.ac.in" target="_blank">
            <div className=" ">
              <button>Copyright &copy; SKIT, Jaipur</button>
            </div>
          </Link>
          <div>
            Made with ❤️ by{" "}
            <Link href="/webTeam">
              <button className="text-[#359aff] font-semibold">
                Pravah Web Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FOOTER;
