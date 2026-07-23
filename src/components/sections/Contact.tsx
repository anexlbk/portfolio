import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { slideIn } from "../../utils/motion";
import StarsCanvas from "../canvas/Stars";
import EarthCanvas from "../canvas/Earth";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: form.name,
          to_name: "Anes",
          from_email: form.email,
          to_email: "anes@example.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_ACCESS_TOKEN ?? ""
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="relative" id="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1)}
          className="flex-[0.75] glass-card p-8 rounded-2xl"
        >
          <SectionHeading
            subText="Get in touch"
            headText="Contact."
          />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <p className="text-tech-accent text-xl font-spaceGrotesk font-bold mb-2">
                Thank you!
              </p>
              <p className="text-secondary text-sm font-manrope">
                Your message has been sent. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <label className="flex flex-col">
                <span className="text-white text-sm font-medium font-manrope mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-tertiary/50 border border-white/10 py-3 px-4 rounded-lg text-white placeholder-secondary/50 text-sm font-manrope focus:border-tech-accent/50 focus:border transition-colors"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white text-sm font-medium font-manrope mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-tertiary/50 border border-white/10 py-3 px-4 rounded-lg text-white placeholder-secondary/50 text-sm font-manrope focus:border-tech-accent/50 focus:border transition-colors"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white text-sm font-medium font-manrope mb-2">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-tertiary/50 border border-white/10 py-3 px-4 rounded-lg text-white placeholder-secondary/50 text-sm font-manrope focus:border-tech-accent/50 focus:border transition-colors resize-none"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="bg-tech-accent/90 hover:bg-tech-accent py-3 px-8 rounded-xl text-primary font-bold font-spaceGrotesk text-sm transition-colors disabled:opacity-50 w-fit"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          variants={slideIn("right", "spring", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
