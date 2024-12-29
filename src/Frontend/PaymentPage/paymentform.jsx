import React, { useState } from "react";
import { useForm } from "react-hook-form";

function PaymentForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const selectedPaymentMethod = watch("paymentMethod");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const accountDetails = {
    EasyPaisa: [
      { label: "Account Title", value: "Asghar Ali" },
      { label: "Account Number", value: "03555037329" },
    ],
    Bank: [
      { label: "Bank Name", value: "Al Baraka Bank" },
      { label: "Account Title", value: "SunGum Marriage & Catering" },
      { label: "Account Number", value: "0102659576010" },
    ],
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:p-6 p-2 space-y-6 bg-gray-100 rounded-md">
      <div>
        <label htmlFor="paymentMethod" className="font-semibold text-black block mb-2">
          Payment Method
        </label>
        <div className="space-y-2">
          {["EasyPaisa", "Bank"].map((method) => (
            <div key={method}>
              <input
                {...register("paymentMethod", { required: true })}
                type="radio"
                value={method}
                id={method}
                className="mr-2 "
              />
              <label htmlFor={method}>{method}</label>
            </div>
          ))}
          {errors.paymentMethod && (
            <div className="text-red-500 text-sm mt-1">
              Please select a payment method!
            </div>
          )}
        </div>
      </div>

      {selectedPaymentMethod && (
        <div className="mt-6 w-full">
          <h3 className="font-semibold text-sm md:text-lg mb-4">
            {selectedPaymentMethod} Account Details
          </h3>
          <table className="table-aut w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-400">
                <th className="border text-sm md:text-lg text-black border-gray-400 px-4 py-2 text-left">Field</th>
                <th className="border text-sm md:text-lg text-black border-gray-400 px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {accountDetails[selectedPaymentMethod].map((detail, index) => (
                <tr key={index}>
                  <td className="border text-sm md:text-lg bg-white text-black border-gray-400 md:px-4 md:py-2 px-2 py-2">{detail.label}</td>
                  <td className="border text-sm md:text-lg bg-white text-black border-gray-400 md:px-4 md:py-2 px-2 py-2">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </form>
  );
}

export default PaymentForm;
