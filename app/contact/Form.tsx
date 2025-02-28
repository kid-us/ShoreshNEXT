"use client";

import ErrorMessage from "../components/ErrorMessage";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().email({ message: "Email address required" }),
  location: z.string().min(3, { message: "Location required" }),
  address: z.string().min(3, { message: "Address required" }),
  message: z.string().min(10, { message: "Message required" }),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   On Form submit
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="lg:col-span-2 lg:mt-0 mt-8">
      <p className="text-lg mb-5 text-gray-800">
        Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm text-gray-600">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="px-5 w-full h-13 rounded-lg mt-2 focus:outline-none border border-gray-500"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>

        {/* Location */}
        <div className="mb-3">
          <label htmlFor="location" className="block text-sm text-gray-600">
            Location
          </label>
          <input
            {...register("location")}
            type="location"
            name="location"
            className="px-5 w-full h-13 rounded-lg mt-2 focus:outline-none border border-gray-500"
          />
          <ErrorMessage>{errors.location?.message}</ErrorMessage>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="block text-sm text-gray-600">
            Address
          </label>
          <input
            {...register("address")}
            type="text"
            name="address"
            className="px-5 w-full h-13 rounded-lg mt-2 focus:outline-none border border-gray-500"
          />
          <ErrorMessage>{errors.address?.message}</ErrorMessage>
        </div>

        {/* Message */}
        <div className="">
          <label htmlFor="message" className="block text-sm text-gray-600">
            Message
          </label>
          <textarea
            {...register("message")}
            name="message"
            id="message"
            className="px-5 w-full rounded-lg mt-2 focus:outline-none border border-gray-400 resize-none h-44"
          ></textarea>
          <ErrorMessage>{errors.message?.message}</ErrorMessage>
        </div>

        <button className="bg-secondary font-semibold uppercase text-white transition-all duration-200 shadow-[3px_3px_0px_black] hover:shadow-none h-11 active:shadow-none rounded w-full mt-8">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
