"use client";

import React, { useState } from "react";

import emailjs from "emailjs-com";
import { linkedin, whatsapp } from "@/public";

const formField = [
  {
    fieldName: "firstName",
    fieldPlaceholder: "Name",
    fieldRequired: true,
  },
  {
    fieldName: "email",
    fieldPlaceholder: "Email",
    fieldRequired: true,
  },
  {
    fieldName: "mobileNo",
    fieldPlaceholder: "Mobile Number",
    fieldRequired: true,
  },
  {
    fieldName: "whatsappNo",
    fieldPlaceholder: "WhatsApp Number",
    fieldRequired: true,
  },
  {
    fieldName: "gender",
    fieldPlaceholder: "Gender",
    fieldRequired: true,
  },
  {
    fieldName: "collegeName",
    fieldPlaceholder: "College Name",
    fieldRequired: true,
  },
  {
    fieldName: "cityofCollege",
    fieldPlaceholder: "City  of College",
    fieldRequired: true,
  },
  {
    fieldName: "yearofStudy",
    fieldPlaceholder: "Year of Study",
    fieldRequired: true,
  },
  {
    fieldName: "instagramProfile",
    fieldPlaceholder: "Instagram Profile",
    fieldRequired: true,
  },
  {
    fieldName: "linkedin",
    fieldPlaceholder: "LinkedIn Profile",
    fieldRequired: false,
  },
  {
    fieldName: "facebookProfile",
    fieldPlaceholder: "Facebook Profile",
    fieldRequired: false,
  },
  {
    fieldName: "twitterProfile",
    fieldPlaceholder: "Twitter Profile",
    fieldRequired: false,
  },
];

const CAMPUS_AMBASSADOR = () => {
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
    const mailID = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID_CA || "";
    const templateID = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID_CA || "";
    const userID = process.env.NEXT_PUBLIC_MAIL_USER_ID_CA || "";
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
      <div className="w-full min-h-screen px-[10px]">
        <div>
          <div className="text-center leading-tight  text-[28px] md:text-[42px] lg:text-[58px] font-black ">
            <span>Pravah 2024</span>
          </div>
          <div className="text-center  text-[20px] md:text-[28px] lg:text-[28px] font-bold uppercase ">
            <span>Campus Ambassador Program</span>
          </div>
          <div className="text-center font-semibold text-[15px] sm:text-[16px]">
            <span>
              Only available for non SKIT students. Students of SKIT are
              requested not to fill the form.
            </span>
          </div>
        </div>
        <form
          className="w-full flex justify-center mt-[30px]  px-[20px]"
          onSubmit={handleSubmit}
        >
          <div className="px-0 sm:px-[3%] lg:px-[10%] xl:px-[20%]">
            <div className="w-full flex flex-wrap justify-center gap-x-5 mt-[10px]">
              {formField.map((formFieldData, index) => (
                <div key={index} className="mt-2">
                  <div>
                    <span className="text-[14px] sm:text-[15px] font-semibold">
                      {formFieldData.fieldPlaceholder}
                      {formFieldData.fieldRequired === true &&
                      formData[formFieldData.fieldName] === "" ? (
                        <span className="text-red-500">&nbsp;*</span>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                  <input
                    placeholder={formFieldData.fieldPlaceholder}
                    name={formFieldData.fieldName}
                    onChange={handleInputChange}
                    value={formData[formFieldData.fieldName]}
                    required={formFieldData.fieldRequired}
                    disabled={mailStatus}
                    className={`outline-none bg-transparent mt-1  border  text-black font-medium placeholder:text-gray-500 border-black p-[10px] text-[14px] rounded-[10px]  w-[300px] md:w-[350px]  focus:bg-white  duration-200
                       `}
                    style={
                      formData[formFieldData.fieldName] === ""
                        ? {}
                        : { backgroundColor: "white" }
                    }
                  ></input>
                </div>
              ))}
            </div>
            <div className="w-full mt-[30px] flex justify-center">
              <button
                type="submit"
                className="w-[300px] md:w-[350px] px-[15px] py-[8px] rounded-[8px] bg-black text-white text-[13px] font-semibold  "
              >
                {submitButtonText}
              </button>
            </div>
          </div>
        </form>
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

export default CAMPUS_AMBASSADOR;
