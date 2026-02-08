import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_znv3qa7",
      "template_hm8i7jg",
      e.target,
      "MI9RId1pngsITF4Bz"
    )
    .then(() => {
      setStatus("Message sent successfully.");
      e.target.reset();
    })
    .catch(() => {
      setStatus("Failed to send message.");
    });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={sendEmail}>
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required />
        <button type="submit">Send</button>
      </form>

      <p className="status">{status}</p>
    </section>
  );
}
