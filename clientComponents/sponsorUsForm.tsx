"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

import { sponsorFormFields } from "@/constant";

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
            Thankyou for being a valuable sponsor of Pravah 2024.
            <br /> Pls fill out the below form to be a part for this mega event.
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
          <div className="w-full flex justify-center">
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
