import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from '../styles';

function AppCard(props) {
  const { recipeTitle, recipeThumb } = props;
  return (
    <Figure>
      <img src={recipeThumb} alt={`${recipeTitle} thumbnail`} />
      <figcaption>
        <h3>{recipeTitle}</h3>
      </figcaption>
    </Figure>
  );
};

AppCard.propTypes = {
  props: PropTypes.objectOf(PropTypes.any),
}.isRequired

export default AppCard;
