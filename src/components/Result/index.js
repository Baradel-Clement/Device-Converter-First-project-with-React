import React from 'react';
import PropTypes from 'prop-types';

import './result.scss';

const Result = ({ currency, amount }) => (
  <footer className="result">
    <h1 className="result__amount">{amount}</h1>
    <h2 className="result__currency">{currency}</h2>
  </footer>
);

Result.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Result;
