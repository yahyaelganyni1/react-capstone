import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './nasdaqLink.css';
import { Link } from 'react-router-dom';
import { getCompany } from '../redux/nasdaq/nasdaq';
import forward from '../media/forward.svg';

const NasdaqLinks = () => {
  const nasdaqList = useSelector((state) => state.companyReducer);
  const company = nasdaqList[0];

  const dispatch = useDispatch();
  useEffect(() => {
    if (!nasdaqList.length) {
      dispatch(getCompany());
    }
  }, [dispatch]);

  return (
    <div className="nasdaq-links">
      {
        company?.map((comp) => (
          <Link to={comp.symbol} key={comp.symbol}>
            <img src={forward} width="10%" alt="forward-icon" />
            <p>
              {comp.name}
              {' '}
            </p>
          </Link>
        ))
      }
    </div>
  );
};

export default NasdaqLinks;
