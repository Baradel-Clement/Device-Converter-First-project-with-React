import React from 'react';
import PropTypes from 'prop-types';

import './toggler.scss';

// Mon composant Toggler n'a besoin de savoir que 2 choses :
// - s'il est ouvert ou fermé (la position de l'interrupteur)
// - l'action qu'il doit déclencher quand on clique dessus.
const Toggler = ({ isOpen, manageClick }) => {
  const className = isOpen ? 'toggler toggler--open' : 'toggler';

  return (
    <button
      className={className}
      type="button"
      onClick={manageClick}
    >
      =
    </button>
  );
};

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default Toggler;
