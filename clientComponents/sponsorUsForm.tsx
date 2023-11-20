"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

import { sponsorFormContact, sponsorFormFields } from "@/constant";
import Image from "next/image";
import { contact_icon, instagram, jashan, jassigill, linkedin } from "@/assets";
import Link from "next/link";

const SPONSORUSFORM = () => {
  const [formData, setFormData] = useState(
    Object.fromEntries(sponsorFormFields.map((field) => [field.fieldName, ""]))
  );

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const hideMessage = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleInputChange = (e) => {
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
    emailjs
      .send(
        "service_kewqlt8",
        "template_4ysfsv1",
        formData,
        "j8BVPFwHK0CqY3uvy"
      )
      .then((response) => {
        setSuccessMessage("Mail sent successfully!");
        resetForm();
        setTimeout(() => {
          hideMessage();
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage("An error occurred while sending the mail.");
        setTimeout(() => {
          hideMessage();
        }, 2000);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      sendEmail();
      resetForm();
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
          <div className="w-full block md:flex justify-center my-[20px] gap-[30px]">
            <div>
              {sponsorFormFields
                .slice(0, Math.ceil(sponsorFormFields.length / 2))
                .map((formField, index) => (
                  <div key={index} className="w-full md:w-[350px]">
                    <div className="mt-[15px] mb-[5px]">
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
                        className="outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full  h-[100px] focus:bg-white  duration-200 "
                        style={
                          formData[formField.fieldName] === ""
                            ? {}
                            : { backgroundColor: "white" }
                        }
                      ></textarea>
                    ) : (
                      <input
                        type="text"
                        name={formField.fieldName}
                        placeholder={formField.fieldPlaceholder}
                        value={formData[formField.fieldName]}
                        onChange={handleInputChange}
                        required
                        className="outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full focus:bg-white  duration-200 "
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
            <div>
              {sponsorFormFields
                .slice(Math.ceil(sponsorFormFields.length / 2))
                .map((formField, index) => (
                  <div key={index} className="w-full md:w-[350px]">
                    <div className="mt-[15px] mb-[5px]">
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
                        className="outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full h-[100px] focus:bg-white  duration-200 "
                        style={
                          formData[formField.fieldName] === ""
                            ? {}
                            : { backgroundColor: "white" }
                        }
                      ></textarea>
                    ) : (
                      <input
                        type="text"
                        name={formField.fieldName}
                        placeholder={formField.fieldPlaceholder}
                        value={formData[formField.fieldName]}
                        onChange={handleInputChange}
                        required
                        className="outline-none bg-transparent  border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full focus:bg-white  duration-200 "
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
              Submit
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
                <div>
                  <span>Sponsor Committee</span>
                </div>
                <div className="w-full flex justify-center gap-[30px] mt-[10px]  -mb-[35px]">
                  <div className="p-[8px] rounded-full w-fit flex justify-center bg-black ">
                    <Image
                      src={contact_icon}
                      alt="contact_icon"
                      className="w-[20px] aspect-square"
                    />
                  </div>
                  <div className="p-[7px] rounded-full w-fit flex justify-center bg-black ">
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="w-[21px] aspect-square"
                    />
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
