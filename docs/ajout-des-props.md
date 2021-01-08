# ajouter des props à un composant
- Créer les props nécessaires dans les paramètre de notre composant
- S'en servir dans le corps de notre composant
- Valider les props :
  - importer PropTypes : `js import PropTypes from 'prop-types';`
  - définit la propriété propTypes sur notre composant :
  ```js
  MonComposant.propTypes = {
      // par exemple :
      maProp: Proptypes.string.isRequired,
  };
  ```
- Dans le composant utilisant notre composant avec des props, les passer :
```jsx
<MonComposant maProp="la valeur de la prop" />
```
