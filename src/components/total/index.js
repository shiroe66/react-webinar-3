import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { toLocaleCurrency } from '../../utils'

function Total(props) {
  return (
    <div className="Total">
      <p>Итого</p>
      <p>{toLocaleCurrency(props.cost)}</p>
    </div>
  )
}

Total.propTypes = {
  cost: PropTypes.number.isRequired
}

export default React.memo(Total)