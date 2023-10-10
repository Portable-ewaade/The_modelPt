
// import React from "react";
import emailjs from "@emailjs/browser";
import Message from "./Message";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { useRef, useState } from "react";
import styles from './contact.module.css'


 const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [formError, setFormError] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading to true just before sending the email
    setLoading(true);

    // Check if any required fields are empty
    const requiredFields = [
      "user_name",
      "selectedOptions",
      "user_email",
      "phone_number",
      "what_to_do",
    ];

    const isFormValid = requiredFields.every((field) => {
      if (field === "selectedOptions") {
        return selectedOptions.length > 0;
      }

      const fieldValue = form.current[field].value.trim();
      return fieldValue !== "";
    });

    if (!isFormValid) {
      setFormError("Please fill in all required fields.");
      setLoading(false); // Reset loading state
      return;
    }

    const formElement = form.current;

    emailjs
      .sendForm(
        "service_oqf80zc",
        "template_cv4yida",
        formElement, // Pass the form element here
        "h323G-r1G3JnKE4c-"
      )
      .then(
        (result) => {
          setStep(1);

          // Reset the error message and loading state
          setFormError("");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);

          // Reset the loading state
          setLoading(false);
        }
      );
  };

  const options = [
    { value: "Software Development", label: "Software Development" },
    { value: "Branding", label: "Branding" },
    { value: "Product Design", label: "Product Design" },
    { value: "Data Analytics", label: "Data Analytics" },
    { value: "Strategy", label: "Strategy" },
  ];

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <>
      <section className={` ${styles.form_container} pb-5 pt-4`} id="contact">
        <div className="card px-5 border-0">
          <form className="mt-5" onSubmit={handleSubmit} ref={form}>
            {step === 0 && (
              <>
                <div className="mb-4">
                  <h4 className="fw-bold">Send Us A Message</h4>
                </div>

                <label htmlFor="inputFullName">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  name="user_name"
                  placeholder="Full Name"
                />

                <label htmlFor="multiSelect">
                  What would you like us to craft for you? (Choose one or more)
                </label>
                <Select
                  
                  options={options}
                  isMulti
                  name="selected_options"
                  value={selectedOptions}
                  onChange={handleMultiSelectChange}
                  className="mb-3"
                />

                <div className="form-group fs-11 grey font-weight-medium">
                  <Row>
                    <Col md={6}>
                      <label htmlFor="inputEmailAddress">Email</label>
                      <input
                        type="email"
                        className="form-control p-2 mb-3"
                        name="user_email"
                        placeholder="Email Address"
                      />
                    </Col>
                    <Col md={6}>
                      <label htmlFor="inputEmailAddress">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control p-2 mb-3"
                        name="phone_number"
                        placeholder="Phone number"
                      />
                    </Col>
                  </Row>
                  <label htmlFor="textarea">Describe What You Want</label>
                  <textarea
                    type="text"
                    className="form-control mb-3"
                    name="what_to_do"
                    placeholder="Tell us how we can help you"
                  />
                  {/* <p className="fs-small">
                    By clicking on the button below, you accept our
                   
                      <a href="/" className="text-color fw-bold">
                        privacy policy
                      </a>
                  </p> */}
                </div>

                <Row>
                  <Col md={12}>
                    <button
                      className="text-center form-btn"
                      value="Send"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={loading} // Disable the button while loading
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </Col>
                </Row>
              </>
            )}
          </form>
          {formError && <div className="text-danger">{formError}</div>}
          {step === 1 && (
            <>
              <Message
                title={`Thanks for contacting us`}
                status="success"
                buttonText="Go to Homepage >"
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactUs;
