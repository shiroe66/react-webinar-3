import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import List from "../list";
import { getCartInfo } from "../../utils";

function Modal(props) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <div className="Title">
          {props.title}
          <button onClick={props.closeModal}>Закрыть</button>
        </div>
        <List list={props.items} handleInteraction={props.handleInteraction} interactionTitle={props.interactionTitle} />
        <div className="Total">
          <p>Итого</p>
          <p>{getCartInfo(props.items).cost} ₽</p>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  })).isRequired,
  closeModal: PropTypes.func,
  handleInteraction: PropTypes.func,
  interactionTitle: PropTypes.string
}

Modal.defaultProps = {
  closeModal: () => { },
  handleInteraction: () => { }
}

export default React.memo(Modal);