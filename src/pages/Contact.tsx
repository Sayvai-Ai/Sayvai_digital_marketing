// src/pages/Contact.tsx
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion, Variants, easeOut } from 'framer-motion';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.message) newErrors.message = true;
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .send(
          'service_8069a0s',
          'template_dd1e1sb',
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
            
          },
          '6AlXQybd97DbHWsKw'
        )
        .then(() => {
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        })
        .catch((err) => alert('Failed to send: ' + err.text));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    btn.style.transform = `translate(${offsetX * 0.15}px, ${offsetY * 0.15}px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.style.transform = `translate(0px, 0px) scale(1)`;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } }
  };

  const inputClass = (field: string) =>
    `w-full px-4 pt-6 pb-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
     transition-all duration-300 border-gray-300 dark:border-gray-700 focus:outline-none
     focus:border-[#00C0A3] dark:focus:border-[#3ABEF9]
     focus:ring-4 focus:ring-[#00C0A3]/40 dark:focus:ring-[#3ABEF9]/40
     focus:shadow-[0_0_10px_#00C0A3] dark:focus:shadow-[0_0_10px_#3ABEF9]
     ${errors[field] ? 'border-red-500 focus:ring-red-500/40 focus:shadow-[0_0_10px_red]' : ''}`;

  const textareaClass = (field: string) =>
    `w-full px-4 pt-8 pb-2 border rounded-lg resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
     transition-all duration-300 border-gray-300 dark:border-gray-700 focus:outline-none
     focus:border-[#00C0A3] dark:focus:border-[#3ABEF9]
     focus:ring-4 focus:ring-[#00C0A3]/40 dark:focus:ring-[#3ABEF9]/40
     focus:shadow-[0_0_10px_#00C0A3] dark:focus:shadow-[0_0_10px_#3ABEF9]
     ${errors[field] ? 'border-red-500 focus:ring-red-500/40 focus:shadow-[0_0_10px_red]' : ''}`;

  return (
    <div className="pt-20 relative z-10">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://t3.ftcdn.net/jpg/02/04/95/58/360_F_204955866_V7qsvrM9equd404KRYBolNLCLl1Baxzv.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact and communication"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A41]/85 to-[#00C0A3]/75 dark:from-[#1B2A41]/95 dark:to-[#00C0A3]/90"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="water-ripple"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-[#3ABEF9]">Connect</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-pulse opacity-5 w-full h-full bg-[radial-gradient(circle,rgba(0,192,163,0.2)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(0,192,163,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <h2 className="text-3xl font-bold text-[#1B2A41] dark:text-white mb-8">Get In Touch</h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="mb-6 p-4 bg-[#00C0A3]/10 dark:bg-[#00C0A3]/20 border border-[#00C0A3] rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#00C0A3]" />
                  <span className="text-[#00C0A3] font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                  {['name', 'email'].map((field) => (
                    <motion.div
                      key={field}
                      variants={fieldVariants}
                      animate={errors[field] ? { x: [0, -6, 6, -6, 0] } : {}}
                      transition={{ duration: 0.4 }}
                      className="form-group relative"
                    >
                      <label
                        className={`absolute left-4 top-3 text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 ${
                          formData[field as keyof typeof formData]
                            ? 'text-xs -top-2 bg-white dark:bg-gray-900 px-1 text-[#00C0A3] dark:text-[#3ABEF9] z-10'
                            : ''
                        }`}
                      >
                        {field === 'name' ? 'Full Name' : 'Email Address'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className={inputClass(field)}
                        required
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Phone */}
                <motion.div variants={fieldVariants} className="form-group relative">
                  <label
                    className={`absolute left-4 top-3 text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 ${
                      formData.phone
                        ? 'text-xs -top-2 bg-white dark:bg-gray-900 px-1 text-[#00C0A3] dark:text-[#3ABEF9] z-10'
                        : ''
                    }`}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                  />
                </motion.div>

                {/* Message */}
                                {/* Message */}
                <motion.div
                  variants={fieldVariants}
                  className="form-group relative"
                >
                  <label
                    className={`absolute left-4 top-3 text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 ${
                      formData.message
                        ? 'text-xs -top-2 bg-white dark:bg-gray-900 px-1 text-[#00C0A3] dark:text-[#3ABEF9] z-10'
                        : ''
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={textareaClass('message')}
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={fieldVariants} className="pt-2">
                  <button
                    ref={buttonRef}
                    type="submit"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    disabled={!isFormValid}
                    className={`w-full py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 ${
                      isFormValid
                        ? 'bg-[#00C0A3] hover:bg-[#00a98e] text-white shadow-lg hover:shadow-xl active:scale-95 cursor-pointer dark:bg-[#3ABEF9] dark:hover:bg-[#2aa3e8]'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Send Message
                  </button>
                </motion.div>

              </form>
              {/* ===== After Contact - What We Do ===== */}
<motion.div
  className="mt-12 p-6 bg-[#f0fdf4] dark:bg-gray-800 rounded-lg shadow-lg space-y-4"
  variants={fieldVariants}
>
  <h3 className="text-2xl font-bold text-[#1B2A41] dark:text-white mb-4">
    After You Contact Us
  </h3>

  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
    <li>We review your message and understand your business needs thoroughly.</li>
    <li>Our team reaches out to schedule a consultation or provide clarifications.</li>
    <li>We suggest tailored strategies to enhance your digital presence.</li>
    <li>We prepare a detailed plan, including timelines and expected outcomes.</li>
    <li>Once approved, we start implementing solutions to achieve your goals.</li>
  </ul>
</motion.div>

            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1B2A41] dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Have questions or want to discuss a project? We'd love to hear from you. 
                  Fill out the form or reach out directly using the contact details below.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'info.sayvai@gmail.com',
                    link: 'mailto:info.sayvai@gmail.com'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    content: '+91 82204 86198',
                    link: 'tel:+91 82204 86198'
                  },
                  {
                    icon: MapPin,
                    title: 'Visit Us',
                    content: 'Sayvai Software LLP, CIT Campus, Coimbatore-641013.',
                    link: 'https://www.google.com/maps/place/SAYVAI+SOFTWARE/@11.0291559,77.0274262,17z',
                    isExternal: true
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-[#00C0A3]/10 dark:bg-[#00C0A3]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C0A3] group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-[#00C0A3] dark:text-[#00C0A3] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.isExternal ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-[#00C0A3] dark:hover:text-[#00C0A3] transition-colors duration-300 whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Business Hours
                </h4>
                <ul className="space-y-2">
                  {[
                    'Monday - Friday: 9:00 AM - 6:00 PM',
                    'Saturday: 10:00 AM - 4:00 PM',
                    'Sunday: Closed'
                  ].map((time, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#00C0A3] rounded-full mr-3"></div>
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
              

              <div className="pt-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Find Us on Map
                </h4>
                <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1234567890123!2d77.025238!3d11.0291559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8578ebd3ec667%3A0x58f72394e744bb76!2sSayvai%20Software%20LLP!5e0!3m2!1sen!2sin!4v1694362345678!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

