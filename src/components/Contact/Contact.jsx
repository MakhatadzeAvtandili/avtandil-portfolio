import React from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>{t("contact_title")}</h2>
        <div className={styles.contactWrapper}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("contact_form_name")}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("contact_form_email")}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder={t("contact_form_message")}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              {t("contact_form_send")}
            </button>
          </form>
          <div className={styles.contactInfo}>
            <h3>{t("contact_info_title")}</h3>
            <p>
              <FaEnvelope /> email@example.com
            </p>
            <p>
              <FaPhone /> +995 555 123 456
            </p>
            <p>
              <FaMapMarkerAlt /> თბილისი, საქართველო
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
