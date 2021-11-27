import React from 'react';
import propTypes from 'prop-types';
import './singleCompany.css';

const SingleCompany = ({
  name, sector, founded, headQuarter,
}) => (
  <ul className="single-company">
    <li>
      <p className="describer">company name</p>
      <p className="description">{name}</p>
    </li>
    <li>
      <p className="describer">sector</p>
      <p className="description">{sector}</p>
    </li>
    <li>
      <p className="describer">headQuarter</p>
      <p className="description">{headQuarter}</p>
    </li>
    <li>
      <p className="describer">founded</p>
      <p className="description">{founded}</p>
    </li>
  </ul>
);

SingleCompany.propTypes = {
  name: propTypes.string.isRequired,
  sector: propTypes.string.isRequired,
  headQuarter: propTypes.string.isRequired,
  founded: propTypes.string.isRequired,
};

export default SingleCompany;
