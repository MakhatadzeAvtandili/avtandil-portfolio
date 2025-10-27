import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Contact = () => {
  const { t } = useTranslation("common");
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    if (!name) newErrors.name = t("contact.form.validation.nameRequired");
    if (!email) {
      newErrors.email = t("contact.form.validation.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t("contact.form.validation.emailInvalid");
    }
    if (!message)
      newErrors.message = t("contact.form.validation.messageRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");
    const serviceID = "service_3xy3ecq";
    const templateID = "template_ztgeg78";
    const publicKey = "rCsbD2ytS1iVxWmeq";
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        setStatus("error");
        console.error("FAILED...", error);
        setTimeout(() => setStatus("idle"), 5000);
      }
    );
  };

  const Input = ({ name, type, placeholder, error }) => (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full bg-gray-100 border-2 ${
          error ? "border-red-400" : "border-transparent"
        } rounded-lg p-4 text-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all
        max-[375px]:p-3 max-[375px]:text-base`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p
          id={`${name}-error`}
          className="text-red-500 text-sm mt-1 max-[375px]:text-xs"
        >
          {error}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary max-[375px]:text-2xl">
              {t("contact.title")}
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-[375px]:text-base">
              Have a project in mind or just want to say hello? Feel free to
              reach out. I'm always open to discussing new ideas and
              opportunities.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4 max-[375px]:gap-3">
                <span className="bg-primary/10 text-primary p-3 rounded-full max-[375px]:p-2">
                  <MailIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary max-[375px]:text-sm">
                    Email
                  </h3>
                  <a
                    href="mailto:avtandili.makhatadze@example.com"
                    className="text-text-secondary hover:text-primary transition-colors max-[375px]:text-sm"
                  >
                    avtandili.makhatadze@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 max-[375px]:gap-3">
                <span className="bg-primary/10 text-primary p-3 rounded-full max-[375px]:p-2">
                  <PhoneIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary max-[375px]:text-sm">
                    Phone
                  </h3>
                  <a
                    href="tel:+995000000000"
                    className="text-text-secondary hover:text-primary transition-colors max-[375px]:text-sm"
                  >
                    +995 000 000 000
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 max-[375px]:space-y-4"
            >
              <Input
                name="name"
                type="text"
                placeholder={t("contact.form.name")}
                error={errors.name}
              />
              <Input
                name="email"
                type="email"
                placeholder={t("contact.form.email")}
                error={errors.email}
              />
              <div>
                <textarea
                  name="message"
                  placeholder={t("contact.form.message")}
                  rows="5"
                  className={`w-full bg-gray-100 border-2 ${
                    errors.message ? "border-red-400" : "border-transparent"
                  } rounded-lg p-4 text-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all
                  max-[375px]:p-3 max-[375px]:text-base`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 max-[375px]:text-xs">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary hover:bg-teal-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105
                max-[375px]:py-3 max-[375px]:px-5 max-[375px]:text-base"
              >
                {status === "sending"
                  ? t("contact.form.sending")
                  : t("contact.form.send")}
              </button>
              {status === "success" && (
                <p className="text-center text-green-600 max-[375px]:text-sm">
                  {t("contact.form.success")}
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-600 max-[375px]:text-sm">
                  {t("contact.form.error")}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
