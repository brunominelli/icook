import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../styles';
import { useNavigate } from 'react-router-dom';

function AppCard(props) {
  const { id, title, thumb, type } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    switch (type) {
      case 'meals':
        navigate(`/${type}/${id}`);
        break;
      case 'cocktails':
        navigate(`/${type}/${id}`);
        break;
      default:
        break;
    }
  }

  return (
    <Card onClick={() => handleNavigate()}>
      <img src={thumb} alt={`${title} thumbnail`} />
      <figcaption>
        <h3>{title}</h3>
      </figcaption>
    </Card>
  );
};

AppCard.propTypes = {
  props: PropTypes.objectOf(PropTypes.any),
}.isRequired

export default AppCard;
