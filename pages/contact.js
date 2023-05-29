import { useState } from "react";
import Script from 'next/script'
import { sendEmail } from "../src/client/email";

export default function Contact({ recaptchaSiteKey }) {
  var params = {
    name: "",
    email: "",
    message: "",
  };

  let [fullName, setFullName] = useState(params.name)
  let [email, setEmail] = useState(params.email)
  let [message, setMessage] = useState(params.message)
  let [errorMessage, setErrorMessage] = useState("")
  let [success, setSuccess] = useState(null)
  let [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("")
    setLoading(true)
    setSuccess(null)

    const sendEmailSuccess = await sendEmail(email, fullName, message, recaptchaSiteKey)

    if (sendEmailSuccess) {
      setSuccess(true)
    } else {
      setErrorMessage("Sorry, your email could not be sent.");
    }

    setLoading(false)
  };

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`} />
      <main>
        <form className="flex flex-col gap-4 max-w-2xl mx-auto pt-6 text-2xl px-5" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <label
                htmlFor="fullname"
              >Your Name</label>
            </div>
            <input
              id="fullname"
              required={true}
              type="text"
              sizing="lg"
              value={fullName}
              disabled={loading}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label
                htmlFor="email"
              >Email</label>
            </div>
            <input
              id="email"
              required={true}
              type="email"
              sizing="lg"
              icon={() => <i aria-hidden="true" className="fas fa-envelope fa-1x" title="Instagram"></i>}
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label
                htmlFor="message"
              >Message</label>
            </div>
            <input
              id="message"
              required={true}
              type="textarea"
              rows={6}
              value={message}
              disabled={loading}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" size="xl" color="info" disabled={loading}>
              Send Email
            </button>
          </div>
          {success &&
            <p className="text-green-500">
              Message sent!
            </p>}
          <p className="text-red-500">
            {errorMessage}
          </p>
        </form>
      </main>
    </>
  )
}


export function getStaticProps() {
  return {
    props: {
      pageTitle: "Contact Us",
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
    }
  }
}
