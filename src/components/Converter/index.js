// == Import npm
import React from 'react';

// == Import
import './converter.scss';

// == Import local
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies />
    <div>Result</div>
  </div>
);

// == Export
export default Converter;
