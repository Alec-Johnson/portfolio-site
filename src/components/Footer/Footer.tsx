
import React from 'react';
import { getYear } from '../../utilities/date';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { gitHubUrl, linkedInUrl, email } from '../../globals/globalVar';
import "./styles.scss"

export const Footer = () => {
  return (
    <footer>
      <section className="footer social-media">
        <a
          className="footer-icon"
          href={gitHubUrl}
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub title="GitHub icon" />
        </a>
        <a
          className="footer-icon"
          href={linkedInUrl}
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn title="LinkedIn icon" />
        </a>
        <a className="footer-icon" href={`mailto:${email}`} title="email">
          <HiOutlineMail title="Email icon" />
        </a>
      </section>

      <p>&copy; {getYear()} Alec Johnson</p>
    </footer>
  );
};