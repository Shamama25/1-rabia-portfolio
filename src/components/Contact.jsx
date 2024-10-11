import React from "react";

const Contact = () => {
  return (
    <div
      className="max-w-[1400px] mx-auto bg-background sm:py-20 p-5"
      id="contact"
    >
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold leading-tight text-primary">
          Contact Me
        </h2>
      </div>

      <div className="max-w-[600px] mx-auto">
        <div className="mt-6 bg-background rounded-xl">
          <div className="p-10">
            <form
              action="https://getform.io/f/aqonxema"
              method="POST"
              className="flex justify-center items-center"
            >
              <div className="bg-white shadow-lg p-8 rounded-md w-full">
                <div className="grid grid-cols-1 gap-x-5 gap-y-4">
                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 border-2 border-gray-400 rounded-md focus:outline-none focus:border-accent transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 border-2 border-gray-400 rounded-md focus:outline-none focus:border-accent transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 border-2 border-gray-400 rounded-md focus:outline-none focus:border-accent transition-colors duration-300"
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="w-full bg-accent text-white py-3 rounded-md hover:bg-accent-dark transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
