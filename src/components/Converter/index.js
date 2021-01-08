// == Import npm
import React from 'react';

// == Import
import './converter.scss';

// == Import local
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import currenciesListData from 'src/data/currencies';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header baseAmount={1} />
    <Currencies currenciesList={currenciesListData} />
    <Result amount={1.09} currency="USD" />
  </div>
);

// == Export
export default Converter;
