import React from 'react';
import { urlFor } from '../library/client';
import css from '../styles/Category.module.css';
import Link from 'next/link';

const Category = ({ categories }) => {
  return (
    <section className={css.category}>
      <div>
        <h2 className={css.header}> CATEGORIES</h2>
      </div>
      <div className={css.categories}>
        {categories.map((category) => (
          <div
            key={category._id}
            className={css.card}
            style={{ backgroundImage: `url('${urlFor(category.image)}')` }}
          >
            <Link href={`/category/${category._id}`}>
              <p className={css.categoryText}>{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
