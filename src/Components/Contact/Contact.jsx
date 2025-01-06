import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Successfully Sent");

            // Reset the form after success
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Failed to send. Please try again.");
          }
        );
    };

    return (
      <div id="contact" className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Contact Us for More Details
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-8 lg:items-center">
            {/* Contact Form */}
            <div className="md:w-1/2">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">
                Follow Us on Social Media
              </h3>
              <p className="text-gray-400 mb-6">
                Stay updated with our latest game reviews, news, and more!
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <a
                  href="https://twitter.com/jyoti_prokash20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-2xl"
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  href="https://www.facebook.com/jyotiprokashchakma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-600 text-2xl"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://www.youtube.com/@progamerkash9114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-2xl"
                >
                  <FaYoutube></FaYoutube>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;