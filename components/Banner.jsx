import React from 'react';
import css from '../styles/Banner.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={css.bannerContainer}>
      <div className={css.start}>
        <p className={css.discountPrice}>70% OFF</p>
        <p className={css.discountName}>Discount Sales</p>
        <p className={css.discountPrice}>Best product of the month</p>
        <Link href='/product/men-plain-underwear'>
          <button className={css.btn} type='button'>
            Buy Now
          </button>
        </Link>
      </div>
      <div className={css.middle}>
        <Image
          className={css.image}
          src='/underwear.png'
          alt=''
          loading='lazy'
          width='400'
          height='300'
        />
      </div>
      <div className={css.end}>
        <p className={css.discountPrice}>
          <span className={css.color}>300</span> Quantity Left
        </p>
        <p className={css.discountName}>WEAR</p>
        <p className={css.discountName}>& FEEL IT.</p>
        <Link href='/product/men-plain-underwear'>
          <button className={css.btn} type='button'>
            Add Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
