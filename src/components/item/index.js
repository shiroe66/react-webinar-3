import PropTypes from "prop-types";
import React from "react";
import './style.css';
import { toLocaleCurrency } from '../../utils'

function Item(props) {
  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className="Item-price">{toLocaleCurrency(props.item.price)}</div>
      <div className='Item-actions' onClick={() => props.handleInteraction(props.item.code)}>
        <button>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  handleInteraction: PropTypes.func
};

Item.defaultProps = {
  handleInteraction: () => { }
}

export default React.memo(Item);
