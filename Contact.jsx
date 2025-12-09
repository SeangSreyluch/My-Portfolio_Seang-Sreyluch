import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const date = new Date();
  const formattedDate = date.toLocaleString('en-US', {
    timeZone: 'Asia/Phnom_Penh',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = import.meta.env.VITE_TELEGRAM_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;
    const USER_ID = import.meta.env.VITE_USER_ID;

    const text = `
========== Contact ==========\n
📅 <b>Date:</b> ${formattedDate}\n
🙂 <b>Name:</b> ${formData.name}\n
📧 <b>Email:</b> ${formData.email}\n
❤️ <b>Subject:</b> ${formData.subject}\n
📝 <b>Message:</b> <i>${formData.message}</i>
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parse_mode: 'HTML',
          chat_id: chatId,
          user_id: USER_ID,
          text
        })
      });

      const data = await res.json();

      if (data.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully!'
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.description || 'Failed to send message!'
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again!'
      });
    }
  };

  return (
    <section id="contact" className="bg-primary-dark py-16 border-t border-gray-900">
      <div className="container mx-auto p-8 max-w-6xl">
        
        <h2 className="mb-12 text-center text-4xl md:text-5xl font-extrabold text-text-light">
          <span className="text-accent-gold"> Get in touch</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-3">

          {/* LEFT INFO */}
          <div className="lg:col-span-1 text-text-light space-y-8">
            <h3 className="text-2xl font-semibold text-accent-gold">Contact Information</h3>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <svg className="h-6 w-6 text-accent-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <div>
                <p className="text-gray-400">Sangkat Kakap 1, Khan Por Senchey, Phnom Penh, Cambodia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <svg className="h-6 w-6 text-accent-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div>
                <p className="text-gray-400">(+855) 010 58 10 15</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <svg className="h-6 w-6 text-accent-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
              </svg>
              <div>
                <p className="text-gray-400">seangsreyluch@gmail.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-2xl font-semibold text-accent-gold">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-900 border border-gray-700 text-text-light p-3 rounded-lg focus:ring-accent-gold"
                  required
                />

                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-gray-900 border border-gray-700 text-text-light p-3 rounded-lg focus:ring-accent-gold"
                  required
                />
              </div>

              {/* Subject */}
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-gray-900 border border-gray-700 text-text-light p-3 rounded-lg focus:ring-accent-gold"
                required
              />

              {/* Message */}
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full bg-gray-900 border border-gray-700 text-text-light p-3 rounded-lg focus:ring-accent-gold"
                required
              ></textarea>

              {/* Submit */}
              <button 
                type="submit"
                className="bg-accent-gold px-8 py-3 font-bold text-primary-dark rounded-lg hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
