
import { FocusEvent, PointerEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';

import { gitHubUrl, linkedInUrl, email } from '../../globals/globalVar';

export const Navigation = ({ handleShowHide }: {handleShowHide: () => void} ) => {

  // Close nav when user clicks mobile menu link or loses focus
  const closeNav = (e: FocusEvent<HTMLInputElement> & PointerEvent<HTMLElement> ) => {
    if (window.innerWidth < 576) {
      handleShowHide();
    } else {
      e.target.blur();
    }
  };

  return (
    <nav onClick={closeNav} className="main-nav">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="nav-link">
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <HashLink to="#contact" smooth className="nav-link">
            Contact
          </HashLink> 
        </li>
        

        <li className="nav-social-media">
          <a
            className="nav-social-icon"
            href={gitHubUrl}
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="nav-social-icon"
            href={linkedInUrl}
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a className="nav-social-icon" href={`mailto:${email}`} title="email">
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </nav>
  )
}