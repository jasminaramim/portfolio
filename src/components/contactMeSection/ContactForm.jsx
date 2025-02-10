import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = () => {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:your-email@example.com?subject=New Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-white mb-4">Contact Me</h2>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="input input-bordered w-full"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="input input-bordered w-full"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="textarea textarea-bordered w-full"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          onClick={handleSendEmail}
          className="btn btn-primary w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
