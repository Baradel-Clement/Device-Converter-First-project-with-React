import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, rate, onClickCurrency }) => (
  <li onClick={() => onClickCurrency(rate, name)} className="currencies__list__item">{name}</li>
);

/* class Currency extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li onClick={() => this.props.onClickCurrency(this.props.rate, this.props.name)} className="currencies__list__item">{this.props.name}</li>
    );
  }
} */

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};

export default Currency;
