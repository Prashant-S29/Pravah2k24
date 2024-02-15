"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

import { sponsorFormContact, sponsorFormFields } from "@/constant";
import Image from "next/image";
import { linkedin, whatsapp } from "@/public";
import Link from "next/link";

const SPONSORUSFORM = () => {
  const [mailStatus, setMailStatus] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState("Send");

  const [formData, setFormData] = useState(
    Object.fromEntries(sponsorFormFields.map((field) => [field.fieldName, ""]))
  );

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const hideMessage = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return sponsorFormFields.every((field) => !!formData[field.fieldName]);
  };

  const resetForm = () => {
    setFormData(
      Object.fromEntries(
        sponsorFormFields.map((field) => [field.fieldName, ""])
      )
    );
  };

  const sendEmail = () => {
    const mailID = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID || "";
    const userID = process.env.NEXT_PUBLIC_MAIL_USER_ID || "";
    emailjs
      .send(mailID, templateID, formData, userID)
      .then((response) => {
        setSuccessMessage("Mail sent successfully!");
        setMailStatus(false);
        resetForm();
        setSubmitButtonText("Sending....");
        setTimeout(() => {
          hideMessage();
          setSubmitButtonText("Send");
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage("An error occurred while sending the mail.");
        setTimeout(() => {
          hideMessage();
          setMailStatus(false);
        }, 2000);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMailStatus(true);
    setSubmitButtonText("sending....");
    if (isFormValid()) {
      sendEmail();
    } else {
      setErrorMessage("Please fill out all required fields.");
    }
  };

  return (
    <>
      <div className="mx-[20px]">
        <div className="text-center text-[20px] md:text-[28px] lg:text-[32px] font-black leading-tight">
          <span>
            Please fill out the below form to be a part of Pravah{"'"}24.
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full px-0 sm:px-[100px] md:px-[150px] lg:px-[100px] xl:px-[300px] block md:flex justify-center my-[20px] gap-[30px]">
            <div className="flex flex-wrap justify-center gap-x-[20px]">
              {sponsorFormFields.map((formField, index) => (
                <div key={index} className="w-full md:w-[350px]">
                  <div className="my-[5px]">
                    <span className="font-bold text-[14px] md:text-[16px]">
                      {formField.fieldLabel}
                    </span>
                  </div>
                  {formField.fieldType === "textarea" ? (
                    <textarea
                      name={formField.fieldName}
                      placeholder={formField.fieldPlaceholder}
                      value={formData[formField.fieldName]}
                      onChange={handleInputChange}
                      required
                      disabled={mailStatus}
                      // {mailStatus && dis}
                      className={`outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full  h-[100px] focus:bg-white  duration-200
                       `}
                      style={
                        formData[formField.fieldName] === ""
                          ? {}
                          : { backgroundColor: "white" }
                      }
                    ></textarea>
                  ) : formField.fieldType === "dropdown" ? (
                    <select
                      name={formField.fieldName}
                      onChange={handleInputChange}
                      disabled={mailStatus}
                      className={`outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] 
                      rounded-[10px] placeholder:text-black w-full focus:bg-white  duration-200 cursor-none 
                     `}
                    >
                      <option value="select">Select</option>
                      <option value="Monetary">Monetary</option>
                      <option value="Non Monetary">Non Monetary</option>
                    </select>
                  ) : (
                    <input
                      type={formField.fieldType}
                      name={formField.fieldName}
                      placeholder={formField.fieldPlaceholder}
                      value={formData[formField.fieldName]}
                      onChange={handleInputChange}
                      required
                      disabled={mailStatus}
                      className={`outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full focus:bg-white  duration-200  `}
                      style={
                        formData[formField.fieldName] === ""
                          ? {}
                          : { backgroundColor: "white" }
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full my-[20px] flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid()}
              className=" px-[15px] py-[8px] rounded-[8px] text-white text-[14px] font-medium uppercase cursor-none  "
              style={
                isFormValid()
                  ? {
                      backgroundColor: "black",
                    }
                  : {
                      backgroundColor: "grey",
                    }
              }
            >
              {submitButtonText}
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="font-semibold">For more information contact</span>
        </div>
        <div className="flex flex-wrap mt-[10px] justify-center gap-[20px]">
          <div className="flex flex-wrap justify-evenly w-full text-center mt-[10px] gap-y-[30px]">
            {sponsorFormContact.map((details, index) => (
              <div
                key={index}
                className="p-[15px] border border-black rounded-[15px] w-[300px] bg-white"
              >
                <div>
                  <span className="font-bold">{details.memberName}</span>
                </div>
                <div className="leading-tight">
                  <span className="text-[15px] ">{details.memberPhone}</span>
                </div>
                <div className="leading-tight">
                  <span className="text-[14px] ">Sponsor Committee</span>
                </div>
                <div className="w-full flex justify-center gap-[30px] mt-[10px]  -mb-[35px]">
                  <div className="p-[8px] rounded-full w-fit flex justify-center bg-black ">
                    <Link
                      href={`https://wa.me/91${details.memberPhone}`}
                      target="_blank"
                    >
                      <Image
                        src={whatsapp}
                        alt="whatsapp"
                        className="w-[20px] aspect-square"
                      />
                    </Link>
                  </div>
                  <div className="p-[7px] rounded-full w-fit flex justify-center bg-black ">
                    <Link href={details.memberLinkedIn} target="_blank">
                      <Image
                        src={linkedin}
                        alt="linkedin"
                        className="w-[21px] aspect-square"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {successMessage && (
          <div className="message-container">
            <div className="success-message">{successMessage}</div>
          </div>
        )}
        {errorMessage && (
          <div className="message-container">
            <div className="error-message">{errorMessage}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SPONSORUSFORM;
