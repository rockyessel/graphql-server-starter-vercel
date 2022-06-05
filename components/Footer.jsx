import React from 'react';
import css from '../styles/Footer.module.css';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={css.footerContainer}>
      <Link href={`/`}>
        <p className={css.logo}>
          2022 Jestina<span className={css.color}>Commerce.</span>
          <span>All rights reserved</span>
        </p>
      </Link>
      <p className={css.icon}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
