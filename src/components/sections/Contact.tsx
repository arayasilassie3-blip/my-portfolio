import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-24 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Get In Touch"
            subtitle="Feel free to contact me for collaboration, engineering projects, or software development opportunities."
          />

          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-xl bg-slate-100 p-8 shadow transition hover:-translate-y-1 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
              <h3 className="mb-6 text-2xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-cyan-400" />
                  <span>arayasilassie3@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-cyan-400" />
                  <span>+251 910 588 646</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-2xl text-cyan-400" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="rounded-xl bg-slate-100 p-8 shadow dark:bg-slate-800">
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-slate-300 bg-white p-4 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-900"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-slate-300 bg-white p-4 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-900"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-slate-300 bg-white p-4 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-900"
                />

                <button
                  type="submit"
                  className="rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;