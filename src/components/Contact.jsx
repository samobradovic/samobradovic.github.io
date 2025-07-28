import React from 'react';

import './Contact.css';

const Contact = () => (
  <section className="contact">
    <h2 className="contact__title">Contact</h2>
    <ul className="contact__list">
      <li className="contact__item">
        <span className="contact__label">Phone:</span>
        <a className="contact__link" href="tel:+622228470">
          (+62) 222 8470
        </a>
      </li>
      <li className="contact__item">
        <span className="contact__label">Email:</span>
        <a className="contact__link" href="mailto:obradovicsrd@gmail.com">
          obradovicsrd@gmail.com
        </a>
      </li>
      <li className="contact__item">
        <span className="contact__label">LinkedIn:</span>
        <a
          className="contact__link"
          href="https://linkedin.com/in/srdjan-obradovic"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/srdjan-obradovic
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
