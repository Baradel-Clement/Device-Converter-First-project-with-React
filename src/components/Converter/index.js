// == Import npm
import React from 'react';

// == Import
import './converter.scss';

// == Import local
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies />
    <Result />
  </div>
);

// == Export
export default Converter;
