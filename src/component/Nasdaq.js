import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getCompany } from '../redux/nasdaq/nasdaq';
import NasdaqLinks from './NasdaqLinks';
import SingleCompany from './SingleCompany';
import Header from './Header';
import './nsdaq.css';

const Nasdaq = () => {
  const nasdaqList = useSelector((state) => state.companyReducer);
  const company = nasdaqList[0];
  const dispatch = useDispatch();
  useEffect(() => {
    if (!nasdaqList.length) {
      dispatch(getCompany());
    }
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div className="nasdaq-list-name">
        <h3>nasdaq List</h3>
      </div>
      <ul>
        <Routes>
          {company?.map((list) => (
            <Route
              path="/"
              key={list.symbol}
              element={(
                <NasdaqLinks
                  key={list.symbols}
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
                  headQuarter={list.headQuarter}
                />
              )}
            />
          ))}
        </Routes>
      </ul>
    </div>
  );
};

export default Nasdaq;
