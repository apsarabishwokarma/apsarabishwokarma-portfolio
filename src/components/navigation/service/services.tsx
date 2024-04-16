import React from "react";
import { FaBlogger } from "react-icons/fa";
import { FaCamera, FaCode, FaFile, FaMobile, FaVideo } from "react-icons/fa6";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
  return (
    <section className="text-white py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">My Services</h2>
        <p className="text-center text-lg mb-10">
          These are some of the services I offer. Reach out to me if I can help
          you with any!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Web Development"
            description="Crafting responsive and user-friendly websites using modern technologies like React.js, Vue.js, or Angular."
            icon={<FaCode size={40} />}
          />
          <ServiceCard
            title="App Development"
            description="Building native and cross-platform mobile applications for iOS and Android platforms with frameworks like React Native or Flutter."
            icon={<FaMobile size={40} />}
          />
          <ServiceCard
            title="Blog Posting"
            description="Creating engaging and SEO-friendly blog posts tailored to your audience and industry niche."
            icon={<FaBlogger size={40} />}
          />
          <ServiceCard
            title="Content Writing"
            description="Producing high-quality written content for websites, blogs, articles, social media, and more."
            icon={<FaFile size={40} />}
          />
          <ServiceCard
            title="Photography"
            description="Capturing stunning photographs that showcase your products, events, or lifestyle in the best light."
            icon={<FaCamera size={40} />}
          />
          <ServiceCard
            title="Video Editing"
            description="Editing professional-quality videos that tell your story, promote your brand, or highlight your products and services."
            icon={<FaVideo size={40} />}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  return (
    <div className=" bg-gray-700 shadow-md p-6 rounded-lg flex flex-col items-center">
      {icon}
      <h3 className="text-xl font-semibold m-4">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Services;
