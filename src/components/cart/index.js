import PropTypes from "prop-types";
import React from "react";
import { getCartInfo, formatCart } from '../../utils';
import './style.css';

function Cart(props) {
  const { cost, length } = getCartInfo(props.cart)

  return (
    <div className='Cart'>
      <div>В корзине:</div>
      <div className="Cart-info">{formatCart(length, cost)}</div>
      <button onClick={props.openModal}>Перейти</button>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  })).isRequired,
  openModal: PropTypes.func
}

Cart.defaultProps = {
  openModal: () => { }
}

export default React.memo(Cart);
