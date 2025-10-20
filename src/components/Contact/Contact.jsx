import React from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contactTitle"
    >
      <div className={`container ${styles.container}`}>
        <h2 id="contactTitle" className={styles.sectionTitle}>
          {t("contact_title")}
        </h2>

        <div className={styles.contactWrapper}>
          {/* FORM */}
          <form
            className={`${styles.glass} ${styles.contactForm}`}
            method="post"
            action="#"
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className="sr-only">
                  {t("contact_form_name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contact_form_name")}
                  required
                  autoComplete="name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className="sr-only">
                  {t("contact_form_email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contact_form_email")}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className="sr-only">
                {t("contact_form_message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder={t("contact_form_message")}
                required
              ></textarea>
            </div>

            <div className={styles.formFoot}>
              <button type="submit" className={styles.submitButton}>
                {t("contact_form_send")}
              </button>
              <span className={styles.privacyNote}>
                {t(
                  "contact_privacy_note",
                  "I will never share your information."
                )}
              </span>
            </div>
          </form>

          {/* INFO */}
          <aside className={`${styles.glass} ${styles.contactInfo}`}>
            <h3 className={styles.infoTitle}>{t("contact_info_title")}</h3>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.iconWrap}>
                  <FaEnvelope aria-hidden="true" />
                </span>
                <a href="mailto:email@example.com" className={styles.infoLink}>
                  email@example.com
                </a>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.iconWrap}>
                  <FaPhone aria-hidden="true" />
                </span>
                <a href="tel:+995555123456" className={styles.infoLink}>
                  +995 555 123 456
                </a>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.iconWrap}>
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>
                <span className={styles.infoText}>თბილისი, საქართველო</span>
              </li>
            </ul>

            <div className={styles.quickNote}>
              {t(
                "contact_quick_note",
                "Available for freelance & contract projects. Prefer email for the fastest response."
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
