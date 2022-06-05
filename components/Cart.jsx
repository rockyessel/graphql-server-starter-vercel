import React from 'react';
import css from '../styles/Cart.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { CgTrash } from 'react-icons/cg';
import { urlFor } from '../library/client';
import getStripe from '../library/getStripe';

import Link from 'next/link';

import { useManageContext } from '../context/ManageStateContext';

const Cart = () => {
  const {
    setCartItems,
    cartItems,
    totalQuantities,
    setShowCart,
    onRemove,
    totalPrice,
    toggleCartItemQuantity,
    setTotalPrice,
    setTotalQuantities,
  } = useManageContext();

  const handleClearAll = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  };

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className={css.cartContainer}>
      <div className={css.container}>
        <div className={css.backAndCounter}>
          <RiArrowGoBackFill
            className={css.back}
            onClick={() => setShowCart(false)}
          />
          {totalQuantities !== 0 && (
            <span className={css.itemCounter}>({totalQuantities} items)</span>
          )}
        </div>

        {cartItems.length <= 0 && (
          <div className={css.emptyCartContainer}>
            <div className={css.text}>
              <h3>Empty Cart</h3>
              <p>Add a product and check again.</p>
            </div>
            <img src='/add.gif' alt='' />
            <Link href='/'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className={css.btn}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className={css.cartProductContainer}>
          {cartItems.map((item) => (
            <div className={css.cartProductCard} key={item._id}>
              <img
                src={urlFor(item?.image[0])}
                className={css.cartProductImage}
              />
              <div className={css.cartProductDetails}>
                <div className={css.nameAndPrice}>
                  <p className={css.cartProductName}>
                    {item?.name.replace("'", '')}
                  </p>
                  <h4 className={css.green}>${item.new_price}</h4>
                </div>
                <div className={css.displayFlex}>
                  <div className={css.quantityDescription}>
                    <span
                      className={css.minus}
                      onClick={() =>
                        toggleCartItemQuantity(item._id, 'decrease')
                      }
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className={css.num}>{item.quantity}</span>
                    <span
                      className={css.plus}
                      onClick={() =>
                        toggleCartItemQuantity(item._id, 'increase')
                      }
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <CgTrash
                    className={css.cartRemove}
                    onClick={() => onRemove(item)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={css.cartStripeAndTotal}>
          <div className={css.totalPrice}>
            <h4>Subtotal:</h4>
            <h3 className={css.green}>${Math.ceil(totalPrice)}</h3>
          </div>
          <div className={css.buttonContainer}>
            <button
              type='button'
              className={css.stripe}
              onClick={handleCheckout}
            >
              Stripe Pay
            </button>
            <button
              type='button'
              className={css.clearAll}
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
