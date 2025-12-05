import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode;
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, text: "" });
  const [done, setDone] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const errs = {};
    if (!formData.user_name.trim()) errs.user_name = "Name is required";
    if (!formData.user_email.trim()) errs.user_email = "Email is required";
    else if (!emailRegex.test(formData.user_email.trim()))
      errs.user_email = "Please enter a valid email";
    if (!formData.message.trim()) errs.message = "Message is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onFileChange = (e) => {
    const f = e.target.files[0];
    if (f) setFileName(f.name);
    else setFileName("");
  };

  const showToast = (text) => {
    setToast({ show: true, text });
    setTimeout(() => setToast({ show: false, text: "" }), 3000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validate()) {
      showToast("Fix errors before sending.");
      return;
    }

    setSending(true);

    const formDataObj = new FormData(formRef.current);

    const response = await fetch("https://formspree.io/f/mvgeqqgg", {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (result.ok) {
      showToast("Email sent successfully!");
      setDone(true);

      setFormData({ user_name: "", user_email: "", message: "" });
      setFileName("");
      formRef.current.reset();
    } else {
      showToast("Failed to send email.");
    }

    setSending(false);
  };

  const isSubmitDisabled =
    sending ||
    !formData.user_name.trim() ||
    !formData.user_email.trim() ||
    !formData.message.trim();

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <div className="contact-form" id="contact">
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />
          </div>
        </div>

        <div className="c-right">
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
              value={formData.user_name}
              onChange={onChange}
            />
            {errors.user_name && (
              <div className="form-error">{errors.user_name}</div>
            )}

            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
              value={formData.user_email}
              onChange={onChange}
            />
            {errors.user_email && (
              <div className="form-error">{errors.user_email}</div>
            )}

            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={formData.message}
              onChange={onChange}
            />
            {errors.message && (
              <div className="form-error">{errors.message}</div>
            )}

            {/* File Upload */}
            <div className="file-upload-wrapper">
              {/* <label className="file-label">Attach file (optional)</label> */}
              {/* 
              <button
                type="button"
                className="file-upload-btn"
                onClick={() => document.getElementById("attachment").click()}
              >
                Attach File
              </button> */}
              <input
                id="attachment"
                type="file"
                name="file"
                className="file-hidden-input"
                onChange={onFileChange}
                accept="image/*,application/pdf,.doc,.docx"
              />

              {fileName && (
                <div className="file-info-box">
                  <span className="fName">{fileName}</span>
                  <button
                    type="button"
                    className="file-remove-btn"
                    onClick={() => {
                      setFileName("");
                      document.getElementById("attachment").value = "";
                    }}
                  >
                    ✖
                  </button>
                </div>
              )}
            </div>

            <input
              type="submit"
              value={sending ? "Sending..." : "Send"}
              className="button"
              disabled={isSubmitDisabled}
            />

            <span>{done && "Thanks for contacting me!"}</span>

            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            />
          </form>
        </div>
      </div>

      <div className={`toast ${toast.show ? "show" : ""}`}>{toast.text}</div>
    </div>
  );
};

export default Contact;
