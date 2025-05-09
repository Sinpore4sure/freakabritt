"use client";

import { useState } from "react";
import MainLayout from "../../../components/MainLayout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
  };

  return (
    <MainLayout>
      {/* Contact Header */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Contact <span className="text-pink">Me</span></h1>
          <p className="lead">Have questions or want to connect? Get in touch!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Info Section */}
            <div className="col-lg-4 mb-4">
              <h2 className="fw-bold mb-4">Get In Touch</h2>
              <p>Feel free to reach out for any inquiries, collaborations, or just to say hi!</p>
              <h5 className="mt-4">Management Contact:</h5>
              <p><a href="mailto:management@freakabritt.com" className="text-pink text-decoration-none">management@freakabritt.com</a></p>
              <h5 className="mt-4">Social Links:</h5>
              <div className="d-flex gap-3 fs-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink"><i className="bi bi-instagram"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pink"><i className="bi bi-twitter"></i></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-pink"><i className="bi bi-tiktok"></i></a>
              </div>
            </div>

            {/* Form Section */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">Contact Form</h3>
                  {submitSuccess && (
                    <div className="alert alert-success">
                      Thank you for your message! I'll get back to you soon.
                    </div>
                  )}
                  <form
                    action="https://formsubmit.co/polyvascular_larryscott@aol.com"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    {/* Hidden FormSubmit Fields */}
                    <input type="hidden" name="_next" value="https://livechatwithfreakabritt.vercel.app/thank-you" />
                    <input type="hidden" name="_subject" value={`New Contact Request`} />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="row g-4">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Your Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">Subject *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-pink"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}