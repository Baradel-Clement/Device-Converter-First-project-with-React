/* eslint-disable class-methods-use-this */
// == Import npm
import React from 'react';

// == Import
import './converter.scss';

// == Import local
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import Toggler from 'src/components/Toggler';

import currenciesListData from 'src/data/currencies';

// Pour pouvoir utiliser le state, on doit passer notre
// composant en classe.
// Pour ce faire, on procède aux changements suivants :
// - création d'une classe étendant React.Component,
// - mise en place d'une méthode render reprenant le code de notre composant fonctionnel,
// - création d'un constructeur (méthode constructor) avec :
//    - appel aux constructeur de React.Component ( super (props) )
//    - initialisation du state (this. state). le state est un objet
//      dans lequel on peut ranger plusieurs propriétés.
class Converter extends React.Component {
  constructor(props) {
    // appeller le constructeur de mon parent
    super(props);

    // Ici, on donne l'état initial de notre composant
    this.state = {
      open: true,
      rateCurrency: 1.09,
      nameCurrency: 'United States Dollar',
      baseAmount: 1,
    };

    // Ici on lie à notre méthode toggle l'objet courant
    this.toggle = this.toggle.bind(this);
    this.onClickCurrency = this.onClickCurrency.bind(this);
  }

  toggle() {
    // Ici, on aimerait modifier l'état (le state) de note composant
    // Pour provoquer un nouveau rendu

    this.setState({
      open: !this.state.open,
    });
  }

  onClickCurrency(rateCurrency, nameCurrency) {
    this.setState({
      rateCurrency: rateCurrency,
      nameCurrency: nameCurrency,
    })
  }

  // la méthode render est appelée pour générer l'affichage du composant
  render() {
    // Ici, on destructure l'objet this.state et on récupère
    // seulement la propiété open que l'on stocke dans une
    // variable nommée open.
    // cf exo sur la destructuration E02 (exo 6 ou 7 du parcours)
    const { open } = this.state;
    const { rateCurrency } = this.state;
    const { nameCurrency } = this.state;
    const { baseAmount } = this.state;

    // Ici, toute l'intelligence reside dans ce composant, on passe
    // seulement à Toggler son état actuel et ce qui devra se produire
    // au click.
    return (

      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler isOpen={open} manageClick={this.toggle} />
        {
            // Ici, ce qui est situé à droite du && ne sera exécuté que si open est vrai.
            // En effet quand javascript analyse une condition du type
            // (faux && n_importe_quoi_d_autre), il n'est pas nécessaire
            // d'aller vérifier la validité de n_importe_quoi_d_autre.
            // De toute les manière, l'expression vaudra faux.
            // Donc, le composant n'est pas appelé -> il ne s'affiche pas.
            open && <Currencies currenciesList={currenciesListData} onClickCurrency={this.onClickCurrency} />
          }
        <Result amount={Math.round(((rateCurrency * baseAmount) * 100)) / 100} currency={nameCurrency} />
      </div>
    );
  }
}

// == Export
export default Converter;
