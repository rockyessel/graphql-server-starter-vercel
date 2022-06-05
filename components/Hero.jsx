import React from 'react';
import css from '../styles/Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={css.section}>
      <div>
        <Image
          className={css.image}
          src='/sho.png'
          alt='dd'
          width='500'
          height='500'
        />
      </div>
      <div className={css.text}>
        <h3 className={css.title}>Lorram</h3>
        <h1 className={css.name}>Brand New</h1>
        <p className={css.description}>
          Discover the latest additions to our <br /> menswear collection
        </p>
        <button className={css.btn}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Hero;
