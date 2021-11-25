/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getCompany } from '../redux/nasdaq/nasdaq';
import NasdaqLinks from './NasdaqLinks';
import SingleCompany from './SingleCompany';

const Nasdaq = () => {
  const nasdaqList = useSelector((state) => state.companyReducer);
  const company = nasdaqList[0];
  const dispatch = useDispatch();
  useEffect(() => {
    if (!nasdaqList.length) {
      dispatch(getCompany());
    }
  }, [dispatch]);
  console.log(company)
  return (
    <ul>
      <h2>Company</h2>
      <Routes>
        {company?.map((list) => (
          <Route
            path='/'
            element={(
              <NasdaqLinks
                key={list.key}
                name={list.name}
                symbol={list.symbol}
              />
            )}
          />
        ))}
        {company?.map((list) => (
          <Route
            path={`/${list.symbol}`}
            key={list.symbol}
            element={(
              <SingleCompany
                key={list.key}
                name={list.name}
                sector={list.sector}
                founded={list.founded}
              />
            )}
          />
        ))}
      </Routes>
    </ul>
  );
};

export default Nasdaq;
