import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { social } from "../constants";
import { styles } from "../styles";
import { RickCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const isValidName = (name) => name.trim().length >= 2;
  
  const isValidMessage = (msg) => msg.trim().length >= 10;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, message } = form;
  
    if (!name || !email || !message) {
      toast.warn("Lütfen tüm alanları doldurun!");
      return;
    }
  
    if (!isValidName(name)) {
      toast.warn("İsmin en az 2 karakter olmalı.");
      return;
    }
  
    if (!isValidEmail(email)) {
      toast.warn("Geçerli bir e-posta adresi girin!");
      return;
    }
  
    if (!isValidMessage(message)) {
      toast.warn("Mesajın en az 10 karakter olmalı.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch("https://formspree.io/f/xnnpddyg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        setLoading(false);
        toast.success("Mesaj başarıyla gönderildi!");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };
  
  

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "twen", 0.2, 1)}
        className="flex-[0.75] bg-[#81848f] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-primary py-4 px-6 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-primary py-4 px-6 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-primary py-4 px-6 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex">
            <button
              type="submit"
              className="bg-primary py-3 px-8 outline-none w-fit text-tertiary font-bold shadow-md shadow-secondary hover:opacity-80 transition-all duration-200 rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <div className="flex xl:ml-36 ml-4 gap-2">
              {social.map((link, index) => (
                <a href={link.link} key={index}>
                  <img
                    src={link.image}
                    alt={link.name}
                    width={45}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "twen", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <RickCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
