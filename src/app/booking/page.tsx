"use client";

import { useState } from "react";
import MainLayout from "../../../components/MainLayout";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://formsubmit.co/polyvascular_larryscott@aol.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Booking Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          location: "",
          details: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitError("There was an error submitting your booking request. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    "1 Hour : $200",
    "2 Hours : $400",
    "1 Hours : $500 No Limit",
    "2 Hours : $1,000 No Limit",
    "Boyfriend Experience : $1,000",
    "Overnight : $2,000",
    "Blow Job : $500",
    "Nude and Sexy Videos : $100",
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="py-5 bg-dark-theme text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Book <span className="text-pink">FreakABritt</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead">
                Ready to book me? I have sweet rates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Booking Options</h2>
              <div className="p-4 rounded-4 border border-pink shadow-sm bg-white">
                <p className="mb-3">Click any of the options below that apply to your need:</p>
                <div className="d-flex flex-wrap gap-2">
                  {eventTypes.map((type, index) => (
                    <a
                      key={index}
                      href="/payment-info"
                      className="btn btn-outline-pink fw-semibold text-dark border-2 rounded-pill px-4 py-2"
                    >
                      {type}
                    </a>
                  ))}
                </div>
              </div>
              {/* <p className="mt-4">
                Please provide as much detail as possible about your event in the form.
                I'll review your request and get back to you within 48 hours.
              </p> */}
            </div>

            {/* Right Column: Image */}
            <div className="col-lg-6">
              <div
                className="bg-secondary-theme rounded-4 overflow-hidden"
                style={{ height: "400px" }}
              >
                <img
                  src="/assets/images/freakabritt2.jpg"
                  alt="FreakABritt"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form... (rest of your form code continues) */}
    </MainLayout>
  );
}
