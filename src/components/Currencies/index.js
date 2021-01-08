import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currenciesList }) => (
  <div className="currencies">
    <h3 className="currencies__title">Currencies</h3>
    <ul className="currencies__list">
      {
        currenciesList.map(
          (currency) => (
            <li key={currency.name} className="currencies__list__item">{currency.name}</li>
          ),
        )
      }
    </ul>
  </div>
);

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
