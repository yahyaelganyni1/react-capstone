/* eslint-disable */
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import SingleCompany from './SingleCompany';

const Nasdaq = () => {
  const NasdaqList = [
    {
      symbol: 'ATVI',
      name: 'Activision Blizzard',
      sector: 'Communication Services',
      subSector: 'Communication Services',
      headQuarter: 'Santa Monica, CALIFORNIA',
      dateFirstAdded: null,
      cik: '0000718877',
      founded: '1983-06-10',
    },

    {
      symbol: 'ANSS',
      name: 'Ansys',
      sector: 'Technology',
      subSector: 'Technology',
      headQuarter: 'Canonsburg, PENNSYLVANIA',
      dateFirstAdded: null,
      cik: '0001013462',
      founded: '1996-06-20',
    },
    {
      symbol: 'AAPL',
      name: 'Apple',
      sector: 'Technology',
      subSector: 'Technology',
      headQuarter: 'Cupertino, CALIFORNIA',
      dateFirstAdded: null,
      cik: '0000320193',
      founded: '1980-12-12',
    },
    {
      "symbol": "CHKP",
      "name": "Check Point",
      "sector": "Technology",
      "subSector": "Technology",
      "headQuarter": "TEL AVIV-YAFO,",
      "dateFirstAdded": null,
      "cik": "0001015922",
      "founded": "1996-06-28"
    },
    {
      "symbol": "CTAS",
      "name": "Cintas",
      "sector": "Industrials",
      "subSector": "Industrials",
      "headQuarter": "Cincinnati, OHIO",
      "dateFirstAdded": null,
      "cik": "0000723254",
      "founded": "1983-01-01"
    },
    {
      "symbol": "CSCO",
      "name": "Cisco Systems",
      "sector": "Technology",
      "subSector": "Technology",
      "headQuarter": "San Jose, CALIFORNIA",
      "dateFirstAdded": null,
      "cik": "0000858877",
      "founded": "1990-02-01"
    },
    {
      "symbol": "CTSH",
      "name": "Cognizant",
      "sector": "Technology",
      "subSector": "Technology",
      "headQuarter": "Teaneck, NEW JERSEY",
      "dateFirstAdded": null,
      "cik": "0001058290",
      "founded": "1998-06-24"
    },
    {
      "symbol": "CMCSA",
      "name": "Comcast",
      "sector": "Communication Services",
      "subSector": "Communication Services",
      "headQuarter": "Philadelphia, PENNSYLVANIA",
      "dateFirstAdded": null,
      "cik": "0001166691",
      "founded": "1972-06-29"
    },
    {
      "symbol": "CPRT",
      "name": "Copart",
      "sector": "Industrials",
      "subSector": "Industrials",
      "headQuarter": "Dallas, TEXAS",
      "dateFirstAdded": null,
      "cik": "0000900075",
      "founded": "1994-03-17"
    },
    {
      "symbol": "COST",
      "name": "Costco",
      "sector": "Consumer Defensive",
      "subSector": "Consumer Defensive",
      "headQuarter": "Issaquah, WASHINGTON",
      "dateFirstAdded": null,
      "cik": "0000909832",
      "founded": "1985-12-05"
    },
    {
      "symbol": "CRWD",
      "name": "CrowdStrike",
      "sector": "Technology",
      "subSector": "Technology",
      "headQuarter": "Sunnyvale, CALIFORNIA",
      "dateFirstAdded": null,
      "cik": "0001535527",
      "founded": "2019-06-12"
    },
    {
      "symbol": "CSX",
      "name": "CSX Corporation",
      "sector": "Industrials",
      "subSector": "Industrials",
      "headQuarter": "Jacksonville, FLORIDA",
      "dateFirstAdded": null,
      "cik": "0000277948",
      "founded": "1980-11-03"
    },];

  return (
    <ul>
      {NasdaqList.map(list => {
        return <Link to={`/${list.symbol}`} key={list.symbol}>{list.name}</Link>
      })}
      <Routes>
        {NasdaqList.map((list) => {
          return (
            <Route path={`/${list.symbol}`} element={
              < SingleCompany
                key={list.symbol}
                name={list.name}
                sector={list.sector}
                founded={list.founded}
              />
            } />
          )
        })}
      </Routes>
    </ul>
  );
};

export default Nasdaq;
