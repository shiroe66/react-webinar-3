import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, handleInteraction, interactionTitle }) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} handleInteraction={handleInteraction} interactionTitle={interactionTitle} />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  handleInteraction: PropTypes.func,
  interactionTitle: PropTypes.string
};

List.defaultProps = {
  handleInteraction: () => { }
}

export default React.memo(List);
