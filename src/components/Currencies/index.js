import React from 'react';
import PropTypes from 'prop-types';

// Import Local
import Currency from './Currency';

import './currencies.scss';

const Currencies = ({ currenciesList, onClickCurrency }) => (
  <div className="currencies">
    <h3 className="currencies__title">Currencies</h3>
    <ul className="currencies__list">
      {
        currenciesList.map(
          (currency) => (
            <Currency key={currency.name} {...currency} onClickCurrency={onClickCurrency} />
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
    }).isRequired,
  ).isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};

export default Currencies;
