import PropTypes from "prop-types";
import React from "react";
import './style.css';

function Item(props) {
  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-actions'>
        {/* <button onClick={callbacks.onDelete}>
          Удалить
        </button> */}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default React.memo(Item);
