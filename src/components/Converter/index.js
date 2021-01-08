// == Import npm
import React from 'react';

// == Import
import './converter.scss';

// == Import local
import Header from 'src/components/Header';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <div>Currencies</div>
    <div>Result</div>
  </div>
);

// == Export
export default Converter;
