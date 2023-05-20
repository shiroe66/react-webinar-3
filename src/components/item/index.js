import PropTypes from "prop-types";
import React from "react";
import './style.css';

function Item(props) {
  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className="Item-price">{props.item.price}&nbsp;₽</div>
      {props.item.amount && <div className="Item-amount">{props.item.amount}&nbsp;шт</div>}
      <div className='Item-actions' onClick={() => props.handleInteraction(props.item.code)}>
        <button>{props.interactionTitle}</button>
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
  handleInteraction: PropTypes.func,
  interactionTitle: PropTypes.string
};

Item.defaultProps = {
  handleInteraction: () => { }
}

export default React.memo(Item);
