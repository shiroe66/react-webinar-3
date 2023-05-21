import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function List(props) {
  const Item = props.item

  return (
    <div className='List'>{
      props.list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} handleInteraction={props.handleInteraction} />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  item: PropTypes.elementType,
  handleInteraction: PropTypes.func
};

List.defaultProps = {
  handleInteraction: () => { }
}

export default React.memo(List);
