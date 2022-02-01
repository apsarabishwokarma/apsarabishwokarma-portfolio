"use client";
import { contactSchema } from "@/lib/validations/contact";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";

const ContactMe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>();

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        toast.success(
          data?.message ?? "Email has been sent. I will soon get back to you."
        );
      })
      .catch((error) => {
        toast.error(error?.message ?? "Failed to send email.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <section id="contact-me" className="py-12">
      <div className="container mx-auto">
        <p className="mt-6 max-w-7xl mb-8 mx-auto w-full text-neutral-400">
          contact me
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 shadow-md rounded-md text-white">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="mb-4">
              Feel free to contact me for any inquiries or collaborations.
              Always available for freelancing if the right project comes along.
            </p>
            <ul className="space-y-4 items-center justify-center">
              <div>
                <a
                  href="https://www.google.com/maps/place/Tukuche/"
                  target="_blank"
                >
                  <li className="flex items-center space-x-2">
                    <FaLocationDot size={20} color="gray" className="mr-2" />
                    <span>Thasang-01 , Tukuche Mustang , Nepal</span>
                  </li>
                </a>
              </div>
              <div>
                <a href="mailto:apsarabk94@gmail.com" target="_blank">
                  <li className="flex items-center space-x-2">
                    <MdOutlineMailOutline
                      size={20}
                      color="gray"
                      className="mr-2"
                    />
                    <span>apsarabk94@gmail.com</span>
                  </li>
                </a>
              </div>
              <div>
                <a href="tel:977+ 9867625026" target="_blank">
                  <li className="flex items-center space-x-2">
                    <FaPhone size={20} color="gray" className="mr-2" />
                    <span>+977 9867625026</span>
                  </li>
                </a>
              </div>
            </ul>
          </div>

          <div className="p-6 bg-transparent shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                />
                <textarea
                  placeholder="Message"
                  {...register("body")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                ></textarea>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full border bg-transparent border-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
