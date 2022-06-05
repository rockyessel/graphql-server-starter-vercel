import React from 'react';
import css from '../styles/Header.module.css';
import { HiShoppingCart } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { Cart } from './index';
import Link from 'next/link';
import { useManageContext } from '../context/ManageStateContext';

const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useManageContext();
  return (
    <header className={css.header}>
      <Link href={'/'}>
        <p className={css.logo}>
          Jestina<span className={css.color}>Commerce</span>
        </p>
      </Link>

      <nav className={css.flex}>
        <ul className={css.icon}>
          <li className={css.cartContainer} onClick={() => setShowCart(true)}>
            <HiShoppingCart className={css.list} />
            <span className={css.cartNumber}>
              <p className={css.number}>{totalQuantities}</p>
            </span>
          </li>
          <Link href='/search'>
            <li>
              <FaSearch className={css.cartContainer} />
            </li>
          </Link>
        </ul>
      </nav>

      {showCart && <Cart />}
    </header>
  );
};

export default Header;
