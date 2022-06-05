import React from 'react';
import css from '../styles/Product.module.css';
import Link from 'next/link';
import { urlFor } from '../library/client';

const Product = ({ products }) => {
  return (
    <div className={css.productContainerCard}>
      <div className={css.header}>
        <h2> PRODUCTS</h2>
      </div>
      <ul className={css.cardContainer}>
        {products?.map((item, i) => (
          <li key={i} className={css.card}>
            <div className={css.center}>
              <img
                className={css.productImage}
                src={urlFor(item?.image[0])}
                alt={item?.slug.current}
                loading='lazy'
              />
              <p className={css.productName}>{item?.name.replace("'", '')}</p>
            </div>
            <ul className={css.productDetails}>
              <li className={css.priceContainer}>
                <span className={css.green}>${item?.new_price}</span>
                <span className={css.gray}>${item?.old_price}</span>
              </li>
              <li className={css.buttonContainer}>
                <Link href={`/product/${item?.slug.current}`}>
                  <button className={css.btn} type='button'>
                    Details
                  </button>
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
