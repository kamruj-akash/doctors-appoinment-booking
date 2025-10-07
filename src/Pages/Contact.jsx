import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Have questions or need help? Reach out to us through any of the
        following channels.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-xl text-blue-600" />
            <span>support@doctorsplatform.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaPhoneAlt className="text-xl text-blue-600" />
            <span>+880 1234 567 890</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-xl text-blue-600" />
            <span>123, Dhaka Medical Road, Dhaka, Bangladesh</span>
          </div>
        </div>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full border rounded py-2 px-3 text-gray-700"
            ></textarea>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
