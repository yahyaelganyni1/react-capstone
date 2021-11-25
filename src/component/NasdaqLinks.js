/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';


const NasdaqLinks = ({ symbol, name }) => (

  <Link to={`/${symbol}`} use>{name}</Link>
);

export default NasdaqLinks;
