import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactMe = () => {
  return (
    <section id="contact-me" className="py-12">
      <p className="mt-6 max-w-7xl mb-8 mx-auto w-full text-neutral-400">
        contact me
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 shadow-md rounded-md text-white">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="mb-4">
              Feel free to contact me for any inquiries or collaborations.
              Always available for freelancing if the right project comes along.
            </p>
            <ul className="space-y-4">
              <a href="https://www.google.com/maps/place/Tukuche/@28.7334974,83.6443616,12z/data=!3m1!4b1!4m6!3m5!1s0x39be062808f5a387:0xc37123e14b6bc478!8m2!3d28.7768018!4d83.570964!16s%2Fm%2F04q3tlq?entry=ttu">
                <li className="flex items-center space-x-2">
                  <FaLocationDot size={20} color="gray" />
                  <span>Thasang-01 , Tukuche Mustang , Nepal</span>
                </li>
              </a>
              <li className="flex items-center space-x-2">
                <MdOutlineMailOutline size={20} color="gray" />
                <span>apsarabk94@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone size={20} color="gray" />
                <span>+977 9867625026</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-transparent shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Contact Form
            </h2>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                />
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-white"
                ></textarea>
                <button
                  type="submit"
                  className="w-full border bg-transparent border-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Send Message
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
