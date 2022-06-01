import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../styles';
import { useNavigate } from 'react-router-dom';

function AppCard(props) {
  const { recipeId, recipeTitle, recipeThumb, recipeType } = props;
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/${recipeType}/${recipeId}`)}>
      <img src={recipeThumb} alt={`${recipeTitle} thumbnail`} />
      <figcaption>
        <h3>{recipeTitle}</h3>
      </figcaption>
    </Card>
  );
};

AppCard.propTypes = {
  props: PropTypes.objectOf(PropTypes.any),
}.isRequired

export default AppCard;
