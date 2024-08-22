import React, { useState } from "react";
import axios from "axios";
import styles from "./css/ContactModal.module.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post(
        "https://formspree.io/f/xaykqnvb",
        formData
      );

      console.log("Correo electrónico enviado:", response.data);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? "" : styles.hidden}`}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Contact Form</h2>
        {isSubmitted ? (
          <div className={styles.successMessage}>Message sent successfully!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={styles.textarea}
              />
              {errors.message && <p className={styles.error}>{errors.message}</p>}
            </div>
            <div className={styles.formActions}>
              <button
                type="button"
                onClick={handleCancel}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
