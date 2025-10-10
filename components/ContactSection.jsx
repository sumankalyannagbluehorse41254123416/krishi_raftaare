"use client";

import { useState, useEffect } from "react";
import { handleSubmitForm } from "@/services/handleSubmit";

export default function ContactSection({ data, fields }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!data) return null;

  // Initialize formData when fields load
  useEffect(() => {
    if (fields && fields.length > 0) {
      const initial = {};
      fields.forEach((f) => {
        initial[f.name] = "";
      });
      setFormData(initial);
    }
  }, [fields]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Phone number: only digits, max 10 chars
    if (name.toLowerCase().includes("phone")) {
      const digitsOnly = value.replace(/\D/g, ""); // remove non-digits
      if (digitsOnly.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const newErrors = {};
    let phoneInvalid = false;

    fields.forEach((field) => {
      const value = formData[field.name];

      if (field.required && !value?.trim()) {
        newErrors[field.name] = `${field.label || field.name} is required`;
      }

      // ✅ Email validation
      if (field.name.toLowerCase() === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = "Please enter a valid email address";
        }
      }

      // ✅ Phone validation: exactly 10 digits
      if (field.name.toLowerCase().includes("phone")) {
        if (!value || value.length !== 10) {
          newErrors[field.name] = "Phone number must be exactly 10 digits";
          phoneInvalid = true;
        }
      }
    });

    setErrors(newErrors);

    // 🚨 Show alert if phone number invalid
    if (phoneInvalid) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      const response = await handleSubmitForm(window.location.host, formData);
      if (response) {
        alert("Form submitted successfully!");
        const reset = {};
        fields.forEach((f) => (reset[f.name] = ""));
        setFormData(reset);
      } else {
        alert("Submission failed!");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-white pt-10 pb-10 md:pb-12 lg:pb-20 lg:py-10"
      id="contact"
    >
      <div className="mx-auto p-6 max-w-5xl">
        {/* Section Heading */}
        <div className="text-center">
          <div className="w-5 h-5 rounded-full flex items-center justify-center mb-2 mx-auto">
            <img src="/image/sec-title-icon1.webp" />
          </div>
          <p className="text-sm mb-2">
            {data.shortDescription
              ?.replace(/^<p>/i, "")
              .replace(/<\/p>$/i, "")
              .trim()}
          </p>
          <h2
            className="text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--deepest-green)] mb-4 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 pt-[30px]">
          {/* Left Side */}
          <div className="flex-1">
            {data.subsections?.[0]?.description && (
              <div
                className="text-gray-600 mb-6 text-sm"
                dangerouslySetInnerHTML={{
                  __html: data.subsections[0].description,
                }}
              />
            )}

            <ul className="text-left text-gray-600 list-disc pl-5 mb-6">
              {data.subsections?.slice(1, 4).map((sub, idx) => (
                <li key={idx}>{sub.title}</li>
              ))}
            </ul>

            <div className="relative mt-[45px]">
              <div className="relative z-10 agricultural_img">
                {data.subsections?.[4]?.image && (
                  <img
                    src={data.subsections[4].image}
                    alt="Agriculture"
                    className="rounded-lg shadow-md h-28 sm:h-32 md:h-28 lg:h-40 w-42 sm:w-52 md:w-32 lg:w-40 object-cover"
                  />
                )}
              </div>
              {data.subsections?.[5]?.image && (
                <img
                  src={data.subsections[5].image}
                  alt="Organic Eco"
                  className="rounded-lg shadow-md mt-4 w-[380px] sm:w-[410px] md:w-[300px] absolute top-[40px] right-0"
                />
              )}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="flex-1 bg-[#f5f5f5] p-10 rounded-lg shadow-md mt-37 lg:mt-0">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              Contact With Us
            </h3>

            <form onSubmit={(e) => e.preventDefault()}>
              {/* First name + Last name (normal stacked) */}
              {fields
                ?.filter(
                  (f) =>
                    !f.name.toLowerCase().includes("phone") &&
                    !f.name.toLowerCase().includes("email") &&
                    f.type !== "textarea"
                )
                .map((field, index) => (
                  <div key={`${field.id}-${index}`} className="mb-4">
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      placeholder={field.label}
                      className="w-full p-3 border-none rounded-[10px] bg-white"
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

              {/* Phone + Email side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {fields
                  ?.filter(
                    (f) =>
                      f.name.toLowerCase().includes("phone") ||
                      f.name.toLowerCase().includes("email")
                  )
                  .map((field, index) => (
                    <div key={`${field.id}-${index}`}>
                      <input
                        type={field.type === "phone" ? "tel" : "text"}
                        name={field.name}
                        placeholder={field.label}
                        className="w-full p-3 border-none rounded-[10px] bg-white"
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        inputMode={
                          field.type === "phone" ? "numeric" : undefined
                        }
                        pattern={field.type === "phone" ? "[0-9]*" : undefined}
                      />
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
              </div>

              {/* Message textarea always last */}
              {fields
                ?.filter((f) => f.type === "textarea")
                .map((field, index) => (
                  <div key={`${field.id}-${index}`} className="mb-4">
                    <textarea
                      name={field.name}
                      placeholder={field.label}
                      className="w-full p-2 border-none rounded-[10px] bg-white"
                      rows={4}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="button_hover text-sm px-5 py-4 w-fit bg-[var(--light-yellow)] text-[var(--deepest-green)] p-3 rounded-lg font-semibold"
              >
                {loading ? "Submitting..." : "SEND A MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
