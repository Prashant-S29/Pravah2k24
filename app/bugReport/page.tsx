"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import emailjs from "emailjs-com";

import { linkedin, whatsapp } from "@/public";

const formField = [
  {
    fieldName: "bugDesc",
    fieldPlaceholder: "Describe bug",
    fieldType: "textbox",
  },
  {
    fieldName: "bugLocation",
    fieldPlaceholder: "Bug location",
    fieldType: "input",
  },
];
const BUG_REPORT = () => {
  const [formData, setFormData] = useState(
    Object.fromEntries(formField.map((field) => [field.fieldName, ""]))
  );

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailStatus, setMailStatus] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState("Send");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const hideMessage = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const resetForm = () => {
    setFormData(
      Object.fromEntries(formField.map((field) => [field.fieldName, ""]))
    );
  };
  const isFormValid = () => {
    return !!formData;
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
          setSubmitButtonText("Send");
        }, 2000);
        resetForm();
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
      <div className="w-full min-h-[70vh] flex justify-center items-center">
        <div className="w-full">
          <div className="text-center text-[32px] md:text-[28px] lg:text-[46px] font-black leading-none">
            <span>Pravah 2024</span>
          </div>
          <div className="text-center text-[14px] md:text-[16px] lg:text-[18px] font-black uppercase leading-tight">
            <span>Website Bug Report</span>
          </div>
          <form
            className="w-full flex justify-center  px-[20px]"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="w-full md:w-[350px] mt-[10px]">
                {formField.map((formFieldData, index) => (
                  <>
                    {formFieldData.fieldType === "textbox" ? (
                      <div key={index}>
                        <textarea
                          placeholder={formFieldData.fieldPlaceholder}
                          name={formFieldData.fieldName}
                          onChange={handleInputChange}
                          value={formData[formFieldData.fieldName]}
                          required
                          disabled={mailStatus}
                          className={`outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full  h-[100px] focus:bg-white  duration-200
                       `}
                          style={
                            formData[formFieldData.fieldName] === ""
                              ? {}
                              : { backgroundColor: "white" }
                          }
                        ></textarea>
                      </div>
                    ) : (
                      <div key={index}>
                        <input
                          placeholder={formFieldData.fieldPlaceholder}
                          name={formFieldData.fieldName}
                          onChange={handleInputChange}
                          value={formData[formFieldData.fieldName]}
                          required
                          disabled={mailStatus}
                          className={`outline-none bg-transparent border  text-black font-medium border-black p-[10px] text-[14px] rounded-[10px] placeholder:text-black w-full  focus:bg-white  duration-200
                       `}
                          style={
                            formData[formFieldData.fieldName] === ""
                              ? {}
                              : { backgroundColor: "white" }
                          }
                        ></input>
                      </div>
                    )}
                  </>
                ))}
              </div>
              <div className="w-full md:w-[350px] mt-[10px] flex justify-center">
                <button
                  type="submit"
                  className="w-full px-[15px] py-[8px] rounded-[8px] bg-black text-white text-[13px] font-semibold  "
                >
                  {submitButtonText}
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center mt-[20px]">
            <div className="p-[15px] border border-black rounded-[15px] text-center w-[300px] bg-white">
              <div>
                <span className="font-bold">Chinmay Bhatnagar</span>
              </div>
              <div className="leading-tight">
                <span className="text-[15px] ">7976227748</span>
              </div>
              <div className="leading-tight">
                <span className="text-[14px] ">Website Committee Head</span>
              </div>
              <div className="w-full flex justify-center gap-[30px] mt-[10px]  -mb-[35px]">
                <div className="p-[8px] rounded-full w-fit flex justify-center bg-black ">
                  <Link href="https://wa.me/7976227748" target="_blank">
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      className="w-[20px] aspect-square"
                    />
                  </Link>
                </div>
                <div className="p-[7px] rounded-full w-fit flex justify-center bg-black ">
                  <Link
                    href="https://www.linkedin.com/in/chinmay-bhatnagar-4140a424a/"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="w-[21px] aspect-square"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default BUG_REPORT;
